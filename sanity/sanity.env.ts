export const useCdn = process.env.NODE_ENV === 'production'

// Sanity Studio configuration
// These values are hardcoded here for Sanity Studio (Vite doesn't expose NEXT_PUBLIC_ vars)
// For Next.js app, values come from .env.local
export const projectId = 'tbcowqjp'
export const dataset = 'production'

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
}

if (!dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')
}
