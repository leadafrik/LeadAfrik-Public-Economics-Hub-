# Trust & Retention Features — Framework Documentation

All components and utilities are ready to drop in. No backend wiring required yet — just add content to Sanity and import components.

---

## 1. **Citation Box** (`components/CitationBox.tsx`)

Display citable reference on dataset/document pages. Includes copy-to-clipboard.

### Usage
```tsx
import CitationBox from '@/components/CitationBox';

<CitationBox 
  citation="LeadAfrik Economics. (2025). CPI Monthly 2005–2025 [Data set]."
  title="CPI Monthly"
  year={2025}
/>
```

### Where to add
- `/app/documents/[slug]/page.tsx` (after summary section)
- `/app/data/[dataset]/page.tsx` (if dataset detail pages exist)

---

## 2. **Data Dictionary** (`components/DataDictionary.tsx`)

Renders columns/units in a clean table. Column definitions live in Sanity schema.

### Usage
```tsx
import DataDictionary from '@/components/DataDictionary';

<DataDictionary 
  columns={document.columns}
  updateFrequency={document.updateFrequency}
/>
```

### Data source
- Sanity `economicDocument` schema → `columns[]` field (added)
- Each column: name, description, unit, dataType

### Where to add
- `/app/documents/[slug]/page.tsx` (section after key takeaways)
- `/app/data/[dataset]/page.tsx` (preview section)

---

## 3. **Newsletter Signup** (`components/NewsletterSignup.tsx`)

Email subscription form. Placeholder for Mailchimp/Substack API.

### Usage
```tsx
import NewsletterSignup from '@/components/NewsletterSignup';

<NewsletterSignup />
```

### Backend hookup (when ready)
1. Create `/app/api/newsletter/route.ts`
2. Integrate Mailchimp API (or Substack, Loopsai, etc.)
3. Uncomment `fetch('/api/newsletter')` in component

### Where to add
- `/app/page.tsx` (homepage, above footer)
- `/app/blog/page.tsx` (sidebar or after posts)
- `/app/data/page.tsx` (above dataset list)

---

## 4. **"Used By" Strip** (`components/UsedByStrip.tsx`)

Display logos/testimonials of organizations using LeadAfrik data.

### Configuration
Edit `/lib/testimonials.ts`:
```ts
export const TESTIMONIALS: Testimonial[] = [
  {
    organization: "Policy Think Tank",
    logoUrl: "/brand/partner-logo.png",
    testimonial: "LeadAfrik's data informed our budget analysis.",
    author: "Jane Smith",
    title: "Research Director",
    link: "https://thinktank.org",
  },
];
```

### Usage
```tsx
import UsedByStrip from '@/components/UsedByStrip';

<UsedByStrip />
```

### Where to add
- `/app/page.tsx` (after latest analysis section)
- `/app/data/page.tsx` (after data dictionary section)

---

## 5. **Custom Data Request Form** (`components/CustomDataRequestForm.tsx`)

Form with scope + budget fields for custom dataset requests.

### Usage
```tsx
import CustomDataRequestForm from '@/components/CustomDataRequestForm';

<CustomDataRequestForm />
```

### Backend hookup (when ready)
1. Create `/app/api/custom-data-request/route.ts`
2. Email to admin (same as data request)
3. Uncomment `fetch('/api/custom-data-request')` in component

### Where to add
- `/app/data/page.tsx` (below dataset list)
- Create dedicated `/app/data/request/page.tsx` (if custom data becomes a feature)

---

## 6. **JSON-LD SEO** (`lib/seo.ts`)

Generate structured data for Google Search/knowledge panels.

### Usage

**On blog detail page:**
```tsx
import { generateArticleSchema } from '@/lib/seo';

const schema = generateArticleSchema({
  title: post.title,
  excerpt: post.excerpt,
  publishedAt: post.publishedAt,
  author: post.author,
  slug: post.slug.current,
});

// Add to page <head>
<script type="application/ld+json">
  {JSON.stringify(schema)}
</script>
```

**On podcast detail page:**
```tsx
import { generatePodcastSchema } from '@/lib/seo';

const schema = generatePodcastSchema({
  title: episode.title,
  summary: episode.summary,
  publishedAt: episode.publishedAt,
  embedUrl: episode.embedUrl,
  slug: episode.slug.current,
});
```

**On dataset pages:**
```tsx
import { generateDatasetSchema } from '@/lib/seo';

const schema = generateDatasetSchema({
  title: document.title,
  description: document.summary,
  slug: document.slug.current,
});
```

### Where to add
- `/app/blog/[slug]/page.tsx` (in component return, inside `<head>` equivalent)
- `/app/podcast/[slug]/page.tsx` (same pattern)
- `/app/documents/[slug]/page.tsx` (same pattern)

---

## 7. **Sanity Schema Updates**

Added to `economicDocument` schema:
- `columns[]` — array of {name, description, unit, dataType}
- `updateFrequency` — string enum (Weekly/Monthly/Quarterly/Annual/On-demand)
- `csvPreview` — text field (first 5 rows in CSV format)
- `citationFormat` — text field (copy-ready citation)

### Usage in Sanity CMS
When creating/editing a dataset:
1. Fill in "Data Dictionary (Columns)" array
2. Set "Update Frequency"
3. Paste 5-row CSV preview in "CSV Preview" field
4. Add citation format in "Citation Format" field

Then access in code via:
```tsx
document.columns
document.updateFrequency
document.csvPreview
document.citationFormat
```

---

## 8. **Implementation Checklist**

Quick reference for wiring up each feature:

- [ ] **Citation Box**: Add to `documents/[slug]` page
- [ ] **Data Dictionary**: Add to `documents/[slug]` page (after summary)
- [ ] **Newsletter**: Add to `page.tsx` (homepage)
- [ ] **"Used By" Strip**: Add to `page.tsx`; populate `lib/testimonials.ts`
- [ ] **Custom Data Request**: Add to `/data/page.tsx`
- [ ] **JSON-LD**: Add to all detail pages (blog, podcast, documents)
- [ ] **Sanity Schema**: Already updated (columns, updateFrequency, csvPreview, citationFormat)

---

## 9. **Backend Hookup (When Ready)**

For forms requiring email submissions:

1. **Newsletter API** (`/api/newsletter`)
   - Input: { email }
   - Service: Mailchimp, Substack, or email list

2. **Custom Data Request API** (`/api/custom-data-request`)
   - Input: { name, email, organization, dataScope, budget, description }
   - Action: Email to admin + save to Sanity/database

3. **Contact/Contribute Forms**
   - `/api/contact` and `/api/contribute` (same pattern)

All components have placeholder comments showing where to uncomment the `fetch()` calls.

---

## 10. **Design System Consistency**

All new components follow LeadAfrik design:
- **Typography**: font-light headings, serif body text
- **Colors**: blue accent (#1e40af), gray borders (#e5e5e5)
- **Spacing**: max-w-3xl containers, py-16 sections
- **No shadows/gradients**: Clean, institutional look

---

**Next Steps:**
1. Populate Sanity schema fields (columns, citations, CSV previews)
2. Add testimonials to `lib/testimonials.ts`
3. Import components into pages
4. Set up backend email APIs when needed
