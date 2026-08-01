# MedGenz Next.js - SEO Optimized Healthcare Infrastructure Website

This project is a high-performance migration of the MedGenz static website to Next.js 15, featuring a full-featured blog and admin dashboard.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: NextAuth.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: Framer Motion

## Structure
- `/src/app`: Application routes and pages.
- `/src/components`: Reusable UI components.
- `/src/lib`: Shared utilities (Prisma client, etc.).
- `/prisma`: Database schema and migrations.
- `/public`: Static assets (images, fonts).

## Setup Instructions

### 1. Database Setup
1. Ensure you have **PostgreSQL** installed and running.
2. Create a database named `medgenz`.
3. Create a `.env` file from `.env.example` and update `DATABASE_URL`.

### 2. Installation
```bash
npm install
npx prisma generate
npx prisma db push
```

### 3. Production Deployment (VPS)
To host on a VPS (e.g., Ubuntu):
1. Install Node.js, PostgreSQL, and Nginx.
2. Clone the repository.
3. Setup the database and `.env` file.
4. Build the project: `npm run build`.
5. Run using PM2: `pm2 start npm --name "medgenz" -- start`.
6. Configure Nginx as a reverse proxy to port 3000.

## SEO Ranking Guide (Top 1 in 1 Month)

To rank MedGenz on the top page of Google, follow these steps:

### 1. Content is King (The Blog Strategy)
- **Daily Posts**: Publish one high-quality blog post daily.
- **Keywords**: Focus on "Low Competition, High Intent" keywords found in the `seo_keywords` list.
- **Internal Linking**: Link every blog post to a relevant service page (MOT, MGPS).

### 2. Technical SEO
- **Speed**: This Next.js build is optimized for 95+ Lighthouse scores. Keep images small (WebP).
- **Schema.org**: Ensure every page has JSON-LD structured data (already implemented in core pages).
- **Sitemap**: Submit `sitemap.xml` to Google Search Console.

### 3. Google Business Profile (GMB)
- Since the GMB rating is already 4.9, keep getting reviews.
- Post the blog links as "Updates" on your GMB profile to drive local traffic.

### 4. Backlink Building
- Reach out to medical directories and healthcare news sites.
- Share your projects on LinkedIn and YouTube (using the footer links).

## Switching to Production PostgreSQL
If you move from a local Postgres to a cloud provider (like Supabase/Neon):
1. Get the new connection string.
2. Update `DATABASE_URL` in your production environment variables.
3. Run `npx prisma db push` to sync the schema.
