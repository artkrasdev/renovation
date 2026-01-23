export const useCdn = process.env.NODE_ENV === 'production'

// Sanity configuration
// For Next.js app: reads from NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET env vars
// For Sanity Studio: falls back to hardcoded values (Vite doesn't expose NEXT_PUBLIC_ vars)
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tbcowqjp'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
}

if (!dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')
}
