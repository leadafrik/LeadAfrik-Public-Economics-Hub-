// GROQ queries for Sanity CMS

export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    author->,
    publishedAt,
    type,
    tags,
    featured,
    relatedDocuments[]->,
    relatedPosts[]->,
  }
`

export const SINGLE_POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    author->,
    publishedAt,
    type,
    tags,
    featured,
    relatedDocuments[]->,
    relatedPosts[]->,
  }
`

export const ALL_DOCUMENTS_QUERY = `
  *[_type == "economicDocument"] | order(year desc) {
    _id,
    title,
    slug,
    year,
    institution,
    category,
    tags,
    summary,
    keyTakeaways,
    commentary,
    pdfFile,
    relatedPosts[]->,
  }
`

export const SINGLE_DOCUMENT_QUERY = `
  *[_type == "economicDocument" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    year,
    institution,
    category,
    tags,
    summary,
    keyTakeaways,
    commentary,
    pdfFile,
    relatedPosts[]->,
  }
`

export const ALL_EPISODES_QUERY = `
  *[_type == "episode"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    platform,
    embedUrl,
    summary,
    relatedDocuments[]->,
    relatedPosts[]->,
  }
`

export const SINGLE_EPISODE_QUERY = `
  *[_type == "episode" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    platform,
    embedUrl,
    summary,
    relatedDocuments[]->,
    relatedPosts[]->,
  }
`

export const LATEST_SNAPSHOT_QUERY = `
  *[_type == "snapshot"] | order(year desc, month desc)[0] {
    _id,
    month,
    year,
    dateRange,
    indicators,
    narrative,
    sources,
  }
`

export const AUTHOR_QUERY = `
  *[_type == "author"][0] {
    _id,
    name,
    bio,
    longBio,
    image,
    linkedin,
    youtube,
    podcast,
  }
`

export const HOME_SETTINGS_QUERY = `
  *[_type == "homeSettings"][0] {
    heroHeadline,
    heroSubheadline,
    featuredBlogPost->,
    featuredDocument->,
    featuredEpisode->,
  }
`

export const FEATURED_POSTS_QUERY = `
  *[_type == "post" && featured == true] | order(publishedAt desc)[0..2] {
    _id,
    title,
    slug,
    excerpt,
    author->,
    publishedAt,
    type,
    tags,
  }
`

export const ABOUT_SETTINGS_QUERY = `
  *[_type == "aboutSettings"][0] {
    _id,
    hubTitle,
    hubDescription,
    founderName,
    founderTitle,
    founderBio,
    founderImage,
    founderLinkedin,
    founderEmail,
  }
`

export const ALL_LEARNING_MODULES_QUERY = `
  *[_type == "learningModule"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    content,
    estimatedTime,
    lessons,
    relatedPosts[]->,
    relatedDocuments[]->,
    relatedEpisodes[]->,
    order,
  }
`

export const SINGLE_LEARNING_MODULE_QUERY = `
  *[_type == "learningModule" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    estimatedTime,
    lessons,
    relatedPosts[]->,
    relatedDocuments[]->,
    relatedEpisodes[]->,
  }
`

export const LEARN_SETTINGS_QUERY = `
  *[_type == "learnSettings"][0] {
    _id,
    pageTitle,
    pageDescription,
    instructionsTitle,
    instructions,
  }
`

export const ALL_DATASETS_QUERY = `
  *[_type == "dataset"] | order(order asc) {
    _id,
    title,
    category,
    description,
    coverage,
    variables,
    format,
    price,
    order,
  }
`

export const ALL_DATASET_BUNDLES_QUERY = `
  *[_type == "datasetBundle"] | order(order asc) {
    _id,
    name,
    description,
    datasets[]->,
    regularPrice,
    bundlePrice,
    order,
  }
`

export const DATA_SETTINGS_QUERY = `
  *[_type == "dataSettings"][0] {
    _id,
    pageTitle,
    pageDescription,
    pageIntro,
    audiences,
    dataStandardsApproach,
    dataStandardsDont,
    legalNotice,
    ctaHeadline,
    ctaDescription,
  }
`
