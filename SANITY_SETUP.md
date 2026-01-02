# Sanity CMS Configuration

## Step 1: Create a Sanity Project

1. Go to https://www.sanity.io/manage
2. Sign in or create a free account
3. Click "Create project"
4. Name it: `leadafrik-hub`
5. Choose "Production" dataset
6. Copy your **Project ID** and **Dataset** name

## Step 2: Set Environment Variables

Add these to `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Step 3: Create Authentication Token

1. In Sanity Manage (https://www.sanity.io/manage)
2. Go to your project → Settings → API → Tokens
3. Create a new token with these permissions:
   - Editor (read + write)
4. Name it: "NextJS App"
5. Copy the token
6. Add to `.env.local`:

```env
SANITY_API_TOKEN=your_token_here
```

## Step 4: Access Sanity Studio

Once configured, access your CMS at:

```
http://localhost:3000/studio
```

## What You Can Do in Sanity Studio

- ✅ Upload blog posts
- ✅ Upload economic documents (PDFs)
- ✅ Create podcast/YouTube episodes
- ✅ Update economy snapshots
- ✅ Manage your author profile (including headshot)
- ✅ Set homepage featured items

All changes publish instantly to the website.
