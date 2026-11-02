/* We Are Sisters — shop.js: renders the catalogue from products.js,
   category filters, and the tabbed product detail dialog.
   Checkout stays OFF until SITE_CONFIG.CHECKOUT_ENABLED is true
   AND a product has a stripe_link (see products.js). */
(function () {
  var grid = document.getElementById("productGrid");
  var dialog = document.getElementById("productDialog");
  if (typeof PRODUCTS === "undefined") return;

  function money(n) { return "$" + n.toFixed(2).replace(/\.00$/, ""); }
  function buyHtml(p, big) {
    var link = p.stripe_link || p.square_link;
    if (window.SITE_CONFIG && SITE_CONFIG.CHECKOUT_ENABLED && link) {
      return '<a class="btn" href="' + link + '" target="_blank" rel="noopener"><span>Buy Now — ' + money(p.price) + "</span></a>";
    }
    return '<span class="inperson">Available at gatherings &amp; in person</span>';
  }

  function card(p, i) {
    var el = document.createElement("article");
    el.className = "product-card reveal";
    el.style.transitionDelay = (i % 4) * 0.07 + "s";
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", p.name);
    el.innerHTML =
      '<div class="imgbox"><img loading="lazy" alt="' + p.name + '" src="' + p.image + '"></div>' +
      '<div class="body"><span class="cat">' + p.categoryLabel + "</span><h3>" + p.name + "</h3>" +
      '<span class="price">' + money(p.price) + '</span><span class="tag">In-person reference price</span></div>';
    el.addEventListener("click", function () {
      if (dialog) open(p); else window.location.href = "shop.html";
    });
    el.addEventListener("keydown", function (e) { if (e.key === "Enter") open(p); });
    return el;
  }

  function render(filter) {
    if (!grid) return;
    grid.innerHTML = "";
    PRODUCTS.filter(function (p) { return filter === "all" || p.category === filter; })
      .forEach(function (p, i) {
        var c = card(p, i);
        grid.appendChild(c);
        requestAnimationFrame(function () { c.classList.add("in"); });
      });
  }

  document.querySelectorAll(".filters button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".filters button").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      render(b.dataset.filter);
    });
  });

  function open(p) {
    document.getElementById("dImg").src = p.image;
    document.getElementById("dImg").alt = p.name;
    document.getElementById("dCat").textContent = p.categoryLabel;
    document.getElementById("dName").textContent = p.name;
    document.getElementById("dPrice").textContent = money(p.price);
    document.getElementById("tab-desc").textContent = p.description;
    document.getElementById("tab-ing").textContent = p.ingredients;
    document.getElementById("tab-ship").textContent = p.shipping;
    document.getElementById("dBuy").innerHTML = buyHtml(p, true);
    switchTab("desc");
    if (typeof dialog.showModal === "function") dialog.showModal();
  }
  function switchTab(which) {
    document.querySelectorAll(".tab-btns button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.tab === which);
    });
    document.querySelectorAll(".tab-panel").forEach(function (pn) {
      pn.classList.toggle("active", pn.id === "tab-" + which);
    });
  }
  document.querySelectorAll(".tab-btns button").forEach(function (b) {
    b.addEventListener("click", function () { switchTab(b.dataset.tab); });
  });
  var closeBtn = document.getElementById("dialogClose");
  if (closeBtn) closeBtn.addEventListener("click", function () { dialog.close(); });

  /* Home page teaser: first 4 products, if the slot exists */
  var teaser = document.getElementById("teaserGrid");
  if (teaser) {
    [PRODUCTS[16], PRODUCTS[0], PRODUCTS[14], PRODUCTS[6]].forEach(function (p, i) {
      if (p) teaser.appendChild(card(p, i));
    });
  }

  render("all");
})();
