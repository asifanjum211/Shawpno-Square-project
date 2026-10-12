
const productsData = [
  {
    id: 1,
    name: "Miniket Rice Premium",
    banglaName: "মিনিকেট চাল প্রিমিয়াম",
    category: "Rice & Grains",
    categoryBn: "চাল ও ডাল",
    price: 380,
    originalPrice: 420,
    unit: "5 kg Bag",
    badge: "10% OFF",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-seedling"
  },
  {
    id: 2,
    name: "Teer Fortified Soybean Oil",
    banglaName: "তীর ফর্টিফাইড সয়াবিন তেল",
    category: "Rice & Grains",
    categoryBn: "রান্নার তেল",
    price: 370,
    originalPrice: 395,
    unit: "2 Litre Bottle",
    badge: "Save ৳25",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-bottle-droplet"
  },
  {
    id: 3,
    name: "Milk Vita Pasteurized Liquid Milk",
    banglaName: "মিল্ক ভিটা পাস্তুরিত তরল দুধ",
    category: "Dairy & Eggs",
    categoryBn: "দুগ্ধ ও ডিম",
    price: 90,
    originalPrice: 90,
    unit: "1 Litre Packet",
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-glass-water"
  },
  {
    id: 4,
    name: "Farm Fresh Brown Eggs",
    banglaName: "লাল ডিম",
    category: "Dairy & Eggs",
    categoryBn: "দুগ্ধ ও ডিম",
    price: 145,
    originalPrice: 160,
    unit: "12 pcs (1 Dozen)",
    badge: "Best Seller",
   image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-egg"
  },
  {
    id: 5,
    name: "Fresh Broiler Chicken (Skin-off)",
    banglaName: "তাজা ব্রয়লার মুরগি (চামড়াহীন)",
    category: "Meat & Fish",
    categoryBn: "মাছ ও মাংস",
    price: 195,
    originalPrice: 215,
    unit: "1 kg (Cut)",
    badge: "Halal Cut",
    fallbackIcon: "fa-drumstick-bite"
  },
  {
    id: 6,
    name: "Padma River Hilsa Fish (Ilish)",
    banglaName: "পদ্মার তাজা বড় ইলিশ মাছ",
    category: "Meat & Fish",
    categoryBn: "মাছ ও মাংস",
    price: 1450,
    originalPrice: 1650,
    unit: "1 kg (Single Fish)",
    badge: "Save ৳200",
    image: "https://images.unsplash.com/photo-1534948216015-843149f72be3?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-fish"
  },
  {
    id: 7,
    name: "Sagor Bananas (Ripe)",
    banglaName: "নরসিংদীর পাকা সাগর কলা",
    category: "Fruits & Vegetables",
    categoryBn: "ফল ও শাকসবজি",
    price: 110,
    originalPrice: 125,
    unit: "12 pcs (1 Dozen)",
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-carrot"
  },
  {
    id: 8,
    name: "Fresh Red Royal Gala Apples",
    banglaName: "তাজা মিষ্টি লাল আপেল",
    category: "Fruits & Vegetables",
    categoryBn: "ফল ও শাকসবজি",
    price: 260,
    originalPrice: 290,
    unit: "1 kg",
    badge: "10% OFF",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-apple-whole"
  },
  {
    id: 9,
    name: "Deshi Red Round Potatoes",
    banglaName: "দেশি লাল গোল আলু",
    category: "Fruits & Vegetables",
    categoryBn: "ফল ও শাকসবজি",
    price: 45,
    originalPrice: 50,
    unit: "1 kg",
    badge: "Fresh Stock",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-seedling"
  },
  {
    id: 10,
    name: "Pabna Deshi Red Onions",
    banglaName: "পাবনার দেশি লাল পেঁয়াজ",
    category: "Fruits & Vegetables",
    categoryBn: "ফল ও শাকসবজি",
    price: 85,
    originalPrice: 95,
    unit: "1 kg",
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-circle-dot"
  },
  
  {
    id: 11,
    name: "Fresh Refined White Sugar",
    banglaName: "ফ্রেশ পরিশোধিত সাদা চিনি",
    category: "Rice & Grains",
    categoryBn: "চাল ও ডাল",
    price: 130,
    originalPrice: 130,
    unit: "1 kg Packet",
    badge: "In Stock",

    fallbackIcon: "fa-cubes-stacked"
  },
  {
    id: 12,
    name: "PRAN Premium Toast Biscuits",
    banglaName: "প্রাণ প্রিমিয়াম টোস্ট বিস্কুট",
    category: "Snacks & Beverages",
    categoryBn: "স্ন্যাক্স ও পানীয়",
    price: 65,
    originalPrice: 70,
    unit: "300 g Pack",
    badge: "Crispy",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-cookie-bite"
  },
  {
    id: 13,
    name: "Ispahani Mirzapore Best Leaf Tea",
    banglaName: "ইস্পাহানি মির্জাপুর বেস্ট লিফ চা",
    category: "Snacks & Beverages",
    categoryBn: "স্ন্যাক্স ও পানীয়",
    price: 115,
    originalPrice: 125,
    unit: "200 g Pack",
    badge: "Save ৳10",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80",
    fallbackIcon: "fa-mug-hot"
  },
 
];

