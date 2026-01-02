// Mock data for initial development and testing

import { Post, Document, Episode, Snapshot } from "./types";

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Why Fuel Prices Move: A Quick Explainer",
    slug: "why-fuel-prices-move",
    excerpt:
      "Understanding the factors that drive fuel price changes in Kenya.",
    content: `
      Fuel prices in Kenya are influenced by several interconnected factors. This explainer breaks down the key drivers.
      
      ## Global Oil Markets
      Kenya imports most of its fuel. When global oil prices rise, local prices follow (with a lag).
      
      ## Exchange Rates
      Oil is priced in US dollars. When the Kenya Shilling weakens, imported fuel becomes more expensive.
      
      ## Taxes & Levies
      The government applies excise duty and other levies on fuel. Tax changes directly affect pump prices.
      
      ## Local Supply & Distribution
      Competition among fuel retailers and distribution costs also play a role.
    `,
    author: "Stephen Okoth",
    publishedAt: "2025-12-15",
    type: "explainer",
    tags: ["Energy", "Prices", "Economics"],
    featured: true,
    references: [
      {
        title: "Kenya National Bureau of Statistics - Price Data",
        url: "https://www.knbs.or.ke",
      },
      {
        title: "Central Bank of Kenya - Monthly Bulletin",
        url: "https://www.centralbank.go.ke",
      },
    ],
  },
  {
    id: "2",
    title: "Kenya's Debt Situation: Key Numbers",
    slug: "kenya-debt-situation",
    excerpt: "A breakdown of Kenya's public debt levels and composition.",
    content: `
      Kenya's public debt has grown significantly over the past decade. Here are the essential facts.
      
      ## Total Debt Level
      As of Q3 2025, Kenya's public debt stands at approximately KES 11 trillion.
      
      ## Domestic vs. External
      About 60% is domestic debt (owed to Kenyans), 40% is external (owed to other governments and institutions).
      
      ## Who Kenya Owes
      Major creditors include the IMF, World Bank, China, and bilateral partners.
      
      ## Sustainability Question
      Debt service costs are rising, competing with development spending.
    `,
    author: "Stephen Okoth",
    publishedAt: "2025-12-01",
    type: "brief",
    tags: ["Debt", "Public Finance", "Fiscal Policy"],
    featured: true,
  },
];

export const mockDocuments: Document[] = [
  {
    id: "1",
    title: "The Constitution of Kenya (2010) - Chapter 12: Public Finance",
    slug: "constitution-2010-public-finance",
    year: 2010,
    institution: "Parliament of Kenya",
    category: "Constitution & Public Finance",
    tags: ["Constitution", "Public Finance", "Devolution"],
    pdfUrl: "#",
    summary:
      "Chapter 12 of the 2010 Constitution establishes the framework for public finance in Kenya, including revenue-raising powers, expenditure principles, and the roles of various government bodies.",
    keyTakeaways: [
      "Devolves significant fiscal powers to county governments",
      "Establishes the Public Finance Management Act requirements",
      "Sets principles for fairness, efficiency, and accountability in public spending",
      "Creates the constitutional role of the Controller and Auditor-General",
    ],
    commentary:
      "This chapter fundamentally reshaped Kenya's fiscal system by decentralizing power to counties and establishing strict accountability mechanisms.",
  },
  {
    id: "2",
    title: "Finance Act, 2023 - Summary and Changes",
    slug: "finance-act-2023",
    year: 2023,
    institution: "Ministry of Finance",
    category: "Finance Acts & Tax Amendments",
    tags: ["Tax", "Revenue", "2023"],
    pdfUrl: "#",
    summary:
      "The Finance Act 2023 introduced several tax measures aimed at broadening the tax base and improving revenue collection.",
    keyTakeaways: [
      "Introduced mobile money tax (later withdrawn)",
      "Increased excise duty on selected goods",
      "Expanded the VAT net to include certain previously exempted services",
    ],
  },
];

export const mockEpisodes: Episode[] = [
  {
    id: "1",
    title: "Ep. 1 - What is Public Finance?",
    slug: "ep-1-public-finance-basics",
    date: "2025-11-20",
    platform: "both",
    embedUrl: "https://www.youtube.com/embed/placeholder",
    summary: "In our first episode, we break down what public finance is and why it matters.",
    references: [
      {
        title: "KNBS Budget Overview",
        url: "https://www.knbs.or.ke",
      },
    ],
  },
];

export const mockSnapshot: Snapshot = {
  id: "1",
  month: 12,
  year: 2025,
  dateRange: "October - December 2025",
  indicators: [
    {
      name: "Inflation (CPI)",
      value: "2.8%",
      change: "-0.2%",
      note: "Year-over-year",
    },
    {
      name: "FX Rate (KES/USD)",
      value: "129.5",
      change: "+1.2%",
      note: "Mid-rate",
    },
    {
      name: "CBK Policy Rate",
      value: "9.50%",
      change: "No change",
      note: "Last adjusted Nov 2024",
    },
    {
      name: "Fuel Price (Premium)",
      value: "KES 162/litre",
      change: "-2.3%",
      note: "End of November",
    },
  ],
  narrative: [
    "Inflation continues to moderate, remaining within the CBK's target range.",
    "The Shilling strengthened slightly in Q4, supported by diaspora remittances.",
    "Government revenue collection showed mixed results, with tax collection below target.",
    "Public debt continues to rise, though at a slower pace than previous quarters.",
  ],
  sources: [
    "Kenya National Bureau of Statistics (KNBS)",
    "Central Bank of Kenya (CBK)",
    "National Treasury",
    "Kenya Revenue Authority (KRA)",
  ],
};
