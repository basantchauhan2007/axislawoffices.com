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

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; frame-src https://www.google.com; connect-src 'self' https://formspree.io;"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
```

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

---

## Editing Content

All website text lives directly in the HTML files — no CMS or database.

- **Team members** — Edit `assets/js/team-data.js`. The `TEAM` array contains each member's details. The `team.html` page uses this file for the partner cards. To add a member, copy an existing object and update the fields.
- **Practice area descriptions** — Edit the `<p>` inside each `.accordion-body` in `practice-areas.html`.
- **Client list** — Edit the `.client-cell` blocks in `clients.html`.
- **Contact details** — Search for the phone number or address across all files and update in each.

For help with any changes, the code is well-commented throughout.
