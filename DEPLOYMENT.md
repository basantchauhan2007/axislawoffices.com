<<<<<<< HEAD
# Axis Law Offices — Deployment & Setup Guide

---

## STEP 1 — Push the files to GitHub (fix the CSS/styling bug)

The site is unstyled on the live URL because the `assets/` folder (CSS, JS, images) was never committed to the GitHub repository. Run these commands once from inside the `axislawoffices.com` folder:

```bash
git add .
git commit -m "Add assets, analytics, SEO, and bug fixes"
git push
```

If you don't have Git installed, you can drag the entire `axislawoffices.com` folder into the GitHub website's upload interface (your repo → "Add file" → "Upload files").

**After pushing**, the CSS will load and the site will look correct. The duplicate-nav and broken-logo bugs resolve automatically once CSS loads.

---

## STEP 2 — Wire up the contact form (Formspree)

The contact form currently submits nowhere. To make it deliver enquiries to `legal@axislawoffices.com`:

1. Go to **[formspree.io](https://formspree.io)** and sign up for a free account (the free tier handles 50 submissions/month).
2. Click **"+ New Form"** → name it "Axis Law Offices Contact" → set the recipient email to `legal@axislawoffices.com`.
3. Copy your form endpoint URL — it looks like `https://formspree.io/f/XXXXXXXX`.
4. Open `contact.html`, find the `<form id="contact-form" action="...">` tag, and replace `YOUR_FORMSPREE_ENDPOINT` with your actual URL.
5. Commit and push the change.
6. Formspree will send you a verification email — confirm it to activate.

The honeypot spam field (`name="_gotcha"`) is already in the form — no CAPTCHA needed.

---

## STEP 3 — Activate analytics (Plausible)

The Plausible analytics script is already added to every page. To activate it:

1. Go to **[plausible.io](https://plausible.io)** and sign up (free for up to 10,000 pageviews/month).
2. Click **"Add a website"** → enter `axislawoffices.com` as the domain → click Add.
3. That's it. Plausible will start showing visitor data within 24 hours.

**Why Plausible instead of Google Analytics?**
- No cookies → no cookie consent banner legally required for Indian visitors
- Data is not shared with Google or used for advertising targeting
- Appropriate for a law firm handling confidential client relationships
- Simpler dashboard: page views, referrers, countries, devices — the essentials

---

## STEP 4 — Verify the Google Maps embed

The map on the Contact page now uses a text-search URL (`q=78+National+Park+Lajpat+Nagar+IV+New+Delhi+110024`) which will find the nearest match. To get a pinpoint-accurate embed:

1. Open Google Maps and search for `78 National Park Lajpat Nagar IV New Delhi 110024`.
2. Confirm the correct pin is shown.
3. Click **Share** → **Embed a map** → copy the `src="..."` URL from the iframe code.
4. Replace the `src` in the `<iframe>` in `contact.html` with that URL.
5. Commit and push.

---

## STEP 5 — Domain and HTTPS

| Step | Action |
|------|--------|
| Point domain | In GoDaddy DNS, set a CNAME record: `www` → your GitHub Pages or host URL |
| Enable HTTPS | GitHub Pages: Settings → Pages → "Enforce HTTPS" checkbox |
| Verify | Visit `https://www.axislawoffices.com` — padlock should show |

---

## STEP 6 — SEO: submit sitemap

After the site is live on HTTPS:

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property → URL prefix → `https://www.axislawoffices.com`.
3. Verify ownership (Google will give you a `<meta name="google-site-verification">` tag — paste it in the `<head>` of `index.html` and push).
4. In Search Console → Sitemaps → enter `sitemap.xml` → Submit.

---

## Security Headers

GitHub Pages does not support custom HTTP response headers. If you want full security headers (CSP, X-Frame-Options, HSTS, etc.), put Cloudflare in front of GitHub Pages:

1. Sign up for a free Cloudflare account and add `axislawoffices.com`.
2. Change the nameservers in GoDaddy to the ones Cloudflare gives you.
3. In Cloudflare → Rules → Transform Rules, add the headers below.

Alternatively, if you move hosting to **Netlify**, create a `netlify.toml` file in the project root:
=======
# Axis Law Offices — Deployment Notes

## Hosting Options (recommended)

This is a static site (plain HTML/CSS/JS). No server or database required.

| Host | Free tier? | Notes |
|------|-----------|-------|
| **Netlify** | Yes | Drag-and-drop the folder, automatic HTTPS, custom domain easy to set |
| **Vercel** | Yes | Same simplicity as Netlify |
| **GitHub Pages** | Yes | Good if you're comfortable with git |
| **Hostinger / BigRock** | Paid | Indian hosting providers with local support |

**Simplest approach:** Go to [netlify.com](https://netlify.com) → "Deploy manually" → drag the `axislawoffices.com` folder into the browser. Done.

---

## Before Going Live — Checklist

- [ ] **Formspree** — Create a free account at [formspree.io](https://formspree.io). Create a form, copy the endpoint URL, and replace `YOUR_FORMSPREE_ENDPOINT` in `contact.html` line ~90.
- [ ] **Google Maps embed** — Go to Google Maps, search for the office address, click Share → Embed a map → copy the `src` URL. Replace the placeholder src in `contact.html`.
- [ ] **Domain** — Point `www.axislawoffices.com` to your host's servers (add a CNAME or A record as your host instructs).
- [ ] **HTTPS** — All hosting services above provide free HTTPS via Let's Encrypt. Make sure it's enabled (it usually is by default).
- [ ] **Update copyright year** — Search for `2024` across all HTML files and update if needed.

---

## Recommended Security Headers

Configure these on your hosting provider or web server. Most modern hosts (Netlify, Vercel) let you set these in a config file.

### Netlify (`netlify.toml` in project root)
>>>>>>> a1c6a474dc96e8edf1bbb8749b7d4298b7e945f7

```toml
[[headers]]
  for = "/*"
  [headers.values]
<<<<<<< HEAD
    Content-Security-Policy = "default-src 'self'; script-src 'self' https://plausible.io; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; frame-src https://maps.google.com https://www.google.com; connect-src 'self' https://formspree.io https://plausible.io;"
=======
    Content-Security-Policy = "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; frame-src https://www.google.com; connect-src 'self' https://formspree.io;"
>>>>>>> a1c6a474dc96e8edf1bbb8749b7d4298b7e945f7
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
```

<<<<<<< HEAD
=======
### What each header does

| Header | Purpose |
|--------|---------|
| `Content-Security-Policy` | Restricts what scripts, styles, and frames the page can load — prevents XSS injection |
| `X-Frame-Options` | Prevents the site being embedded in an iframe on another site (clickjacking protection) |
| `X-Content-Type-Options` | Stops browsers guessing file types (MIME sniffing attacks) |
| `Referrer-Policy` | Controls how much URL info is sent when users follow links off the site |
| `Permissions-Policy` | Disables access to device camera, mic, and GPS |
| `Strict-Transport-Security` | Enforces HTTPS; tells browsers never to connect over plain HTTP |

---

## SEO Post-Launch

1. Submit `https://www.axislawoffices.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console).
2. Verify ownership via the `<meta name="google-site-verification">` tag method (Google will give you the tag).
3. Add the tag inside `<head>` of `index.html`.
4. Check the site with [PageSpeed Insights](https://pagespeed.web.dev/) for performance suggestions.

>>>>>>> a1c6a474dc96e8edf1bbb8749b7d4298b7e945f7
---

## Editing Content

<<<<<<< HEAD
All site content lives directly in the HTML files — no CMS or database.

| What to change | Where |
|---|---|
| Team member bio | `team.html` — find their `<article>` section |
| Practice area descriptions | `practice-areas.html` — find the matching `.accordion-body` |
| Client list | `clients.html` — add or remove `.client-cell` blocks |
| Contact details (phone, address) | Search all `.html` files for the old value and replace |
| Copyright year | Search all `.html` files for `&copy; 202` |

---

## Sensitive values checklist

- No API keys are committed anywhere in this repository.
- The Formspree endpoint URL is safe to commit (it's public-facing by design).
- The Plausible script uses the public domain name only — no secret key.
- No `.env` file or credentials exist in this project.
=======
All website text lives directly in the HTML files — no CMS or database.

- **Team members** — Edit `assets/js/team-data.js`. The `TEAM` array contains each member's details. The `team.html` page uses this file for the partner cards. To add a member, copy an existing object and update the fields.
- **Practice area descriptions** — Edit the `<p>` inside each `.accordion-body` in `practice-areas.html`.
- **Client list** — Edit the `.client-cell` blocks in `clients.html`.
- **Contact details** — Search for the phone number or address across all files and update in each.

For help with any changes, the code is well-commented throughout.
>>>>>>> a1c6a474dc96e8edf1bbb8749b7d4298b7e945f7
