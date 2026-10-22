import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/seo-metadata";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const siteUrl = new URL(SITE_URL);
const sitemapUrl = new URL("/sitemap.xml", siteUrl);
const keyLocation = new URL("/key.txt", siteUrl);
const indexNowEndpoint = "https://api.indexnow.org/indexnow";
const maxUrlsPerRequest = 10_000;

function decodeXml(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function fetchSitemapUrls(): Promise<string[]> {
  const response = await fetch(sitemapUrl, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Sitemap request failed with status ${response.status}.`);
  }

  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>\s*([\s\S]*?)\s*<\/loc>/gi)]
    .map(([, value]) => new URL(decodeXml(value.trim())))
    .filter((url) => url.origin === siteUrl.origin)
    .map((url) => url.toString());

  if (urls.length === 0) {
    throw new Error("The sitemap did not contain any URLs for this site.");
  }

  return [...new Set(urls)];
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    console.error("IndexNow cron is not configured: CRON_SECRET is missing.");
    return NextResponse.json({ error: "IndexNow cron is not configured." }, { status: 500 });
  }

  if (request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const [sitemapUrls, keyResponse] = await Promise.all([
      fetchSitemapUrls(),
      fetch(keyLocation, { cache: "no-store" }),
    ]);

    if (!keyResponse.ok) {
      throw new Error(`IndexNow key request failed with status ${keyResponse.status}.`);
    }

    const key = (await keyResponse.text()).trim();
    if (!/^[a-zA-Z0-9]{8,128}$/.test(key)) {
      throw new Error("The publicly hosted IndexNow key is missing or invalid.");
    }

    const [existingUrls, trackedUrlCount] = await Promise.all([
      prisma.indexNowUrl.findMany({
        where: { url: { in: sitemapUrls } },
        select: { url: true },
      }),
      prisma.indexNowUrl.count(),
    ]);
    const knownUrls = new Set(existingUrls.map(({ url }) => url));
    const newUrls = sitemapUrls.filter((url) => !knownUrls.has(url));

    if (trackedUrlCount === 0) {
      await prisma.indexNowUrl.createMany({
        data: sitemapUrls.map((url) => ({ url })),
        skipDuplicates: true,
      });

      return NextResponse.json({
        status: "baseline-created",
        tracked: sitemapUrls.length,
        submitted: 0,
        message: "Existing sitemap URLs were recorded as the baseline; future URLs will be submitted.",
      });
    }

    if (newUrls.length === 0) {
      return NextResponse.json({ status: "up-to-date", tracked: sitemapUrls.length, submitted: 0 });
    }

    let submitted = 0;
    for (let offset = 0; offset < newUrls.length; offset += maxUrlsPerRequest) {
      const urlList = newUrls.slice(offset, offset + maxUrlsPerRequest);
      const response = await fetch(indexNowEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          host: siteUrl.host,
          key,
          keyLocation: keyLocation.toString(),
          urlList,
        }),
      });

      if (response.status !== 200 && response.status !== 202) {
        const details = await response.text();
        throw new Error(
          `IndexNow rejected a batch with status ${response.status}` +
            (details ? `: ${details}` : ""),
        );
      }

      await prisma.indexNowUrl.createMany({
        data: urlList.map((url) => ({ url, submitted: true, submittedAt: new Date() })),
        skipDuplicates: true,
      });
      submitted += urlList.length;
    }

    return NextResponse.json({
      status: "submitted",
      tracked: sitemapUrls.length,
      submitted,
    });
  } catch (error) {
    console.error("IndexNow submission failed:", error);
    return NextResponse.json({ error: "IndexNow submission failed." }, { status: 500 });
  }
}
