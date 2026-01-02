// Site-wide constants and configuration

export const SITE_NAME = "LeadAfrik Public Economics Hub";
export const SITE_DESCRIPTION =
  "Kenya's economic policy - explained clearly. Documents, explainers, episodes, and analysis.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://leadafrik.com";

export const AUTHOR = {
  name: "Stephen Omukoko Okoth",
  email: "stephen@leadafrik.com",
  bio: "Mathematical economist interested in public finance, political economy, and making Kenyan economic policy understandable.",
};

export const SOCIAL_LINKS = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "#",
  podcast: process.env.NEXT_PUBLIC_PODCAST_URL || "#",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "#",
};

export const DOCUMENT_CATEGORIES = [
  "Constitution & Public Finance",
  "Finance Acts & Tax Amendments",
  "Bills",
  "Budget Documents",
  "Sessional Papers",
  "Manifestos",
  "Vision 2030 & Sector Strategies",
  "County & Devolution Frameworks",
];

export const DOCUMENT_TAGS = [
  "Tax",
  "Debt",
  "Devolution",
  "Trade",
  "Energy",
  "Education",
  "Health",
  "Public Finance",
  "Monetary Policy",
  "Inflation",
];

export const BLOG_TYPES = {
  explainer: "Explainer",
  brief: "Policy Brief",
  longform: "Longform Analysis",
  "data-note": "Data Note",
};

export const LEARN_MODULES = [
  {
    id: "public-finance",
    title: "Public Finance Basics in Kenya",
    description: "Understanding revenue, spending, and budgets.",
  },
  {
    id: "taxation",
    title: "Taxation",
    description:
      "VAT, excise, income tax, and how Kenya funds itself through taxes.",
  },
  {
    id: "debt-deficits",
    title: "Debt and Fiscal Deficits",
    description: "What Kenya owes, spending vs. revenue, and sustainability.",
  },
  {
    id: "inflation-interest",
    title: "Inflation, Interest Rates, and the Central Bank",
    description: "How prices rise, what the CBK controls, and what it means.",
  },
  {
    id: "devolution",
    title: "Devolution and County Financing",
    description:
      "How the 2010 Constitution reshaped fiscal power in Kenya.",
  },
];

export const CONSULTING_OFFERINGS = [
  {
    title: "Economic Policy Explainers & Briefings",
    description: "Clear, evidence-based explanations of policy decisions.",
  },
  {
    title: "Research Support & Data Analysis",
    description: "Working with economic data, KNBS datasets, and government records.",
  },
  {
    title: "Document Review & Synthesis",
    description:
      "Reviewing policy documents and producing clear, cited summaries.",
  },
  {
    title: "Speaking & Workshop Sessions",
    description: "Public or private sessions on Kenyan economics for teams and organizations.",
  },
];
