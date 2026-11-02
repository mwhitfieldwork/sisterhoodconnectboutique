/* ============================================================
   WE ARE SISTERS — SHOP DATA  (EDIT THIS FILE to change products)
   ------------------------------------------------------------
   - Change a name, price or description: edit the text below.
   - Prices/descriptions/ingredients are PLACEHOLDERS for now.
     Ingredients MUST match the real supplier labels before
     any product is sold online.

   TURNING ON STRIPE LATER (when the client is ready):
   1. Create the Payment Links in her Stripe Dashboard
      (see ../STRIPE_LINKS_WORKSHEET.md in the project folder).
   2. Paste each link into that product's "stripe_link" below.
   3. Set CHECKOUT_ENABLED to true.
   SQUARE OPTION: square_link works the same way — paste Square
   Payment Links instead and the same switch turns them on.
   Use ONE provider at a time.
   Every product card + detail then shows a "Buy Now" button
   that goes to Stripe's hosted checkout. Nothing else changes.
   ============================================================ */

const SITE_CONFIG = {
  CHECKOUT_ENABLED: false, // <-- flip to true when Stripe links are pasted in
};

const BRACELET_MATERIALS =
  "Natural stone-look beads, cross bead, elastic stretch cord. Nickel-free. One size stretches to fit most wrists.";
const CREAM_INGREDIENTS =
  "Aqua (Water), Glycerin, Butyrospermum Parkii (Shea Butter), Cetearyl Alcohol, Caprylic/Capric Triglyceride, Dimethicone, Phenoxyethanol, Ethylhexylglycerin, Parfum (Fragrance), Tocopheryl Acetate (Vitamin E). Apply to hands as needed. For external use only.";
const LIP_BALM_INGREDIENTS =
  "Lip balm: Cocos Nucifera (Coconut Oil), Cera Alba (Beeswax), Butyrospermum Parkii (Shea Butter), Simmondsia Chinensis (Jojoba Oil), Tocopherol (Vitamin E), Aroma (Flavor). Bracelet: stone-look beads, cross bead, elastic stretch cord, one size.";
const CANDLE_INGREDIENTS =
  "Soy wax blend, cotton wick, fragrance oil. Burn care: trim wick to 1/4 in before lighting; never leave a burning candle unattended.";
const SHIPPING_NOTE =
  "Available at gatherings and in person in Elgin, IL. Online shipping will be added here if the shop opens for orders — ships from Elgin, IL.";