// Free shipping threshold in Bangladeshi Taka
const FREE_SHIPPING_THRESHOLD = 1500;
const STANDARD_DELIVERY_FEE = 50;

// ==============================================================================
// 2. APPLICATION STATE
// ==============================================================================
let currentCategory = "All";
let searchQuery = "";
let currentSort = "featured";

// Shopping Cart (Loaded from LocalStorage)
let cart = loadFromLocalStorage("protidiner_cart", []);

// Wishlist (Set of IDs loaded from LocalStorage)
let wishlist = new Set(loadFromLocalStorage("protidiner_wishlist", []));

// ==============================================================================
// 3. INITIALIZATION ON DOM READY
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
});

// Helper for safe LocalStorage retrieval
function loadFromLocalStorage(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (error) {
    console.warn(`Error reading localStorage for key ${key}:`, error);
    return fallback;
  }
}

// Helper to save to LocalStorage
function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn(`Error writing to localStorage for key ${key}:`, error);
  }
}

// ==============================================================================
// 4. EVENT LISTENERS
// ==============================================================================
function initEventListeners() {
  // Real-time Search input
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? "block" : "none";
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.style.display = "none";
      renderProducts();
    });
  }

  // Search form submit prevention
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const productSection = document.getElementById("productsSection");
      if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Delivery Location Change
  const locationSelect = document.getElementById("deliveryLocationSelect");
  if (locationSelect) {
    locationSelect.addEventListener("change", (e) => {
      showToast(`Delivery location set to ${e.target.value}`);
    });
  }

  // Checkout form submit
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navBar = document.querySelector(".nav-bar");
  if (mobileToggle && navBar) {
    mobileToggle.addEventListener("click", () => {
      navBar.classList.toggle("mobile-open");
    });
  }
}

