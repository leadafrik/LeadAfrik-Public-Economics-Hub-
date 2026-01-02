# LeadAfrik Content Flow Diagram

## The Big Picture: How Content Moves

```
                          ┌─────────────────────────┐
                          │   You (Stephen)         │
                          │   Creating Content      │
                          └────────────┬────────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
            ┌───────────────┐  ┌──────────────┐  ┌──────────────┐
            │ Write Blog    │  │ Upload PDF   │  │  Add Episode │
            │   Post in     │  │ + Summary in │  │   Embed in   │
            │   Sanity      │  │   Sanity     │  │   Sanity     │
            └────────┬──────┘  └──────┬───────┘  └──────┬───────┘
                     │                │                 │
                     └────────────────┼─────────────────┘
                                      │
                                      ▼
                          ┌──────────────────────────┐
                          │  Sanity CMS Database     │
                          │  (stores all content)    │
                          └────────────┬─────────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
            ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
            │   /blog      │   │  /documents  │   │  /podcast    │
            │  Shows all   │   │   Shows all  │   │  Shows all   │
            │  posts with  │   │  documents   │   │  episodes    │
            │  search      │   │   with       │   │  with        │
            │  & tags      │   │   filters    │   │  details     │
            └──────┬───────┘   └──────┬───────┘   └──────┬───────┘
                   │                  │                  │
                   └──────────────────┼─────────────────┘
                                      │
                    ┌─────────────────┴─────────────────┐
                    │                                   │
                    ▼                                   ▼
            ┌─────────────────┐          ┌────────────────────┐
            │   /blog/[slug]  │          │/documents/[slug]   │
            │  Show one post  │          │ Show one document  │
            │  + Related docs │          │ + Related posts    │
            └─────────────────┘          └────────────────────┘
```

---

## Content Types & Where They Live

### 📝 Blog Post

**You do:**
1. Write article in Sanity
2. Add tags (Tax, Energy, etc.)
3. Mark as featured (optional)
4. Publish

**Result:**
- Appears on `/blog` list
- Gets own page at `/blog/why-fuel-prices-rise`
- Appears on home page if featured
- Can link to related documents

**Example:**
```
POST: "Why Fuel Prices Keep Rising"
├── Content: 800 words explaining global + local factors
├── Tags: Energy, Prices, Transportation
├── Featured: Yes
└── Related Documents: 
    ├── Energy Act 2023
    └── CBK Monetary Policy Brief
```

---

### 📄 Economic Document

**You do:**
1. Upload PDF to Sanity
2. Write summary (150-300 words)
3. Add key takeaways (3-5 bullets)
4. Tag it (Tax, Debt, etc.)
5. Publish

**Result:**
- Appears on `/documents` list
- Gets own page at `/documents/finance-act-2023`
- Can be searched by category/year/tag
- Can link to related blog posts
- PDF is accessible from the page

**Example:**
```
DOCUMENT: "Finance Act 2023"
├── PDF: [finance-act-2023.pdf]
├── Year: 2023
├── Source: Ministry of Finance
├── Summary: "The Finance Act 2023 introduced several tax measures..."
├── Key Takeaways:
│   • VAT expanded to services
│   • Excise duty increased
│   • Mobile money tax withdrawn
└── Related Posts:
    └── "Why the Mobile Money Tax Was Unpopular"
```

---

### 🎥 Podcast / YouTube Episode

**You do:**
1. Record & upload to YouTube or podcast platform
2. Get the embed URL
3. Add to Sanity with summary
4. Link related documents/posts
5. Publish

**Result:**
- Appears on `/podcast` list
- Gets own page at `/podcast/ep-1-public-finance`
- Embeds player automatically
- Shows related content

**Example:**
```
EPISODE: "Ep. 1 - What is Public Finance?"
├── Platform: YouTube + Podcast
├── Embed URL: https://www.youtube.com/embed/...
├── Summary: "In this episode we explain..."
├── Related Documents:
│   ├── Constitution Chapter 12
│   └── Public Finance Management Act
└── Related Posts:
    └── "Public Finance Basics Explained"
```

---

### 👤 Author (You)

**You do:**
1. Upload professional headshot
2. Write bio
3. Add social links
4. Publish

**Result:**
- Appears on About page
- Appears on every blog post (author card)
- Shows on contact pages
- Links to LinkedIn/YouTube/Podcast

**Example:**
```
AUTHOR: "Stephen Okoth"
├── Headshot: [professional-photo.jpg]
├── Bio: "Economist focused on Kenyan public finance"
├── Long Bio: "Stephen is a graduate of Oberlin..."
├── Links:
│   ├── LinkedIn: https://linkedin.com/in/stephenokoth
│   ├── YouTube: https://youtube.com/@leadafrik
│   └── Podcast: https://podcasts.apple.com/...
```

