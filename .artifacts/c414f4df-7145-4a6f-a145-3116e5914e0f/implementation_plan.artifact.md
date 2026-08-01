# Implementation Plan: Digital Nurse Call Systems (NCS) Migration

Migrate the "Digital Nurse Call Systems" section from the static site to Next.js 15, ensuring high content density, modern UI parity, and SEO optimization.

## User Review Required

> [!IMPORTANT]
> The dynamic route will handle 3 main categories: `bedside-hardware`, `central-control-displays`, and `emergency-indicators`. This consolidates the deeper product technicalities into a unified template.

## Proposed Changes

### [Nurse Call System Hub]
#### [NEW] [page.tsx](file:///C:/Users/ANUJ/Desktop/Desktop/projects/medgenz/medgenz-nextjs/src/app/services/nurse-call-system/page.tsx)
- Replicate the layout of `nurse-call-system.html`.
- Sections: Hero, System Execution Blueprint, Anatomy of Communication (Architecture Grid), Technical Resource Vault, Technical Specifications, Certifications, Client Marquee, FAQ, CTA.
- Use `lucide-react` icons and standard MedGenz components.

### [NCS Sub-Product Template]
#### [NEW] [page.tsx](file:///C:/Users/ANUJ/Desktop/Desktop/projects/medgenz/medgenz-nextjs/src/app/services/nurse-call-system/[slug]/page.tsx)
- Dynamic route to handle deep technical data for NCS components.
- Data mapping for:
  - `bedside-hardware`
  - `central-control-displays`
  - `emergency-indicators`
- Template include: Hero, Configurations Grid, Internal Engineering (Anatomy of Quality), Applications, Why Choose MedGenz, Case Study, Tech Specs Table, FAQ.

## Verification Plan

### Automated Tests
- Build verification: `npm run build`
- Linter check for `className` and accessibility.

### Manual Verification
- Check all internal links from Hub to Sub-pages.
- Verify 100% content density against static source files.
- Test mobile responsiveness of the technical tables and grids.
