# Auditing with Courage — book website

A fast, single-page static website for **_Auditing with Courage: Reimagining Assurance
and Building Trust in the Age of AI_** by C. Christina Ho (Wiley, on sale Jan 14, 2027).

No build step, no frameworks — just HTML, CSS, and a little JavaScript. It works on any
static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole page (hero, why-to-read, chapters, author, pre-order). |
| `styles.css` | All styling. Colors are CSS variables at the top — easy to tweak. |
| `main.js` | Sticky nav, scroll animations, and the live countdown to release day. |
| `images/` | Book cover, favicons, and the social-share (Open Graph) image. |
| `CNAME` | Tells GitHub Pages to serve the site at `auditingwithcourage.com`. |
| `robots.txt`, `sitemap.xml` | Basic SEO so search engines can find it. |

## Preview it locally

From inside this `site/` folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser. (Open it through the server, not by
double-clicking `index.html`, so the fonts and images load correctly.)

## Things you'll probably want to edit

1. **Retailer links** — Amazon and Barnes & Noble point to the real listings. The other
   three (Books-A-Million, Bookshop.org, Porchlight) currently link to an ISBN *search*
   because the final product URLs weren't available yet. Search `index.html` for
   `TODO: replace href` and paste the final links when you have them.
2. **Author bio** — the "About the author" paragraph in `index.html` is a solid draft.
   Please review and adjust it to how you'd like to be described.
3. **Contact email** — the author section links to `hello@auditingwithcourage.com`.
   Change it to whatever address you'll actually monitor (search for `mailto:`).
4. **Colors / copy** — palette variables live at the top of `styles.css`; all the words
   live in `index.html`.

## Publishing it

Any static host works. Two easy, free options:

### Option A — Netlify or Vercel (drag-and-drop, simplest)
1. Create a free account at netlify.com (or vercel.com).
2. Drag this `site/` folder onto the dashboard. It goes live instantly on a temporary URL.
3. In the site settings, add the custom domain `auditingwithcourage.com` and follow their
   DNS instructions (they'll give you records to add at your domain registrar).

### Option B — GitHub Pages (free, the `CNAME` file is already set up)
1. Create a GitHub repository and upload the contents of this `site/` folder.
2. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch → main / root**.
3. Because `CNAME` is included, GitHub will serve it at `auditingwithcourage.com` once your
   domain's DNS points to GitHub (add an `ALIAS`/`A` record per GitHub's custom-domain docs).

Either way, you'll point your domain's DNS at the host — that's the one step that happens at
wherever you bought `auditingwithcourage.com`.
