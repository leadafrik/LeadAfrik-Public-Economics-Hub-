// Sanity Content Types

export interface SanityAuthor {
  _id: string
  name: string
  bio?: string
  longBio?: string
  image?: {
    asset: {
      _id: string
      url: string
    }
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
    crop?: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
  linkedin?: string
  youtube?: string
  podcast?: string
}

export interface SanityPost {
  _id: string
  title: string
  slug: {current: string}
  excerpt?: string
  content: string
  author?: SanityAuthor
  publishedAt: string
  type: 'explainer' | 'brief' | 'longform' | 'data-note'
  tags?: string[]
  featured?: boolean
  relatedDocuments?: SanityDocument[]
  relatedPosts?: SanityPost[]
}

export interface SanityDocument {
  _id: string
  title: string
  slug: {current: string}
  year: number
  institution: string
  category: string
  tags?: string[]
  summary: string
  keyTakeaways?: string[]
  commentary?: string
  pdfFile?: {
    asset: {
      _ref: string
      url: string
    }
  }
  relatedPosts?: SanityPost[]
  // New fields for enhanced data features
  columns?: Array<{
    name: string
    description: string
    unit?: string
    dataType: 'string' | 'number' | 'date' | 'boolean'
  }>
  updateFrequency?: 'Weekly' | 'Monthly' | 'Quarterly' | 'Annual' | 'On-demand'
  csvPreview?: string
  citationFormat?: string
}

export interface SanityEpisode {
  _id: string
  title: string
  slug: {current: string}
  publishedAt: string
  platform: 'podcast' | 'youtube' | 'both'
  embedUrl?: string
  summary?: string
  timestamps?: Array<{
    time: string
    label: string
  }>
  references?: Array<{
    title: string
    url?: string
  }>
  relatedDocuments?: SanityDocument[]
  relatedPosts?: SanityPost[]
}

export interface SanityIndicator {
  name: string
  value: string
  change?: string
  note?: string
}

export interface SanitySnapshot {
  _id: string
  month: number
  year: number
  dateRange: string
  indicators: SanityIndicator[]
  narrative: string[]
  sources: string[]
}

export interface HomeSettings {
  heroHeadline: string
  heroSubheadline: string
  featuredBlogPost?: SanityPost
  featuredDocument?: SanityDocument
  featuredEpisode?: SanityEpisode
}
