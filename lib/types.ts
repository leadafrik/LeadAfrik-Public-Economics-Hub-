// Content type definitions for CMS

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  type: "explainer" | "brief" | "longform" | "data-note";
  tags: string[];
  featured: boolean;
  references?: Reference[];
  relatedDocuments?: string[];
  relatedPosts?: string[];
}

export interface Document {
  id: string;
  title: string;
  slug: string;
  year: number;
  institution: string;
  category: string;
  tags: string[];
  pdfUrl: string;
  summary: string;
  keyTakeaways: string[];
  commentary?: string;
  relatedPosts?: string[];
}

export interface Episode {
  id: string;
  title: string;
  slug: string;
  date: string;
  platform: "podcast" | "youtube" | "both";
  embedUrl: string;
  summary: string;
  timestamps?: Timestamp[];
  references?: Reference[];
  relatedDocs?: string[];
}

export interface Snapshot {
  id: string;
  month: number;
  year: number;
  dateRange: string;
  indicators: Indicator[];
  narrative: string[];
  sources: string[];
}

export interface Indicator {
  name: string;
  value: string;
  change?: string;
  note?: string;
}

export interface Reference {
  title: string;
  url?: string;
  citation?: string;
}

export interface Timestamp {
  time: string;
  label: string;
}

export interface Contributor {
  id: string;
  name: string;
  bio: string;
  links?: Record<string, string>;
  headshot?: string;
  role: string;
}
