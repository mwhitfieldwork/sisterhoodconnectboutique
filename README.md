# We Are Sisters — Website (plain HTML + CSS motion)

Static site for GitHub Pages. No build step: push the files, the site is live.
Open `index.html` in a browser to preview locally (double-click works — product
data is in a .js file, not fetched JSON, on purpose).

## Files
- `index.html` — Home
- `about.html` — About Us
- `shop.html` — Shop (reference catalogue for in-person sales)
- `css/styles.css` — all design + animations. SQUARE corners are a locked design rule.
- `js/products.js` — ALL product data + the Stripe switch (see below). Edit this to change products.
- `js/shop.js` — renders the shop grid, filters, and the tabbed product dialog
- `js/main.js` — scroll-reveal animations + footer year
- `images/products/` — the client's 18 product photos (clean filenames)

## How to populate content (look for EDIT comments in the HTML)
- Slogan: search for "Slogan goes here" (header of all 3 pages)
- Gathering day/time/address: search for "Gathering details coming soon" and "EDIT:"
- Home hero photo: replace the `.photo-slot` div in index.html with an <img> (instructions in the comment there)
- About portrait + timeline years: EDIT comments in about.html
- All body copy is lorem ipsum until real copy replaces it

## Turning on Stripe checkout later (no rebuild, no backend)
1. Client creates Payment Links in her Stripe Dashboard (project worksheet: ../STRIPE_LINKS_WORKSHEET.md)
2. In `js/products.js`: paste each link into that product's `stripe_link`
3. In `js/products.js`: set `SITE_CONFIG.CHECKOUT_ENABLED = true`
Product cards/details then show "Buy Now" buttons to Stripe's hosted checkout.
Shipping labels after that: Pirate Ship — see ../SHIPPING_PLAN.md.

## Publishing to GitHub Pages
1. Create a repo, put the CONTENTS of this `site/` folder at the repo root
2. Repo Settings → Pages → Deploy from branch → main / (root)
3. Site goes live at https://<user>.github.io/<repo>/ — a custom domain can be added later in the same settings

## Notes
- Prices, descriptions and ingredient lists are invented placeholders (see ../PRODUCT_CATALOG.md).
  Ingredients MUST be replaced with the exact supplier label lists before any online sale.
- Animations respect `prefers-reduced-motion`.
