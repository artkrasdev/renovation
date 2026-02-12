# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page marketing website for "Smailji Multi-Services," a French apartment renovation company. All user-facing content is in French; code (variable names, comments) is in English.

## Commands

```bash
npm run dev          # Start dev server (Next.js)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint (v9 flat config)
npm run sanity       # Standalone Sanity Studio dev server
npm run sanity:build # Build Sanity Studio
```

No test runner is configured. `.npmrc` requires `legacy-peer-deps=true` for dependency resolution.

## Architecture

**Framework:** Next.js 16 (App Router) with React 19, TypeScript, Tailwind CSS v4, Framer Motion, Sanity CMS.

### Server/Client Wrapper Pattern

Every data-driven section follows this pattern:
- **Server Wrapper** (e.g., `ServicesSectionWrapper.tsx`) — async component that fetches data from Sanity
- **Client Component** (e.g., `ServicesSection.tsx`) — `"use client"` component receiving data as props, handling interactivity and Framer Motion animations
- Every wrapper has **try/catch with static fallback data** from `app/data/`, so the site renders even if Sanity is unreachable

### Single-Page Structure

`app/page.tsx` composes all sections. Navigation uses French anchor IDs (`#accueil`, `#services`, `#portfolio`, `#equipe`, `#contact`) with smooth scrolling. The only other route is `/dashboard` (embedded Sanity Studio).

### Data Flow

- **Sanity CMS** (project `tbcowqjp`, dataset `production`) — 9 document schemas in `sanity/schemas/`
- **GROQ queries** in `app/lib/sanity/queries.ts` — all fetch functions (getHeroContent, getServices, etc.)
- **Sanity client + image URL builder** in `app/lib/sanity.ts` — CDN enabled in production
- **Static fallback data** in `app/data/` — mirrors Sanity schema shape
- **Embedded Sanity Studio** at `/dashboard` via catch-all route `app/dashboard/[[...index]]/page.tsx`

### Key Directories

- `app/components/sections/` — page sections (Wrapper + Client pairs)
- `app/components/ui/` — reusable primitives (Button, SectionHeading)
- `app/lib/` — Sanity client, queries, animation variants
- `app/data/` — static fallback content
- `app/types/index.ts` — all TypeScript interfaces
- `sanity/schemas/` — CMS document type definitions

## Styling

**Tailwind CSS v4** with CSS-first configuration (no `tailwind.config.ts`). Theme defined via `@theme inline` in `app/globals.css` with CSS custom properties in `:root`.

- **Fonts:** Poppins (headings, `--font-poppins`) + Inter (body, `--font-inter`), loaded via `next/font/google`
- **Primary color:** `#042FFF` (blue) | **Accent:** `#E07B54` (orange)
- Custom utility classes in `globals.css`: `.section-padding`, `.container-custom`, `.gradient-primary`, `.gradient-dark`, `.card-hover`

## Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID  # Sanity project ID (fallback: tbcowqjp)
NEXT_PUBLIC_SANITY_DATASET     # Dataset name (fallback: production)
SANITY_API_READ_TOKEN          # Optional, for private datasets
```

## Notes

- The contact form (`ContactForm.tsx`) is a mock — `handleSubmit` uses `setTimeout`, no API endpoint exists
- Two Sanity configs: root `sanity.config.ts` (for `sanity dev` CLI) and `sanity/sanity.config.ts` (for embedded studio with `basePath: '/dashboard'`)
- `next.config.ts` allows remote images from `images.unsplash.com`, `unpkg.com`, and `cdn.sanity.io`
- Deployment target is Vercel (see `DEPLOYMENT.md`)
