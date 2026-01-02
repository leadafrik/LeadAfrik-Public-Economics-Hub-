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

export interface LearningModule {
  _id: string
  title: string
  slug: {current: string}
  description: string
  content?: any[]
  estimatedTime?: string
  lessons?: Array<{
    title: string
    duration?: number
  }>
  relatedPosts?: SanityPost[]
  relatedDocuments?: SanityDocument[]
  relatedEpisodes?: SanityEpisode[]
  order?: number
}

export interface LearnSettings {
  _id: string
  pageTitle: string
  pageDescription: string
  instructionsTitle: string
  instructions?: Array<{
    step: number
    description: string
  }>
}

export interface Dataset {
  _id: string
  title: string
  category: string
  description: string
  coverage?: string
  variables?: string[]
  format?: string
  price: number
  order?: number
}

export interface DatasetBundle {
  _id: string
  name: string
  description?: string
  datasets: Dataset[]
  regularPrice: number
  bundlePrice: number
  order?: number
}

export interface DataSettings {
  _id: string
  pageTitle: string
  pageDescription: string
  pageIntro: string
  audiences?: Array<{
    title: string
    description: string
  }>
  dataStandardsApproach?: string[]
  dataStandardsDont?: string[]
  legalNotice: string
  ctaHeadline: string
  ctaDescription: string
}

export interface AboutSettings {
  _id: string
  hubTitle: string
  hubDescription: any[]
  founderName: string
  founderTitle: string
  founderBio: any[]
  founderImage?: {
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
  founderLinkedin?: string
  founderEmail?: string
}

