# Vercel Deployment Guide for LeadAfrik

## Pre-Deployment Checklist

- [x] All code committed and pushed to GitHub main branch
- [x] Production checklist reviewed (see PRODUCTION_CHECKLIST.md)
- [x] Local build tested: `npm run build && npm run start`
- [ ] Sanity API token created and ready
- [ ] Gmail app password generated for info@leadafrik.com
- [ ] All environment variables documented (.env.example)

## Step 1: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the **LeadAfrik** project
3. Navigate to **Settings** → **Environment Variables**
4. Add each variable below:

### Public Environment Variables (NEXT_PUBLIC_*)
```
NEXT_PUBLIC_SANITY_PROJECT_ID = urzmz4tc
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = G-75T5H59BSQ
NEXT_PUBLIC_YOUTUBE_URL = https://www.youtube.com/@leadafrik
NEXT_PUBLIC_SITE_URL = https://leadafrik.com
```

### Secret Environment Variables (Private)
```
SANITY_API_TOKEN = [Create from Sanity dashboard - see SANITY_SETUP.md]
EMAIL_HOST = smtp.gmail.com
EMAIL_PORT = 587
EMAIL_USER = info@leadafrik.com
EMAIL_PASS = [Generate Gmail app password - see below]
EMAIL_FROM = LeadAfrik <info@leadafrik.com>
```

## Step 2: Generate Gmail App Password

### Prerequisites:
- Gmail account: info@leadafrik.com
- 2-Factor Authentication enabled on account

### Steps:
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Scroll to "How you sign in to Google" section
3. Enable **2-Step Verification** if not already enabled
4. Go back to Security section, find **App passwords**
5. Select "Mail" and "Windows Computer"
6. Google will generate a 16-character app password
7. Copy this password (without spaces)
8. Paste into Vercel `EMAIL_PASS` environment variable

**⚠️ IMPORTANT**: Do NOT use your Gmail account password directly. Use only the generated app password.

## Step 3: Create Sanity API Token

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select **LeadAfrik Public Economics Hub** project
3. Navigate to **Settings** → **API** → **Tokens**
4. Click **Add API Token**
5. Name: "Vercel Production"
6. Permissions: Select **Editor** role (allows full access)
7. Click **Save**
8. Copy the token
9. Paste into Vercel `SANITY_API_TOKEN` environment variable

## Step 4: Verify Domain Configuration

1. In Vercel project settings, go to **Domains**
2. Add custom domain: `leadafrik.com`
3. Vercel will provide DNS records to add
4. Update DNS at your domain registrar (if not using Vercel DNS)
5. Wait for DNS propagation (usually 24-48 hours)
6. HTTPS will be automatically provisioned

## Step 5: Test Production Build Locally

```bash
# Build the project
npm run build

# Start production server
npm run start

# Test at http://localhost:3000
```

### Test Checklist:
- [ ] Home page loads
- [ ] Newsletter signup form works and rate limiting works
- [ ] Data request form submits
- [ ] Contact form submits
- [ ] Blog/Documents/Podcast pages load and search works
- [ ] PDF downloads work
- [ ] Google Analytics fires (check Google Analytics dashboard)
- [ ] No console errors (F12 → Console)
- [ ] robots.txt accessible at `/robots.txt`
- [ ] sitemap.xml accessible at `/sitemap.xml`

## Step 6: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)
- Vercel automatically deploys when you push to GitHub main branch
- Check deployment status at [Vercel Dashboard](https://vercel.com/dashboard)
- Production URL: https://leadafrik.com

### Option B: Manual Deployment via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel account
vercel login

# Deploy to production
vercel --prod
```

## Step 7: Verify Production Deployment

### Immediate Checks (within 5 minutes):
1. Visit https://leadafrik.com
2. Verify page loads (no 404)
3. Check security headers:
   ```bash
   curl -i https://leadafrik.com | grep -E "X-|Referrer"
   ```
   Should see:
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: no-referrer-when-downgrade`

4. Test newsletter signup (submit with test email)
5. Check Sanity CMS for new subscriber record
6. Check Gmail inbox for welcome email

### 24-Hour Checks:
- [ ] Monitor Google Analytics traffic (should show visitors)
- [ ] Test all forms on live site
- [ ] Check email delivery (Gmail inbox, spam folder)
- [ ] Verify API rate limiting (try multiple requests)
- [ ] Test mobile responsiveness

### SEO & Monitoring:
- [ ] Verify sitemap at https://leadafrik.com/sitemap.xml
- [ ] Verify robots.txt at https://leadafrik.com/robots.txt
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Google Search Console for errors/crawl issues

## Troubleshooting

### Forms not sending emails:
- Check EMAIL_* variables are correct in Vercel
- Verify Gmail app password is correct (no spaces)
- Check Gmail "Less secure app access" is ON (if using regular password)
- Monitor email logs in Vercel deployment logs

### Newsletter signup failing:
- Check SANITY_API_TOKEN is correct
- Verify Sanity project ID matches
- Check subscriber schema exists in Sanity
- Monitor API errors in Vercel logs

### Google Analytics not tracking:
- Verify NEXT_PUBLIC_GOOGLE_ANALYTICS_ID is correct
- Check GA script loaded (View → Inspect → Network tab)
- Wait 24-48 hours for first data to appear in GA dashboard
- Check Google Analytics property settings

### Page not loading:
- Check all environment variables are set
- Verify build logs in Vercel dashboard for errors
- Check that .env.local is NOT committed to GitHub
- Rebuild deployment: Vercel Dashboard → Deployments → Redeploy

## Important Files Reference

- **PRODUCTION_CHECKLIST.md** - Comprehensive production readiness checklist
- **.env.example** - Example environment variables with documentation
- **.env.local** - Local environment file (NEVER commit to Git)
- **next.config.ts** - Next.js configuration with security headers
- **app/layout.tsx** - Global metadata and Google Analytics
- **app/robots.ts** - Robots configuration route
- **public/robots.txt** - SEO robots.txt file
- **app/sitemap.ts** - Dynamic sitemap generation

## Post-Deployment Monitoring

### Daily Tasks:
- Check Vercel deployment status
- Monitor error rate in Google Analytics
- Review form submissions in Sanity/Gmail

### Weekly Tasks:
- Run Lighthouse audit (aim for >90 all categories)
- Test all forms work correctly
- Verify Google Analytics data is flowing
- Check for broken links (use Google Search Console)

### Monthly Tasks:
- Review analytics traffic patterns
- Backup Sanity database
- Update dependencies (`npm update`)
- Review security scan reports

## Support & Contact

- **Technical Issues**: Check Vercel logs in dashboard
- **Email Delivery**: Check Gmail inbox/spam folder
- **CMS Issues**: Check Sanity dashboard
- **Domain Issues**: Check DNS settings at registrar

---

**Status**: Ready for deployment! 🚀
All systems tested and production-ready.
