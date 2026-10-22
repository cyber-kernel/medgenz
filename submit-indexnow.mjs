import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const siteUrl = new URL("https://www.medgenz.com");
const sitemapUrl = new URL("/sitemap.xml", siteUrl);
const keyLocation = new URL("/key.txt", siteUrl).toString();
const keyFile = fileURLToPath(new URL("./public/key.txt", import.meta.url));
const indexNowEndpoint = "https://api.indexnow.org/indexnow";
const maxUrlsPerRequest = 10_000;

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function getSitemapUrls() {
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Sitemap request failed: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>\s*([\s\S]*?)\s*<\/loc>/gi)]
    .map(([, value]) => new URL(decodeXml(value.trim())))
    .filter((url) => url.origin === siteUrl.origin)
    .map((url) => url.toString());

  if (urls.length === 0) {
    throw new Error(`No URLs for ${siteUrl.host} were found in ${sitemapUrl}`);
  }

  return [...new Set(urls)];
}

async function submitUrls(urls, key) {
  const batches = [];
  for (let i = 0; i < urls.length; i += maxUrlsPerRequest) {
    batches.push(urls.slice(i, i + maxUrlsPerRequest));
  }

  for (const [index, urlList] of batches.entries()) {
    const response = await fetch(indexNowEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: siteUrl.host,
        key,
        keyLocation,
        urlList,
      }),
    });

    if (response.status !== 200 && response.status !== 202) {
      const details = await response.text();
      throw new Error(
        `IndexNow rejected batch ${index + 1}/${batches.length}: ` +
          `${response.status} ${response.statusText}${details ? ` - ${details}` : ""}`,
      );
    }

    console.log(`Submitted batch ${index + 1}/${batches.length} (${urlList.length} URLs).`);
  }
}

async function main() {
  const key = (await readFile(keyFile, "utf8")).trim();
  if (!/^[a-zA-Z0-9]{8,128}$/.test(key)) {
    throw new Error(`The IndexNow key in ${keyFile} must be 8-128 alphanumeric characters.`);
  }

  const urls = await getSitemapUrls();
  console.log(`Found ${urls.length} URLs in ${sitemapUrl}.`);
  await submitUrls(urls, key);
  console.log("All sitemap URLs were successfully submitted to IndexNow.");
}

main().catch((error) => {
  console.error("IndexNow submission failed:", error);
  process.exitCode = 1;
});
