# LeadAfrik Hub — Copilot Instructions

## Project Overview

**LeadAfrik Public Economics Hub** is a production-ready Next.js website for Kenyan economic policy education and analysis.

### Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **CMS**: Ready for Sanity integration
- **Hosting**: Vercel-ready
- **Node**: 18+, npm 9+

---

## Key Points for Development

### Content Types (lib/types.ts)
- **Post**: Blog articles, explainers, briefs, data notes
- **Document**: Policy docs, PDFs, with summaries and takeaways
- **Episode**: Podcast/YouTube videos
- **Snapshot**: Monthly economy indicators

### Core Pages
- Home: Hero + featured content
- Blog: Posts with search/filter
- Documents: Searchable library with filters
- Podcast: Episodes with embed players
- About: Site + author bio
- Learn: Structured education modules
- Consulting: Service offerings
- Contribute: Contributor form
- Contact: Feedback & speaking inquiries
- Standards: Editorial standards
- YouTube: Channel page

### Component Structure
- **Header**: Navigation (responsive)
- **Footer**: Links, social, data sources
- **PostCard**: Blog post preview
- **DocumentCard**: Document preview

### Configuration
- Site constants in `lib/constants.ts`
- Mock data in `lib/mockData.ts` (for development)
- Environment variables in `.env.local` (for production)

---

## Development Workflow

### Adding Content
1. Update mock data in `lib/mockData.ts` OR
2. Connect Sanity CMS (install packages, create schemas)
3. Query CMS data in page components

### Creating New Pages
1. Create folder under `/app` (e.g., `/app/new-section`)
2. Add `page.tsx` (list view) and `[slug]/page.tsx` (detail view)
3. Import components and mock/CMS data
4. Style with TailwindCSS

### Styling
- Use Tailwind utility classes throughout
- Color scheme: Blue primary (`bg-blue-600`), gray neutrals
- Responsive: `sm:`, `md:`, `lg:` breakpoints
- Max-width container: `max-w-7xl mx-auto`

### Types & Constants
- Always use types from `lib/types.ts`
- Reference constants from `lib/constants.ts`
- Keep content arrays in `lib/mockData.ts` or CMS

---

## Common Tasks

### To add a new blog post
Update `lib/mockData.ts` → `mockPosts` array, or add to Sanity CMS.

### To update document categories
Edit `lib/constants.ts` → `DOCUMENT_CATEGORIES` array.

### To change homepage tagline
Edit `/app/page.tsx` → hero section h1.

### To customize header navigation
Edit `components/Header.tsx` → nav links.

### To add social media links
Update `lib/constants.ts` → `SOCIAL_LINKS` object, then use in components.

---

## Production Deployment

1. **Environment**: Set `.env.local` with CMS project ID, API keys, social URLs
2. **Build**: `npm run build` (verifies TypeScript, bundling)
3. **Deploy**: Connect repo to Vercel, auto-deploys on push to main
4. **Domain**: Configure custom domain in Vercel dashboard
5. **Forms**: Set up Formspree or Resend for contact/contribute forms
6. **Documents**: Store PDFs in S3 or Cloudflare R2 (update links in CMS)

---

## Troubleshooting

### Page not rendering
- Check slug matches in `lib/mockData.ts` or CMS
- Verify `[slug]` page has `useParams()` hook

### Styles not applying
- Ensure `globals.css` is imported in `layout.tsx`
- Clear `.next` folder: `rm -rf .next && npm run dev`

### CMS integration issues
- Verify Sanity project ID and dataset in env vars
- Test CMS queries separately before using in components

---

## Resources

- Next.js Docs: https://nextjs.org/docs
- TailwindCSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org
- Sanity CMS: https://www.sanity.io (when integrating)

---

## Questions?

Refer to README.md for architecture, /contact page for reaching out, or /standards for editorial guidelines.