---

### 🏠 Home Page Settings

**You do:**
1. Select 1 featured blog post
2. Select 1 featured document
3. Select 1 featured episode
4. Publish

**Result:**
- Home page shows your selected items
- Updates automatically when you change selections

**Example:**
```
HOME SETTINGS:
├── Hero Headline: "Kenya's economic policy—explained clearly"
├── Featured Blog Post: "Why Fuel Prices Keep Rising"
├── Featured Document: "Finance Act 2023"
└── Featured Episode: "Ep. 1 - Public Finance"
```

---

### 📊 Snapshot

**You do:**
1. Create monthly/quarterly snapshot
2. Add key indicators (inflation, FX, rates, etc.)
3. Add "what changed" narrative (5-10 bullets)
4. Add data sources
5. Publish

**Result:**
- Appears on `/snapshot`
- Shows latest snapshot on home page
- Becomes reference point for blog posts

**Example:**
```
SNAPSHOT: December 2025
├── Month: 12, Year: 2025
├── Indicators:
│   ├── Inflation: 2.8% (↓ 0.2%)
│   ├── FX (KES/USD): 129.5 (↑ 1.2%)
│   ├── CBK Rate: 9.50% (no change)
│   └── Fuel (Premium): KES 162 (↓ 2.3%)
├── What Changed:
│   ├── Inflation moderating within CBK target range
│   ├── Shilling strengthened vs USD
│   ├── Public debt continues to rise
│   └── Tax collection below target
└── Sources: KNBS, CBK, National Treasury
```

---

## How Items Connect

### One Document Used Many Ways

```
Finance Act 2023 (PDF + Summary)
├── Appears in:
│   ├── /documents library (searchable)
│   ├── /documents/finance-act-2023 (own page)
│   ├── Related to blog post: "Why Tax Collection Fell Short"
│   └── Mentioned in blog: "2024 Budget Implications"
└── Linked from:
    ├── Home page (if featured)
    └── Snapshot (if referenced)
```

### One Blog Post Connected to Everything

```
Blog Post: "Why Fuel Prices Keep Rising"
├── Published on:
│   ├── /blog (list view)
│   ├── /blog/why-fuel-prices-keep-rising (full page)
│   └── Home page (if featured)
├── Links to:
│   ├── Document: Energy Act 2023
│   ├── Document: CBK Monetary Policy
│   └── Related Post: "Understanding Exchange Rates"
└── Author:
    └── Shows your headshot + bio + social links
```

---

## Workflow at a Glance

### Daily (5-10 min)

```
1. Log into Sanity: http://localhost:3000/studio
2. Create or edit content (1-2 items)
3. Hit Publish
4. Done. Website updates instantly.
```

### Weekly (15 min)

```
1. Write 1 blog post
2. Upload 2-3 documents
3. Add snapshot (if it's snapshot week)
4. Link everything together
5. Publish all
```

### Monthly

```
1. Update Kenya Economy Snapshot
2. Select new featured items for home page
3. Review analytics (later)
4. Plan next month's content
```

---

## The Golden Rule

**Everything in Sanity Studio directly controls what users see.**

- You change a blog title in Sanity → Changes on website instantly
- You upload a document → It appears in the library instantly
- You mark post as featured → It shows on home page instantly

**No code. No rebuilds. No waiting.**

---

## Need a Flowchart by Type?

Choose which content type you want to understand:

### 📝 Blog Post Flow

```
Write in Sanity
    ↓
Add tags & featured flag
    ↓
Publish
    ↓
Appears on /blog
Appears on home (if featured)
Appears on /podcast or /documents if linked
```

### 📄 Document Flow

```
Prepare summary & takeaways
    ↓
Upload PDF to Sanity
    ↓
Add metadata (year, source, category)
    ↓
Publish
    ↓
Searchable on /documents
Has own detail page
Can be linked from blog posts
```

### 🎥 Episode Flow

```
Record & upload to YouTube
    ↓
Copy embed URL
    ↓
Add to Sanity + summary
    ↓
Publish
    ↓
Appears on /podcast
Has own page with player
Linked from blog/documents
```

---

## Quick FAQ

**Q: Can I edit content after publishing?**
A: Yes! Click it in Sanity, change it, publish again.

**Q: Will the website break?**
A: No. Sanity validates everything. You can't publish broken content.

**Q: Can people edit my content?**
A: Not unless you invite them. By default, only you can access CMS.

**Q: How many documents can I upload?**
A: Unlimited! (Well, within Sanity's storage limits, which are huge)

**Q: What if I delete something by mistake?**
A: Sanity keeps version history. Contact support to restore.

---

**You're all set!** Start by uploading one blog post and one document to test.
