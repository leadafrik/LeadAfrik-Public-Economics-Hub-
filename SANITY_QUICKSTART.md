# 🎯 LeadAfrik CMS Integration Guide

## ✅ What's Ready Right Now

Your Sanity CMS is **fully configured and integrated** into the Next.js site. 

- ✅ Sanity Studio ready at `/studio`
- ✅ All schemas created (Post, Document, Episode, Snapshot, Author, HomeSettings)
- ✅ Next.js connected to CMS
- ✅ Development server running

**All you need to do:** Set your Sanity Project ID.

---

## Step-by-Step: Getting Sanity Running (5 minutes)

### Step 1️⃣: Create a Free Sanity Account

1. Go to **https://www.sanity.io**
2. Click **Sign up free**
3. Create an account (email, password)
4. You'll be asked to create a project

### Step 2️⃣: Create Your Sanity Project

1. Once signed in, click **Create project**
2. **Project name:** `leadafrik-hub`
3. **Data region:** Choose the closest to you (e.g., "EU")
4. Click **Create** and wait ~30 seconds

### Step 3️⃣: Copy Your Project ID

1. After creation, you're in your Sanity dashboard
2. Click **Settings** in the bottom left
3. Look for **Project ID** (it's a long string like `abc123def456`)
4. **Copy** this entire ID

### Step 4️⃣: Add to .env.local

1. Open `.env.local` in your project root
2. Find this line:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   ```
3. Replace `your_project_id_here` with your actual Project ID
4. Save the file
5. Restart your dev server (Ctrl+C, then `npm run dev`)

### Step 5️⃣: Access Sanity Studio

1. Visit **http://localhost:3000/studio**
2. You'll see a login screen
3. Click **Continue with Sanity**
4. You'll be taken through Sanity authentication
5. After login, you're in the **CMS admin panel**

---

## What You See in Sanity Studio

Once logged in, you'll see a sidebar with these content types:

- **📝 Blog Post** — Write articles, add tags, mark as featured
- **📄 Economic Document** — Upload PDFs, add summaries & takeaways
- **🎥 Podcast / YouTube Episode** — Add episodes, embed links
- **📊 Kenya Economy Snapshot** — Monthly indicators & commentary
- **👤 Author** — **Your profile + headshot upload here**
- **🏠 Home Page Settings** — Featured content for homepage

---

## 🖼️ Uploading Your Professional Headshot

**This is important.** Your headshot appears on:
- About page
- Blog post author cards
- Contact page (optional)

### How to upload:

1. In Sanity Studio, click **Author** (sidebar)
2. Click **Create**
3. Fill in:
   - **Name:** Stephen Omukoko Okoth
   - **Bio:** Short one-liner
   - **Long Bio:** Full bio for About page
4. **Image field:** Click "Upload" and select your headshot
5. Add alt text: "Stephen Okoth"
6. Fill in LinkedIn/YouTube/Podcast URLs
7. Click **Publish**

✅ Done! Your headshot now appears everywhere automatically.

---

## 📋 Your First Test Upload

Do this to make sure everything works:

### 1. Create a blog post:

1. Click **Blog Post** → **Create**
2. **Title:** "Test Post: Why Fuel Prices Rise"
3. **Content:** Paste your content or write a test paragraph
4. **Author:** Select your author profile
5. **Published At:** Today's date
6. **Type:** "Explainer"
7. **Tags:** Add "Energy" and "Test"
8. **Featured:** Toggle ON
9. Click **Publish**

### 2. Upload a document:

1. Click **Economic Document** → **Create**
2. **Title:** "Kenya Finance Act 2023"
3. **Year:** 2023
4. **Institution:** "Ministry of Finance"
5. **Category:** "Finance Acts & Tax Amendments"
6. **Summary:** Paste a 200-word summary
7. **Key Takeaways:** Add 3-4 bullet points
8. **PDF File:** Upload a test PDF (even a blank one)
9. Click **Publish**

### 3. View on your website:

Visit http://localhost:3000 and you should see:
- Your test blog post on the home page (because it's featured)
- Your test document in the Documents section
- Your headshot on the About page

✅ If you see all three, everything is working!

---

## 📝 Daily Workflow (Once You're Set Up)

Every time you want to add content:

1. Log into Sanity Studio: http://localhost:3000/studio
2. Click the content type (Post, Document, Episode, etc.)
3. Click **Create**
4. Fill in fields
5. Click **Publish**
6. Website updates **instantly**

No code. No rebuilds. No confusion.

---

## 🆘 Troubleshooting

### "I see 'Authentication required' at /studio"

**Solution:** Make sure you're logged into Sanity first:
1. Go to https://www.sanity.io/manage
2. Sign in
3. Then visit http://localhost:3000/studio

### "My content doesn't appear on the website"

**Solution:** 
1. Make sure you clicked **Publish** (not just "Save")
2. Check that the item is actually saved in Sanity
3. Refresh your website (Ctrl+F5)

### "I can't upload a PDF"

**Solution:**
1. Sanity only accepts PDFs (not Word, Google Docs, etc.)
2. Make sure the PDF is less than 50MB
3. Try a different PDF if it keeps failing

### "Where's my API token?"

You don't need it right now! It's only needed if you want to:
- Deploy to production
- Set up automated document uploads
- Use the API outside of Sanity Studio

For now, just log in directly to Sanity Studio—no token needed.

---

## 🚀 Next Steps (After Testing)

Once you've tested uploading content:

1. **Create your first 5 blog posts**
2. **Upload 10 key economic documents**
3. **Add your podcast episodes**
4. **Fill in Home Settings** with featured items
5. **Share with friends** and gather feedback

Then we can discuss:
- Custom domain setup
- Production deployment to Vercel
- Form handling for Contribute/Contact pages
- Search functionality

---

## 📞 Questions?

If you get stuck:

1. Check **SANITY_SETUP.md** in the project root
2. See **ENV VARIABLES** section in this guide
3. Visit Sanity docs: https://www.sanity.io/docs

You've got this! 🚀
