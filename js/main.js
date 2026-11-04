var CATS = [
  {id:"all", label:"All"},
  {id:"bracelets", label:"Bracelets"},
  {id:"creams", label:"Hand Creams"},
  {id:"sets", label:"Lip Balm Sets"},
  {id:"candles", label:"Candles"},
  {id:"gifts", label:"Gift & More"}
];
var BRACELET_MAT = "<p><b>Materials (mockup placeholder):</b></p><ul><li>Natural stone-look beads</li><li>Cross bead</li><li>Elastic stretch cord — one size fits most wrists</li><li>Nickel-free</li></ul>";
var CREAM_ING = "<p><b>Ingredients (mockup placeholder — replace with the exact supplier label list before sale):</b></p><p>Aqua (Water), Glycerin, Butyrospermum Parkii (Shea Butter), Cetearyl Alcohol, Caprylic/Capric Triglyceride, Dimethicone, Phenoxyethanol, Ethylhexylglycerin, Parfum (Fragrance), Tocopheryl Acetate (Vitamin E).</p><p>Directions: apply to hands as needed. For external use only.</p>";
var SET_ING = "<p><b>Lip balm ingredients (mockup placeholder — replace with the exact supplier label list before sale):</b></p><p>Cocos Nucifera (Coconut Oil), Cera Alba (Beeswax), Butyrospermum Parkii (Shea Butter), Simmondsia Chinensis (Jojoba Oil), Tocopherol (Vitamin E), Aroma (Flavor). Lip balm 0.35 oz / 10 ml.</p><p><b>Bracelet materials:</b> stone-look beads, cross bead, elastic stretch cord, nickel-free, one size fits most.</p>";
var CANDLE_ING = "<p><b>Materials (mockup placeholder):</b></p><ul><li>Soy wax blend</li><li>Cotton wick</li><li>Fragrance oil</li><li>Marble-look reusable tin with lid</li></ul><p><b>Burn safety:</b> trim wick to 1/4&Prime; before lighting; never leave a burning candle unattended; keep away from children, pets and drafts.</p>";
var SHIP_CARE = {
  bracelets:"Care: roll the bracelet on over your hand rather than stretching it wide; keep dry and away from perfumes to protect the finish.",
  creams:"Care: store at room temperature, away from direct sunlight. Discontinue use if irritation occurs.",
  sets:"Care: apply lip balm as needed; store the set away from heat so the balm keeps its shape.",
  candles:"Care: burn on a heat-safe surface, 2–3 hours at a time; let the wax cool fully before replacing the lid.",
  gifts:"Care: see the Contents tab for item-by-item care notes."
};
var PRODUCTS = [
  {id:"midnight", cat:"bracelets", name:"Midnight Cross Bracelet", price:18, img:"images/products/midnight.jpg", alt:"Midnight Cross bracelet — matte black beaded bracelet with black cross bead, worn on a wrist",
   short:"Matte black beaded bracelet with a black cross bead. Lorem ipsum dolor sit amet — a quiet daily reminder, worn close.",
   desc:"<p>Matte black beaded bracelet with a black cross bead. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation — strung on a comfortable stretch cord that slips on in a second and layers with everything.</p>", ing:BRACELET_MAT},
  {id:"navy", cat:"bracelets", name:"Navy Cross Bracelet", price:18, img:"images/products/navy.jpg", alt:"Navy Cross bracelet — deep navy beaded bracelet with black cross, flat lay on terracotta",
   short:"Deep navy beaded bracelet with a black cross. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   desc:"<p>Deep navy beaded bracelet with a black cross. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p><p>Duis aute irure dolor in reprehenderit — deep, calm colour that works from Sunday best to everyday denim.</p>", ing:BRACELET_MAT},
  {id:"turquoise", cat:"bracelets", name:"Turquoise Mix Cross Bracelet", price:20, img:"images/products/turquoise.jpg", alt:"Turquoise Mix Cross bracelet — turquoise, butter-yellow and black beads with a cream cross",
   short:"Turquoise, butter-yellow and black beads with a cream cross. Lorem ipsum — the brightest bracelet in the collection.",
   desc:"<p>Turquoise, butter-yellow and black beads with a cream cross. Lorem ipsum dolor sit amet — the brightest bracelet in the collection, made to be noticed and to start conversations.</p><p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>", ing:BRACELET_MAT},
  {id:"marbled", cat:"bracelets", name:"Marbled Cross Bracelet", price:18, img:"images/products/marbled.jpg", alt:"Marbled Cross bracelet — dark marbled beads with a cream cross, worn on a wrist",
   short:"Dark marbled beads with a cream cross, shown worn. Lorem ipsum dolor sit amet — each bead pattern is one of a kind.",
   desc:"<p>Dark marbled beads with a cream cross, shown worn. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>No two beads marble the same way — excepteur sint occaecat cupidatat non proident, each bracelet is quietly one of a kind.</p>", ing:BRACELET_MAT},
  {id:"grace", cat:"bracelets", name:"Grace Cross Bracelet — Pale", price:18, img:"images/products/grace.jpg", alt:"Grace Cross bracelet — soft pale-green beaded bracelet with a white cross, worn on a wrist",
   short:"Soft pale-green beaded bracelet with a white cross, shown worn. Lorem ipsum dolor sit amet — gentle and giftable.",
   desc:"<p>Soft pale-green beaded bracelet with a white cross, shown worn. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p><p>Gentle colour, easy to gift — ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>", ing:BRACELET_MAT},
  {id:"cloudmilk", cat:"creams", name:"Cloud Milk Hand Cream", price:8, img:"images/products/cloudmilk.jpg", alt:"BESNEL Cloud Milk hand cream tube, blue, 20g, held in a hand",
   short:"BESNEL natural & moisturizing 20g hand cream in a soft milk scent. Lorem ipsum — a small kindness for a purse or gift bag.",
   desc:"<p>BESNEL Cloud Milk hand cream, 20g. Natural &amp; moisturizing in a soft, clean milk scent. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Purse-sized and giftable — sed do eiusmod tempor incididunt ut labore et dolore.</p>", ing:CREAM_ING},
  {id:"peachfizz", cat:"creams", name:"Peach Fizz Hand Cream", price:8, img:"images/products/peachfizz.jpg", alt:"BESNEL Peach Fizz hand cream tube, pink, 20g, held in a hand",
   short:"BESNEL natural & moisturizing 20g hand cream in a sweet peach scent. Lorem ipsum dolor sit amet.",
   desc:"<p>BESNEL Peach Fizz hand cream, 20g. Natural &amp; moisturizing with a sweet, bright peach scent. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Ut enim ad minim veniam — a little lift for dry hands, any time of day.</p>", ing:CREAM_ING},
  {id:"orange", cat:"creams", name:"Orange Hand Cream", price:8, img:"images/products/orange.jpg", alt:"BESNEL Orange hand cream tube, orange, 20g, with orange slices",
   short:"BESNEL natural & moisturizing 20g hand cream in a bright citrus scent. Lorem ipsum dolor sit amet.",
   desc:"<p>BESNEL Orange hand cream, 20g. Natural &amp; moisturizing with a bright citrus scent. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>", ing:CREAM_ING},
  {id:"set-watermelon", cat:"sets", name:"Watermelon Lip Balm + Bracelet Set", price:18, img:"images/products/set-watermelon.jpg", alt:"Watermelon set — green DMSKY watermelon lip balm tube with matching green cross bracelet",
   short:"Watermelon moisturizing lip balm with a matching green cross bracelet. Lorem ipsum — colour-matched and ready to gift.",
   desc:"<p>A colour-matched pair: DMSKY 100% natural moisturizing lip balm in Watermelon (0.35 oz / 10 ml) with a matching green beaded cross bracelet. Lorem ipsum dolor sit amet.</p><p>Ready to gift as-is — consectetur adipiscing elit, sed do eiusmod tempor.</p>", ing:SET_ING},
  {id:"set-mango", cat:"sets", name:"Mango Lip Balm + Bracelet Set", price:18, img:"images/products/set-mango.jpg", alt:"Mango set — yellow DMSKY mango lip balm tube with matching amber cross bracelet",
   short:"Mango moisturizing lip balm with a matching amber cross bracelet. Lorem ipsum dolor sit amet.",
   desc:"<p>A colour-matched pair: DMSKY moisturizing lip balm in Mango (0.35 oz / 10 ml) with a matching amber beaded cross bracelet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>", ing:SET_ING},
  {id:"set-peppermint", cat:"sets", name:"Peppermint Lip Balm + Bracelet Set", price:18, img:"images/products/set-peppermint.jpg", alt:"Peppermint set — mint DMSKY peppermint lip balm tube with matching light-green cross bracelet on marble",
   short:"Peppermint moisturizing lip balm with a matching light-green cross bracelet. Lorem ipsum dolor sit amet.",
   desc:"<p>A colour-matched pair: DMSKY moisturizing lip balm in Peppermint (0.35 oz / 10 ml) with a matching light-green beaded cross bracelet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>", ing:SET_ING},
  {id:"set-cherry", cat:"sets", name:"Cherry Lip Balm + Bracelet Set", price:18, img:"images/products/set-cherry.jpg", alt:"Cherry set — red DMSKY cherry lip balm tube with matching red cross bracelet on marble",
   short:"Cherry moisturizing lip balm with a matching red cross bracelet. Lorem ipsum dolor sit amet.",
   desc:"<p>A colour-matched pair: DMSKY moisturizing lip balm in Cherry (0.35 oz / 10 ml) with a matching red beaded cross bracelet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>", ing:SET_ING},
  {id:"set-honey", cat:"sets", name:"Honey Lip Balm + Bracelet Set", price:18, img:"images/products/set-honey.jpg", alt:"Honey set — gold DMSKY honey lip balm tube with matching honey-toned cross bracelet",
   short:"Honey moisturizing lip balm with a matching honey-toned cross bracelet. Lorem ipsum dolor sit amet.",
   desc:"<p>A colour-matched pair: DMSKY moisturizing lip balm in Honey (0.35 oz / 10 ml) with a matching honey-toned beaded cross bracelet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>", ing:SET_ING},
  {id:"set-lemon", cat:"sets", name:"Lemon Lip Balm + Bracelet Set", price:18, img:"images/products/set-lemon.jpg", alt:"Lemon set — yellow DMSKY lemon lip balm tube with matching pale-green cross bracelet on marble",
   short:"Lemon moisturizing lip balm with a matching pale-green cross bracelet. Lorem ipsum dolor sit amet.",
   desc:"<p>A colour-matched pair: DMSKY moisturizing lip balm in Lemon (0.35 oz / 10 ml) with a matching pale-green beaded cross bracelet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>", ing:SET_ING},
  {id:"rose", cat:"candles", name:"Rose Marble Candle", price:24, img:"images/products/rose.jpg", alt:"Rose Marble candle — pink marble-look tin candle, open, on a marble table",
   short:"Pink marble-look tin candle with lid. Lorem ipsum — made for prayer corners and quiet evenings.",
   desc:"<p>Pink marble-look tin candle with a fitted lid. Lorem ipsum dolor sit amet, consectetur adipiscing elit — made for prayer corners, kitchen tables and quiet evenings.</p><p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>", ing:CANDLE_ING},
  {id:"amber", cat:"candles", name:"Amber Marble Candle", price:28, img:"images/products/amber.jpg", alt:"Amber Marble candle — tall amber marble-look candle, open, on a marble table",
   short:"Taller amber marble-look candle with lid. Lorem ipsum dolor sit amet — warm and grounding.",
   desc:"<p>The taller amber marble-look candle, with a fitted lid. Lorem ipsum dolor sit amet, consectetur adipiscing elit — warm, grounding, and generous in size.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>", ing:CANDLE_ING},
  {id:"bottle", cat:"gifts", name:"With Love and Thanks — Lavender Bottle", price:10, img:"images/products/bottle.jpg", alt:"Purple lavender bottle with a floral 'With Love and Thanks' label",
   short:"Purple lavender bottle with a floral 'With Love and Thanks' label. Lorem ipsum — a thank-you gift for volunteers and guests.",
   desc:"<p>Purple lavender bottle with a floral 'With Love and Thanks' label. Lorem ipsum dolor sit amet — a ready-made thank-you for volunteers, teachers and guests.</p><p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>",
   ing:"<p><b>Ingredients — to be confirmed.</b></p><p>Placeholder: confirm the product type (hand cleanser / soap) and copy the exact supplier ingredient list here before this item goes on sale.</p><div class='warn'>Mockup note: this is the one product whose ingredient list is intentionally left blank — it must come from the real label.</div>", ingLabel:"Ingredients"},
  {id:"giftset", cat:"gifts", name:"Done in Love Gift Set", price:42, img:"images/products/giftset.jpg", alt:"Done in Love gift set — black 'You Are' tumbler, 'Let All That You Do Be Done in Love' journal, pen and keychain",
   short:"Black 'You Are' affirmation tumbler, 'Let All That You Do Be Done in Love' (1 Cor 16:14) journal, matching pen and 'Be Strong and Courageous' keychain. Lorem ipsum — the complete gift set.",
   desc:"<p>The complete gift set: a black 'You Are' affirmation tumbler (Beautiful, Amazing, Victorious, Capable, Enough, Chosen, Strong, Created, Never Alone, Always Loved), a 'Let All That You Do Be Done in Love' journal (1 Corinthians 16:14), a matching pen, and a 'Be Strong and Courageous' keychain.</p><p>Lorem ipsum dolor sit amet — boxed and ready to give.</p>",
   ing:"<p><b>Contents:</b></p><ul><li>1 × 'You Are' affirmation tumbler — hand wash recommended</li><li>1 × 'Done in Love' journal (1 Cor 16:14) — lined paper</li><li>1 × matching pen</li><li>1 × 'Be Strong and Courageous' keychain</li></ul>", ingLabel:"Contents"}
];
var CATLABEL = {}; CATS.forEach(function(c){ CATLABEL[c.id]=c.label; });

/* ---------- view switching ---------- */
var currentFilter = "all";
function showView(name){
  document.querySelectorAll(".view").forEach(function(v){ v.classList.remove("active"); });
  document.getElementById("view-"+name).classList.add("active");
  var navName = name === "product" ? "shop" : name;
  document.querySelectorAll(".nav-links button").forEach(function(b){
    if(b.dataset.goto === navName) b.setAttribute("aria-current","page"); else b.removeAttribute("aria-current");
  });
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
  observeReveals();
}
document.querySelectorAll("[data-goto]").forEach(function(el){
  el.addEventListener("click", function(e){ e.preventDefault(); showView(el.dataset.goto); });
});
document.querySelectorAll("[data-cat-link]").forEach(function(el){
  el.addEventListener("click", function(){ setFilter(el.dataset.catLink); showView("shop"); });
});

/* ---------- shop grid ---------- */
var filtersEl = document.getElementById("filters");
CATS.forEach(function(c){
  var b = document.createElement("button");
  b.textContent = c.label; b.dataset.cat = c.id;
  b.setAttribute("aria-pressed", c.id === "all" ? "true" : "false");
  b.className = "cut-sm";
  b.addEventListener("click", function(){ setFilter(c.id); });
  filtersEl.appendChild(b);
});
function setFilter(id){
  currentFilter = id;
  filtersEl.querySelectorAll("button").forEach(function(b){ b.setAttribute("aria-pressed", b.dataset.cat === id ? "true" : "false"); });
  renderGrid();
}
function renderGrid(){
  var grid = document.getElementById("pgrid");
  var list = PRODUCTS.filter(function(p){ return currentFilter === "all" || p.cat === currentFilter; });
  document.getElementById("countNote").textContent = "Showing " + list.length + " of " + PRODUCTS.length + " products · Tap a product for full details, ingredients & shipping";
  grid.innerHTML = "";
  list.forEach(function(p){
    var card = document.createElement("button");
    card.className = "pcard cut";
    card.innerHTML = '<span class="imgbox"><img loading="lazy" src="' + p.img + '" alt="' + p.alt.replace(/"/g,"&quot;") + '"></span>' +
      '<span class="pad"><span class="cat">' + CATLABEL[p.cat] + '</span><h3>' + p.name + '</h3>' +
      '<span class="row"><span class="price">$' + p.price + '</span><span class="view">View →</span></span></span>';
    card.addEventListener("click", function(){ openProduct(p.id); });
    grid.appendChild(card);
  });
}

/* ---------- product detail ---------- */
var current = null;
function openProduct(id){
  current = PRODUCTS.filter(function(p){ return p.id === id; })[0];
  if(!current) return;
  var img = document.getElementById("dImg"); img.src = current.img; img.alt = current.alt;
  document.getElementById("dCat").textContent = CATLABEL[current.cat];
  document.getElementById("dName").textContent = current.name;
  document.getElementById("dPrice").textContent = "$" + current.price;
  document.getElementById("dShort").textContent = current.short;
  document.getElementById("panel-desc").innerHTML = current.desc;
  document.getElementById("panel-ing").innerHTML = current.ing;
  document.getElementById("ingTabBtn").textContent = current.ingLabel || (current.cat === "bracelets" || current.cat === "candles" ? "Materials" : "Ingredients / Materials");
  document.getElementById("shipCare").textContent = SHIP_CARE[current.cat] || "";
  setTab("desc");
  showView("product");
}
document.querySelectorAll("[data-open-product]").forEach(function(el){
  el.addEventListener("click", function(){ openProduct(el.dataset.openProduct); });
});
function setTab(name){
  document.querySelectorAll("#tablist button").forEach(function(b){ b.setAttribute("aria-selected", b.dataset.tab === name ? "true" : "false"); });
  ["desc","ing","ship"].forEach(function(t){ document.getElementById("panel-"+t).hidden = t !== name; });
}
document.querySelectorAll("#tablist button").forEach(function(b){
  b.addEventListener("click", function(){ setTab(b.dataset.tab); });
});
/* ---------- marquee ---------- */
(function(){
  var words = ["We are sisters","Join Us","Saturdays @ 5:30pm","Shop With Us ","Be Encouraged","Uplift One Another"];
  var half = words.map(function(w){ return "<span>" + w + "</span><span class='dot'>✳</span>"; }).join("");
  document.getElementById("marqueeTrack").innerHTML = half + half;
})();

/* ---------- reveal on scroll ---------- */
var io = null;
function observeReveals(){
  if(!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("in"); }); return; }
  if(!io){
    io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
    }, {threshold:0, rootMargin:"0px 0px 320px 0px"});
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(function(el){ io.observe(el); });
  /* Safety net: never leave content invisible if observation is interrupted */
  setTimeout(function(){ document.querySelectorAll(".reveal:not(.in)").forEach(function(el){ el.classList.add("in"); }); }, 600);
}
renderGrid(); observeReveals();

/* Start view: each page sets <body data-view="home|about|shop"> */
document.addEventListener('DOMContentLoaded', function(){
  var v = document.body.getAttribute('data-view');
  if (v && v !== 'home' && typeof showView === 'function') showView(v);
});

