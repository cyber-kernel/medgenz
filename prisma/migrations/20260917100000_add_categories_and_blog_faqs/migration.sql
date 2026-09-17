CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "BlogCategory" (
    "blogId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "BlogCategory_pkey" PRIMARY KEY ("blogId", "categoryId")
);

ALTER TABLE "Blog" ADD COLUMN "faqs" JSONB;
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");
CREATE INDEX "BlogCategory_categoryId_position_idx" ON "BlogCategory"("categoryId", "position");
ALTER TABLE "BlogCategory" ADD CONSTRAINT "BlogCategory_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "BlogCategory" ADD CONSTRAINT "BlogCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

DO $$
DECLARE
  blog_record RECORD;
  category_name TEXT;
  category_id TEXT;
  category_position INTEGER;
BEGIN
  FOR blog_record IN SELECT "id", "categories" FROM "Blog" LOOP
    category_position := 0;
    FOREACH category_name IN ARRAY COALESCE(blog_record."categories", ARRAY['Healthcare']::TEXT[]) LOOP
      IF NULLIF(TRIM(category_name), '') IS NULL THEN
        CONTINUE;
      END IF;
      category_id := 'cat_' || md5(lower(trim(category_name)));
      INSERT INTO "Category" ("id", "name", "slug", "updatedAt")
      VALUES (category_id, trim(category_name), regexp_replace(lower(trim(category_name)), '[^a-z0-9]+', '-', 'g'), CURRENT_TIMESTAMP)
      ON CONFLICT ("name") DO NOTHING;
      SELECT "id" INTO category_id FROM "Category" WHERE lower("name") = lower(trim(category_name)) LIMIT 1;
      INSERT INTO "BlogCategory" ("blogId", "categoryId", "position") VALUES (blog_record."id", category_id, category_position) ON CONFLICT DO NOTHING;
      category_position := category_position + 1;
    END LOOP;
  END LOOP;
END $$;