// ==============================================================================
// 5. PRODUCT RENDERING & FILTERING
// ==============================================================================
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const countDisplay = document.getElementById("productCountDisplay");
  if (!grid) return;

  // Filter products by category and search keyword
  let filtered = productsData.filter((item) => {
    // Category check
    const matchesCategory =
      currentCategory === "All" || item.category === currentCategory;

    // Search query check (matches English name, Bangla name, or category)
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.banglaName.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update count indicator
  if (countDisplay) {
    countDisplay.textContent = `${filtered.length} products`;
  }

  // Empty state handling
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box">
        <i class="fa-solid fa-magnifying-glass no-results-icon"></i>
        <h3 class="no-results-title">No products found for "${searchQuery}"</h3>
        <p class="no-results-desc">Try checking the spelling or browse another category from the list above.</p>
        <button class="btn-primary" onclick="resetAllFilters()">
          <i class="fa-solid fa-rotate-left"></i> View All Products
        </button>
      </div>
    `;
    return;
  }

  // Render product cards
  grid.innerHTML = filtered.map((item) => {
    const isWishlisted = wishlist.has(item.id);
    const cartItem = cart.find((c) => c.id === item.id);
    const qtyInCart = cartItem ? cartItem.qty : 0;
    const hasDiscount = item.originalPrice > item.price;

    return `
      <div class="product-card" data-id="${item.id}">
        <!-- Badges & Wishlist -->
        <div class="card-header-meta">
          <div>
            ${
              hasDiscount
                ? `<span class="badge-discount">${item.badge}</span>`
                : `<span class="badge-tag">${item.badge}</span>`
            }
          </div>
          <button 
            class="wishlist-btn ${isWishlisted ? "active" : ""}" 
            onclick="toggleWishlist(${item.id})"
            title="${isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}"
            aria-label="Wishlist"
          >
            <i class="${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </button>
        </div>

        <!-- Product Image with graceful SVG fallback -->
        <div class="product-image-wrap">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="product-img"
            loading="lazy"
            referrerpolicy="no-referrer"
            onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'image-fallback-box\\'><i class=\\'fa-solid ${item.fallbackIcon}\\'></i><span>${item.name}</span></div>';"
          />
        </div>

        <!-- Metadata -->
        <div class="product-category-text">${item.category}</div>
        <h3 class="product-title">${item.name}</h3>
        <div class="product-bangla-title">${item.banglaName}</div>
        <div class="product-unit"><i class="fa-solid fa-weight-scale" style="font-size:0.75rem; margin-right:4px;"></i> ${item.unit}</div>

        <!-- Pricing -->
        <div class="product-pricing-row">
          <div class="price-current">৳${item.price}</div>
          ${
            hasDiscount
              ? `<div class="price-original">৳${item.originalPrice}</div>`
              : ""
          }
        </div>

        <!-- Add To Cart / Quantity Action -->
        <div class="product-action-row">
          ${
            qtyInCart > 0
              ? `
              <div class="card-qty-control">
                <button class="card-qty-btn" onclick="updateCartQuantity(${item.id}, ${qtyInCart - 1})" aria-label="Decrease quantity">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="card-qty-number">${qtyInCart} in bag</span>
                <button class="card-qty-btn" onclick="updateCartQuantity(${item.id}, ${qtyInCart + 1})" aria-label="Increase quantity">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            `
              : `
              <button class="btn-add-cart" onclick="addToCart(${item.id})">
                <i class="fa-solid fa-basket-shopping"></i> Add to Cart
              </button>
            `
          }
        </div>
      </div>
    `;
  }).join("");
}

// Category filter function
function filterByCategory(categoryName) {
  currentCategory = categoryName;

  // Update category cards active status
  document.querySelectorAll(".category-card").forEach((card) => {
    if (card.dataset.category === categoryName) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  // Update filter chips active status
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    if (chip.dataset.category === categoryName) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  renderProducts();

  // Scroll to products if triggered from top categories
  const productsSec = document.getElementById("productsSection");
  if (productsSec) {
    productsSec.scrollIntoView({ behavior: "smooth" });
  }
}

// Reset filters back to All
function resetAllFilters() {
  currentCategory = "All";
  searchQuery = "";
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (searchInput) searchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.style.display = "none";
  filterByCategory("All");
}

// ==============================================================================
// 6. SHOPPING CART LOGIC & PERSISTENCE
// ==============================================================================
function addToCart(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      banglaName: product.banglaName,
      price: product.price,
      unit: product.unit,
      image: product.image,
      fallbackIcon: product.fallbackIcon,
      qty: 1
    });
  }

  saveToLocalStorage("protidiner_cart", cart);
  updateCartUI();
  renderProducts();
  showToast(`Added "${product.name}" to cart!`);
}

function updateCartQuantity(productId, newQty) {
  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty = newQty;
    saveToLocalStorage("protidiner_cart", cart);
    updateCartUI();
    renderProducts();
  }
}

function removeFromCart(productId) {
  const item = cart.find((c) => c.id === productId);
  cart = cart.filter((c) => c.id !== productId);
  saveToLocalStorage("protidiner_cart", cart);
  updateCartUI();
  renderProducts();
  if (item) {
    showToast(`Removed "${item.name}" from cart`);
  }
}

function clearCart() {
  cart = [];
  saveToLocalStorage("protidiner_cart", cart);
  updateCartUI();
  renderProducts();
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartUI() {
  const cartCountBadges = document.querySelectorAll(".cart-count-badge");
  const cartAmountDisplays = document.querySelectorAll(".cart-total-amount");
  const drawerBody = document.getElementById("cartDrawerBody");
  const drawerFooter = document.getElementById("cartDrawerFooter");
  const freeShippingMeter = document.getElementById("freeShippingMeter");
  const meterFill = document.getElementById("freeShippingMeterFill");
  const meterText = document.getElementById("freeShippingMeterText");

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : STANDARD_DELIVERY_FEE;
  const grandTotal = subtotal + deliveryFee;

  // Update header badges & amounts
  cartCountBadges.forEach((b) => (b.textContent = totalItems));
  cartAmountDisplays.forEach((a) => (a.textContent = `৳${grandTotal}`));

  // Update Free Shipping Meter (Addresses Problem 03 from research)
  if (freeShippingMeter && meterFill && meterText) {
    if (subtotal === 0) {
      freeShippingMeter.style.display = "none";
    } else {
      freeShippingMeter.style.display = "block";
      const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      meterFill.style.width = `${progress}%`;

      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        meterText.innerHTML = `<span><i class="fa-solid fa-circle-check" style="color:var(--color-secondary)"></i> You qualified for Free Delivery!</span> <span>৳0 Delivery</span>`;
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        meterText.innerHTML = `<span>Add <strong>৳${remaining}</strong> more for Free Delivery</span> <span>${progress}%</span>`;
      }
    }
  }

  // If Drawer Body doesn't exist, exit
  if (!drawerBody) return;

  if (cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-basket-shopping cart-empty-icon"></i>
        <h4 class="cart-empty-title">Your shopping bag is empty</h4>
        <p class="cart-empty-text">Explore our fresh grocery collections and add daily essentials.</p>
        <button class="btn-primary" onclick="closeCart();">
          <i class="fa-solid fa-bag-shopping"></i> Start Shopping
        </button>
      </div>
    `;
    if (drawerFooter) drawerFooter.style.display = "none";
  } else {
    if (drawerFooter) drawerFooter.style.display = "block";

    drawerBody.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="cart-item-img"
            onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'width:60px;height:60px;display:flex;align-items:center;justify-content:center;background:#e2e8f0;border-radius:6px;\\'><i class=\\'fa-solid ${item.fallbackIcon}\\'></i></div>';"
          />
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price-calc">
              ${item.qty} × ৳${item.price} = <span>৳${item.price * item.qty}</span>
            </div>
          </div>
          <div class="cart-item-actions">
            <div class="qty-stepper">
              <button class="qty-step-btn" onclick="updateCartQuantity(${item.id}, ${item.qty - 1})" aria-label="Decrease">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="qty-step-val">${item.qty}</span>
              <button class="qty-step-btn" onclick="updateCartQuantity(${item.id}, ${item.qty + 1})" aria-label="Increase">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button class="cart-item-remove-btn" onclick="removeFromCart(${item.id})" title="Remove item" aria-label="Remove item">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      `
      )
      .join("");

    // Update Drawer Summary Prices
    const drawerSubtotal = document.getElementById("drawerSubtotal");
    const drawerDelivery = document.getElementById("drawerDelivery");
    const drawerTotal = document.getElementById("drawerTotal");

    if (drawerSubtotal) drawerSubtotal.textContent = `৳${subtotal}`;
    if (drawerDelivery) {
      drawerDelivery.textContent =
        deliveryFee === 0 ? "FREE" : `৳${deliveryFee}`;
      drawerDelivery.style.color = deliveryFee === 0 ? "var(--color-secondary)" : "inherit";
    }
    if (drawerTotal) drawerTotal.textContent = `৳${grandTotal}`;
  }
}

// Drawer Visibility Helpers
function openCart() {
  const backdrop = document.getElementById("cartDrawerBackdrop");
  const drawer = document.getElementById("cartDrawer");
  if (backdrop && drawer) {
    backdrop.classList.add("active");
    drawer.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  const backdrop = document.getElementById("cartDrawerBackdrop");
  const drawer = document.getElementById("cartDrawer");
  if (backdrop && drawer) {
    backdrop.classList.remove("active");
    drawer.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==============================================================================
// 7. WISHLIST MANAGEMENT
// ==============================================================================
function toggleWishlist(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return;

  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    showToast(`Removed "${product.name}" from wishlist`);
  } else {
    wishlist.add(productId);
    showToast(`Added "${product.name}" to wishlist ❤️`);
  }

  saveToLocalStorage("protidiner_wishlist", Array.from(wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const wishlistBadges = document.querySelectorAll(".wishlist-count-badge");
  wishlistBadges.forEach((b) => (b.textContent = wishlist.size));
}

function openWishlistModal() {
  const modal = document.getElementById("wishlistModal");
  const body = document.getElementById("wishlistModalBody");
  if (!modal || !body) return;

  const wishlistedItems = productsData.filter((p) => wishlist.has(p.id));

  if (wishlistedItems.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding: 2.5rem 1rem;">
        <i class="fa-regular fa-heart" style="font-size:3rem; color:#cbd5e1; margin-bottom:0.75rem;"></i>
        <h4 style="font-weight:700; margin-bottom:0.35rem;">Your wishlist is empty</h4>
        <p style="font-size:0.85rem; color:var(--color-text-muted);">Tap the heart icon on any grocery item to save it for later.</p>
      </div>
    `;
  } else {
    body.innerHTML = wishlistedItems
      .map(
        (item) => `
        <div class="wishlist-item">
          <img src="${item.image}" alt="${item.name}" class="wishlist-item-img" />
          <div class="wishlist-item-info">
            <h4 class="wishlist-item-title">${item.name}</h4>
            <div class="wishlist-item-price">৳${item.price} <span style="font-size:0.75rem; color:#94a3b8; font-weight:normal;">/ ${item.unit}</span></div>
          </div>
          <button class="btn-wishlist-cart" onclick="addToCart(${item.id}); closeModal('wishlistModal');">
            <i class="fa-solid fa-basket-shopping"></i> Add to Bag
          </button>
          <button class="cart-item-remove-btn" onclick="toggleWishlist(${item.id}); openWishlistModal();" title="Remove" aria-label="Remove">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `
      )
      .join("");
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ==============================================================================
// 8. CHECKOUT DEMONSTRATION & BANGLADESHI VALIDATION
// ==============================================================================
function openCheckout() {
  if (cart.length === 0) {
    showToast("Please add items to your cart before proceeding to checkout!");
    return;
  }

  closeCart(); // Close drawer if open

  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  // Refresh summary numbers in checkout modal
  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
  const grandTotal = subtotal + deliveryFee;

  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutDelivery = document.getElementById("checkoutDelivery");
  const checkoutTotal = document.getElementById("checkoutTotal");

  if (checkoutSubtotal) checkoutSubtotal.textContent = `৳${subtotal}`;
  if (checkoutDelivery) {
    checkoutDelivery.textContent = deliveryFee === 0 ? "FREE" : `৳${deliveryFee}`;
    checkoutDelivery.style.color = deliveryFee === 0 ? "var(--color-secondary)" : "inherit";
  }
  if (checkoutTotal) checkoutTotal.textContent = `৳${grandTotal}`;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById("customerName");
  const phoneInput = document.getElementById("customerPhone");
  const addressInput = document.getElementById("customerAddress");
  const areaSelect = document.getElementById("deliveryArea");
  const timeSlot = document.getElementById("deliveryTimeSlot");
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const area = areaSelect ? areaSelect.value : "Dhanmondi, Dhaka";
  const slot = timeSlot ? timeSlot.value : "Express (45-60 mins)";
  const payment = paymentMethod ? paymentMethod.value : "Cash on Delivery";

  // Simple validation for beginners: Name required
  if (!name) {
    alert("Please enter your Full Name.");
    if (nameInput) nameInput.focus();
    return;
  }

  // Bangladeshi Mobile Number Validation:
  // Starts with 01 and is exactly 11 digits (e.g. 01712345678, 018..., 019..., 013..., 014..., 015..., 016...)
  const bdPhoneRegex = /^01[3-9]\d{8}$/;
  const cleanPhone = phone.replace(/[\s-]/g, "");

  if (!bdPhoneRegex.test(cleanPhone)) {
    alert("Please enter a valid 11-digit Bangladeshi mobile number (e.g., 01712345678 or 01812345678).");
    if (phoneInput) phoneInput.focus();
    return;
  }

  // Address validation
  if (!address || address.length < 5) {
    alert("Please provide a detailed delivery address (House, Road, Area).");
    if (addressInput) addressInput.focus();
    return;
  }

  // Calculate totals
  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
  const grandTotal = subtotal + deliveryFee;
  const totalItemCount = cart.reduce((s, i) => s + i.qty, 0);

  // Generate Demo Order ID (inspired by project proposal Shwapno format #940341)
  const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
  const orderId = `PB-${randomOrderNum}`;

  // Close Checkout Modal & Open Order Confirmation Modal
  closeModal("checkoutModal");
  showOrderConfirmation({
    orderId,
    customerName: name,
    customerPhone: cleanPhone,
    deliveryAddress: `${address}, ${area}`,
    timeSlot: slot,
    paymentMethod: payment,
    itemsCount: totalItemCount,
    subtotal,
    deliveryFee,
    grandTotal
  });

  // Clear cart only after success!
  clearCart();
}

function showOrderConfirmation(order) {
  const modal = document.getElementById("orderConfirmationModal");
  const detailsContainer = document.getElementById("orderReceiptContent");
  if (!modal || !detailsContainer) return;

  detailsContainer.innerHTML = `
    <div class="receipt-row">
      <span class="receipt-label">Order Number:</span>
      <span class="receipt-value order-id">#${order.orderId}</span>
    </div>
    <div class="receipt-row">
      <span class="receipt-label">Recipient:</span>
      <span class="receipt-value">${order.customerName} (${order.customerPhone})</span>
    </div>
    <div class="receipt-row">
      <span class="receipt-label">Delivery Address:</span>
      <span class="receipt-value">${order.deliveryAddress}</span>
    </div>
    <div class="receipt-row">
      <span class="receipt-label">Delivery Time:</span>
      <span class="receipt-value" style="color:var(--color-primary); font-weight:700;">
        <i class="fa-solid fa-clock"></i> ${order.timeSlot}
      </span>
    </div>
    <div class="receipt-row">
      <span class="receipt-label">Payment Option:</span>
      <span class="receipt-value">${order.paymentMethod}</span>
    </div>
    <div class="receipt-row">
      <span class="receipt-label">Total Groceries:</span>
      <span class="receipt-value">${order.itemsCount} items</span>
    </div>
    <div class="receipt-row">
      <span class="receipt-label">Delivery Fee:</span>
      <span class="receipt-value" style="color:${order.deliveryFee === 0 ? "var(--color-secondary)" : "inherit"}">
        ${order.deliveryFee === 0 ? "FREE" : "৳" + order.deliveryFee}
      </span>
    </div>
    <div class="receipt-row" style="font-size:1.05rem; font-weight:800; color:var(--color-primary); padding-top:0.5rem; margin-top:0.35rem; border-top:1px dashed #cbd5e1;">
      <span class="receipt-label" style="color:var(--color-text-main);">Amount Payable:</span>
      <span class="receipt-value">৳${order.grandTotal}</span>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  showToast(`🎉 Order #${order.orderId} placed successfully!`);
}

// General Modal Closing Helper
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==============================================================================
// 9. TOAST NOTIFICATION UTILITY
// ==============================================================================
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-check-circle" style="color:var(--color-secondary)"></i> <span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 20);

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Copy coupon code to clipboard
function copyCoupon(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Coupon code "${code}" copied to clipboard!`);
  }).catch(() => {
    showToast(`Code: ${code}`);
  });
}
