# We Are Sisters — site (approved design, Motion Plus, folder structure)

index.html   -> Home      (body data-view="home")
about.html   -> About Us  (body data-view="about")
shop.html    -> Shop      (body data-view="shop")
css/styles.css          all styling, incl. the Motion Plus animations
js/main.js              views, shop grid, filters, product detail
images/products/*.jpg   the 18 product photos (named by product)

All pages share the one css/js — edit a style or a product once and
every page picks it up. Product data (names, prices, descriptions,
ingredients) lives in js/main.js in the PRODUCTS list; each product's
img points at its file in images/products/.

Checkout is hidden by design: no Stripe, no Square, no buy buttons.
Products show "Available at gatherings & in person" until launch
is agreed.

GitHub Pages: upload EVERYTHING keeping this folder structure
(index/about/shop + css + js + images at the repo root), then
Settings > Pages > Deploy from a branch > main / (root) > Save.
