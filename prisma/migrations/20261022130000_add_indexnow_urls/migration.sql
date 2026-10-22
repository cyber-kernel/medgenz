CREATE TABLE "IndexNowUrl" (
    "url" TEXT NOT NULL,
    "submitted" BOOLEAN NOT NULL DEFAULT false,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" TIMESTAMP(3),

    CONSTRAINT "IndexNowUrl_pkey" PRIMARY KEY ("url")
);

CREATE INDEX "IndexNowUrl_submitted_idx" ON "IndexNowUrl"("submitted");
