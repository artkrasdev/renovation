import {client, urlFor} from '../sanity'

const fetchOptions = { next: { revalidate: 60 } } as const

// Hero Content Query
export async function getHeroContent() {
  const query = `*[_type == "hero"][0]{
    title,
    subtitle,
    ctaText,
    ctaSecondary,
    badgeText,
    mainImage,
    secondaryImage
  }`
  return await client.fetch(query, {}, fetchOptions)
}

// Stats Query
export async function getStats() {
  const query = `*[_type == "stat"] | order(order asc){
    value,
    suffix,
    label
  }`
  return await client.fetch(query, {}, fetchOptions)
}

// Services Query
export async function getServices() {
  const query = `*[_type == "service"] | order(order asc){
    _id,
    title,
    description,
    icon,
    features,
    image
  }`
  return await client.fetch(query, {}, fetchOptions)
}

// Portfolio Projects Query
export async function getPortfolioProjects() {
  const query = `*[_type == "portfolioProject"] | order(order asc){
    _id,
    title,
    category,
    description,
    "images": images[]{
      image,
      alt,
      description
    }
  }`
  const results = await client.fetch(query, {}, fetchOptions)

  // Process images to get URLs using urlFor
  return results.map((project: any) => ({
    ...project,
    images: project.images
      .map((img: any) => ({
        src: img.image ? urlFor(img.image).width(800).height(600).url() : '',
        alt: img.alt || '',
        description: img.description || '',
      }))
      .filter((img: any) => img.src)
  }))
}

// Process Steps Query
export async function getProcessSteps() {
  const query = `*[_type == "processStep"] | order(stepNumber asc){
    "id": stepNumber,
    title,
    description,
    icon
  }`
  return await client.fetch(query, {}, fetchOptions)
}

// Process Image Query
export async function getProcessImage() {
  const query = `*[_type == "processImage"][0]{
    image,
    alt
  }`
  return await client.fetch(query, {}, fetchOptions)
}

// FAQ Items Query
export async function getFAQItems() {
  const query = `*[_type == "faq"] | order(order asc){
    _id,
    question,
    answer
  }`
  return await client.fetch(query, {}, fetchOptions)
}

// Section Titles Query
export async function getSectionTitles() {
  const query = `*[_type == "sectionTitle"]{
    sectionKey,
    title,
    subtitle
  }`
  const results = await client.fetch(query, {}, fetchOptions)

  // Convert array to object keyed by sectionKey
  const titles: Record<string, {title: string; subtitle: string}> = {}
  results.forEach((item: {sectionKey: string; title: string; subtitle: string}) => {
    titles[item.sectionKey] = {
      title: item.title,
      subtitle: item.subtitle,
    }
  })

  return titles
}

// Company Info Query
export async function getCompanyInfo() {
  const query = `*[_type == "companyInfo"][0]{
    name,
    phone,
    email,
    address,
    businessHours,
    siret,
    rcs
  }`
  return await client.fetch(query, {}, fetchOptions)
}
