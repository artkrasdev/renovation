# Vercel Deployment Guide

## ✅ Project Status: Ready for Deployment

Your Next.js project is configured and ready to deploy to Vercel. Here's what has been set up:

### ✅ What's Ready

1. **Next.js Configuration**
   - `next.config.ts` configured with image domains (including Sanity CDN)
   - Build scripts configured in `package.json`
   - TypeScript configuration complete

2. **Sanity Integration**
   - Sanity client configured to read from environment variables
   - Image URL builder configured
   - All queries set up in `app/lib/sanity/queries.ts`
   - Sanity Studio configuration ready

3. **Environment Variables**
   - `.env.local.example` template provided
   - Sanity configuration reads from `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`

## 🚀 How to Deploy to Vercel

### Step 1: Prepare Your Sanity Project

1. **Get your Sanity credentials:**
   - Go to https://www.sanity.io/manage
   - Find your project ID (currently: `tbcowqjp`)
   - Note your dataset name (currently: `production`)

2. **Optional: Create a read token** (if using private datasets):
   - In Sanity Studio → API → Tokens
   - Create a new token with "Viewer" permissions
   - Save this token (you'll add it to Vercel)

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import project on Vercel:**
   - Go to https://vercel.com/new
   - Import your repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables:**
   In Vercel project settings → Environment Variables, add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=tbcowqjp
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
   
   If using a private dataset, also add:
   ```
   SANITY_API_READ_TOKEN=your-read-token-here
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts and add environment variables when asked.

### Step 3: Configure Production Environment

After first deployment, update environment variables in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development environments
- Redeploy if needed

## 🔧 How Sanity Works on Vercel

### Architecture Overview

1. **Content Management:**
   - Sanity Studio runs separately (not on Vercel)
   - Access Studio locally: `npm run sanity`
   - Or deploy Studio separately: `npm run sanity:deploy`

2. **Content Delivery:**
   - Your Next.js app on Vercel fetches content from Sanity API
   - Uses `@sanity/client` configured in `app/lib/sanity.ts`
   - Images served from Sanity CDN (`cdn.sanity.io`)

3. **Environment Variables:**
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET`: Dataset name (usually "production")
   - `SANITY_API_READ_TOKEN`: Optional, for private datasets

### How It Works:

```
┌─────────────────┐
│  Sanity Studio  │  (Content editing - separate deployment)
│  (Local/Cloud)  │
└────────┬────────┘
         │
         │ Content saved to
         ▼
┌─────────────────┐
│  Sanity Cloud   │  (Content storage & API)
│   (Backend)     │
└────────┬────────┘
         │
         │ API requests
         ▼
┌─────────────────┐
│  Next.js App    │  (Your Vercel deployment)
│   on Vercel     │
└─────────────────┘
```

### Content Fetching Flow:

1. User visits your Vercel site
2. Next.js server fetches content from Sanity API using:
   - `getHeroContent()`
   - `getServices()`
   - `getPortfolioProjects()`
   - etc. (from `app/lib/sanity/queries.ts`)
3. Content is rendered server-side (SSR)
4. Images are served from Sanity CDN

### CDN Usage:

- **Production:** Uses Sanity CDN (`useCdn: true`) for faster image delivery
- **Development:** Direct API calls (`useCdn: false`) for real-time updates

## 📝 Important Notes

### Sanity Studio Deployment

Sanity Studio is **embedded** in your Next.js app:

- **Access Studio:** Visit `yourdomain.com/dashboard` (or `localhost:3000/dashboard` in development)
- **No separate deployment needed:** Studio runs as part of your Next.js app on Vercel
- **Local development:** You can still use `npm run sanity` for standalone Studio, or access it at `/dashboard` when running `npm run dev`

**Important:** After deploying to Vercel, add your Vercel domain to Sanity CORS settings:
1. Go to https://www.sanity.io/manage
2. Select your project → Settings → API → CORS origins
3. Add your Vercel domain (e.g., `https://your-app.vercel.app`)
4. Enable "Allow credentials"

### Environment Variables

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Non-prefixed variables are server-only
- Always set these in Vercel dashboard, not in code

### Build Process

Vercel will:
1. Install dependencies (`npm install`)
2. Run build (`npm run build`)
3. Start production server (`npm start`)

The build process:
- Compiles TypeScript
- Optimizes images
- Generates static pages where possible
- Sets up server-side rendering

## 🔍 Troubleshooting

### Build Fails

1. **Check environment variables** are set in Vercel
2. **Verify Sanity project ID** is correct
3. **Check build logs** in Vercel dashboard

### Content Not Loading

1. **Verify dataset name** matches your Sanity project
2. **Check API permissions** in Sanity dashboard
3. **Verify environment variables** are set correctly
4. **Check network tab** in browser DevTools for API errors

### Images Not Loading

1. **Verify image domain** is in `next.config.ts` (already configured)
2. **Check Sanity image references** are correct
3. **Verify CDN is enabled** in production

## ✅ Pre-Deployment Checklist

- [x] Environment variables configured
- [x] Sanity client configured
- [x] Image domains configured in `next.config.ts`
- [x] Build script works (`npm run build`)
- [x] TypeScript compiles without errors
- [ ] Environment variables set in Vercel dashboard
- [ ] Sanity Studio deployed (optional)
- [ ] Test deployment on preview branch

## 🎯 Next Steps

1. **Deploy to Vercel** using the steps above
2. **Test your deployment** - verify content loads correctly
3. **Deploy Sanity Studio** (optional): `npm run sanity:deploy`
4. **Set up custom domain** in Vercel (if needed)
5. **Configure preview deployments** for testing

Your project is ready! 🚀