const PRODUCTS = [
  // ---------- BRACELETS ----------
  { id: "bracelet-midnight", name: "Midnight Cross Bracelet", price: 18, category: "bracelets", categoryLabel: "Bracelets",
    image: "images/products/bracelet-midnight.jpg",
    description: "Matte black beaded bracelet with a black cross bead. Lorem ipsum dolor sit amet — a quiet daily reminder, worn close.",
    ingredients: BRACELET_MATERIALS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "bracelet-navy", name: "Navy Cross Bracelet", price: 18, category: "bracelets", categoryLabel: "Bracelets",
    image: "images/products/bracelet-navy.jpg",
    description: "Deep navy beaded bracelet with a black cross. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: BRACELET_MATERIALS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "bracelet-turquoise", name: "Turquoise Mix Cross Bracelet", price: 20, category: "bracelets", categoryLabel: "Bracelets",
    image: "images/products/bracelet-turquoise.jpg",
    description: "Turquoise, butter-yellow and black beads with a cream cross. Lorem ipsum — the brightest bracelet in the collection.",
    ingredients: BRACELET_MATERIALS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "bracelet-marbled", name: "Marbled Cross Bracelet", price: 18, category: "bracelets", categoryLabel: "Bracelets",
    image: "images/products/bracelet-marbled.jpg",
    description: "Dark marbled beads with a cream cross, shown worn. Lorem ipsum — each bead pattern is one of a kind.",
    ingredients: BRACELET_MATERIALS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "bracelet-grace", name: "Grace Cross Bracelet", price: 18, category: "bracelets", categoryLabel: "Bracelets",
    image: "images/products/bracelet-grace.jpg",
    description: "Soft pale-green beaded bracelet with a white cross, shown worn. Lorem ipsum dolor sit amet — gentle and giftable.",
    ingredients: BRACELET_MATERIALS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },

  // ---------- HAND CREAMS ----------
  { id: "cream-cloud-milk", name: "Cloud Milk Hand Cream", price: 8, category: "creams", categoryLabel: "Hand Creams",
    image: "images/products/cream-cloud-milk.jpg",
    description: "Natural & moisturizing 20g hand cream in a soft milk scent. Lorem ipsum — a small kindness for a purse or gift bag.",
    ingredients: CREAM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "cream-peach-fizz", name: "Peach Fizz Hand Cream", price: 8, category: "creams", categoryLabel: "Hand Creams",
    image: "images/products/cream-peach-fizz.jpg",
    description: "Natural & moisturizing 20g hand cream in a sweet peach scent. Lorem ipsum dolor sit amet.",
    ingredients: CREAM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "cream-orange", name: "Orange Hand Cream", price: 8, category: "creams", categoryLabel: "Hand Creams",
    image: "images/products/cream-orange.jpg",
    description: "Natural & moisturizing 20g hand cream in a bright citrus scent. Lorem ipsum dolor sit amet.",
    ingredients: CREAM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },

  // ---------- LIP BALM + BRACELET SETS ----------
  { id: "set-watermelon", name: "Watermelon Set", price: 18, category: "sets", categoryLabel: "Lip Balm Sets",
    image: "images/products/set-watermelon.jpg",
    description: "Watermelon moisturizing lip balm with a matching green cross bracelet. Lorem ipsum — colour-matched and ready to gift.",
    ingredients: LIP_BALM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "set-mango", name: "Mango Set", price: 18, category: "sets", categoryLabel: "Lip Balm Sets",
    image: "images/products/set-mango.jpg",
    description: "Mango moisturizing lip balm with a matching amber cross bracelet. Lorem ipsum dolor sit amet.",
    ingredients: LIP_BALM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "set-peppermint", name: "Peppermint Set", price: 18, category: "sets", categoryLabel: "Lip Balm Sets",
    image: "images/products/set-peppermint.jpg",
    description: "Peppermint moisturizing lip balm with a matching light-green cross bracelet. Lorem ipsum dolor sit amet.",
    ingredients: LIP_BALM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "set-cherry", name: "Cherry Set", price: 18, category: "sets", categoryLabel: "Lip Balm Sets",
    image: "images/products/set-cherry.jpg",
    description: "Cherry moisturizing lip balm with a matching red cross bracelet. Lorem ipsum dolor sit amet.",
    ingredients: LIP_BALM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "set-honey", name: "Honey Set", price: 18, category: "sets", categoryLabel: "Lip Balm Sets",
    image: "images/products/set-honey.jpg",
    description: "Honey moisturizing lip balm with a matching honey-toned cross bracelet. Lorem ipsum dolor sit amet.",
    ingredients: LIP_BALM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "set-lemon", name: "Lemon Set", price: 18, category: "sets", categoryLabel: "Lip Balm Sets",
    image: "images/products/set-lemon.jpg",
    description: "Lemon moisturizing lip balm with a matching pale-green cross bracelet. Lorem ipsum dolor sit amet.",
    ingredients: LIP_BALM_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },

  // ---------- CANDLES ----------
  { id: "candle-rose", name: "Rose Marble Candle", price: 24, category: "candles", categoryLabel: "Candles",
    image: "images/products/candle-rose.jpg",
    description: "Pink marble-look tin candle with lid. Lorem ipsum — made for prayer corners and quiet evenings.",
    ingredients: CANDLE_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "candle-amber", name: "Amber Marble Candle", price: 28, category: "candles", categoryLabel: "Candles",
    image: "images/products/candle-amber.jpg",
    description: "Taller amber marble-look candle with lid. Lorem ipsum dolor sit amet — warm and grounding.",
    ingredients: CANDLE_INGREDIENTS, shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },

  // ---------- GIFT & MORE ----------
  { id: "lavender-bottle", name: "With Love and Thanks — Lavender Bottle", price: 10, category: "gifts", categoryLabel: "Gift & More",
    image: "images/products/lavender-bottle.jpg",
    description: "Purple lavender bottle with a floral 'With Love and Thanks' label. Lorem ipsum — a thank-you gift for volunteers and guests.",
    ingredients: "PLACEHOLDER — confirm the product type and copy the exact supplier ingredient list here before any online sale.",
    shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
  { id: "gift-set-love", name: "Done in Love Gift Set", price: 42, category: "gifts", categoryLabel: "Gift & More",
    image: "images/products/gift-set-love.jpg",
    description: "'You Are' affirmation tumbler, 'Let All That You Do Be Done in Love' (1 Cor 16:14) journal, matching pen and 'Be Strong and Courageous' keychain. Lorem ipsum — the complete gift set.",
    ingredients: "Contents: 1 tumbler (hand wash recommended), 1 lined journal, 1 pen, 1 keychain.",
    shipping: SHIPPING_NOTE, stripe_link: null, square_link: null },
];
