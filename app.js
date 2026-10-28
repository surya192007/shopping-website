/**
 * AuraStore - Modern E-Commerce Application Logic
 */

// ==========================================
// 1. Product Catalog Data
// ==========================================
const PRODUCTS = [
  {
    id: 1,
    name: "Acoustic Pro Wireless Headphones",
    category: "electronics",
    price: 199.99,
    originalPrice: 279.99,
    rating: 4.9,
    reviewsCount: 312,
    badge: "sale",
    badgeLabel: "Sale -28%",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    description: "Industry-leading active noise cancellation, custom high-fidelity dynamic drivers, and up to 40 hours of playback on a single charge. Designed for audiophiles."
  },
  {
    id: 2,
    name: "UltraWatch Series X Smart Watch",
    category: "electronics",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewsCount: 184,
    badge: "popular",
    badgeLabel: "Popular",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    description: "Bright AMOLED retina display with 24/7 heart rate monitoring, SPO2 tracking, multi-sport GPS workout tracking, and 7-day battery life."
  },
  {
    id: 3,
    name: "Lumina Fast Wireless Charging Pad",
    category: "electronics",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviewsCount: 95,
    badge: "sale",
    badgeLabel: "-33%",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80",
    description: "Sleek aerospace-grade aluminum and matte silicone fast-charging stand compatible with Qi-enabled smartphones, wireless earbuds, and smartwatches."
  },
  {
    id: 4,
    name: "Classic Merino Wool Knit Sweater",
    category: "fashion",
    price: 79.99,
    originalPrice: 110.00,
    rating: 4.7,
    reviewsCount: 142,
    badge: "new",
    badgeLabel: "New Arrival",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
    description: "Superfine 100% Australian Merino wool that feels ultra-soft against skin. Breathable, thermo-regulating, and tailored with a modern ribbed trim."
  },
  {
    id: 5,
    name: "Minimalist Oversized Street Hoodie",
    category: "fashion",
    price: 59.99,
    originalPrice: 85.00,
    rating: 4.9,
    reviewsCount: 228,
    badge: "popular",
    badgeLabel: "Best Seller",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    description: "Heavyweight 450 GSM French terry cotton with dropped shoulders, double-layered hood, and a plush brushed interior for supreme comfort."
  },
  {
    id: 6,
    name: "Tailored Slim Fit Chino Trousers",
    category: "fashion",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviewsCount: 88,
    badge: "sale",
    badgeLabel: "-28%",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80",
    description: "Crafted from organic cotton twill with a touch of elastane for all-day flexibility. An essential for smart-casual wardrobes."
  },
  {
    id: 7,
    name: "CloudStep Runner 2.0 Sneakers",
    category: "footwear",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.9,
    reviewsCount: 410,
    badge: "popular",
    badgeLabel: "Trending",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    description: "Engineered breathable knit upper combined with responsive nitrogen-infused foam cushioning. Delivers featherlight comfort with every step."
  },
  {
    id: 8,
    name: "Urban Classic Leather Trainers",
    category: "footwear",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.8,
    reviewsCount: 167,
    badge: "new",
    badgeLabel: "New",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80",
    description: "Full-grain calfskin leather low-tops with cushioned Ortholite insoles and durable vulcanized rubber soles. Timeless Scandinavian styling."
  },
  {
    id: 9,
    name: "Polarized Acetate Sunglasses",
    category: "accessories",
    price: 64.99,
    originalPrice: 89.99,
    rating: 4.7,
    reviewsCount: 120,
    badge: "sale",
    badgeLabel: "-27%",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
    description: "Handcrafted Italian acetate frames fitted with scratch-resistant polarized TAC lenses offering 100% UV400 protection against glare."
  },
  {
    id: 10,
    name: "Full-Grain Leather Bi-Fold Wallet",
    category: "accessories",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviewsCount: 195,
    badge: "popular",
    badgeLabel: "Popular",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80",
    description: "Slim profile wallet hand-stitched from vegetable-tanned leather. Includes RFID blocking protection, 8 card slots, and dual currency slots."
  },
  {
    id: 11,
    name: "Ceramic Minimalist Desk Lamp",
    category: "home",
    price: 54.99,
    originalPrice: 75.00,
    rating: 4.6,
    reviewsCount: 78,
    badge: "new",
    badgeLabel: "New",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    description: "Contemporary textured ceramic base paired with an unbleached linen drum shade. Dimmable warm LED creates an inviting, cozy ambient glow."
  },
  {
    id: 12,
    name: "Nordic Hand-Poured Scented Candle",
    category: "home",
    price: 24.99,
    originalPrice: 32.00,
    rating: 4.8,
    reviewsCount: 164,
    badge: "sale",
    badgeLabel: "-22%",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80",
    description: "100% natural soy wax infused with wild amber, cedarwood, and sea salt. Clean-burning wooden wick offers 50+ hours of tranquil aroma."
  }
];

// ==========================================
// 2. Application State Management
// ==========================================
let state = {
  cart: JSON.parse(localStorage.getItem('aurastore_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('aurastore_wishlist')) || [],
  currentCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  discountRate: 0,
  couponCode: null
};

// ==========================================
// 3. DOM Elements
// ==========================================
const productsGrid = document.getElementById('productsGrid');
const emptyState = document.getElementById('emptyState');
const categoryFilters = document.getElementById('categoryFilters');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const resultsFeedback = document.getElementById('resultsFeedback');
const searchTermDisplay = document.getElementById('searchTermDisplay');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const emptyResetBtn = document.getElementById('emptyResetBtn');

// Cart Drawer Elements
const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartBody = document.getElementById('cartBody');
const cartCount = document.getElementById('cartCount');
const cartDrawerCount = document.getElementById('cartDrawerCount');
const cartHeaderTotal = document.getElementById('cartHeaderTotal');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDiscount = document.getElementById('cartDiscount');
const discountRow = document.getElementById('discountRow');
const cartShipping = document.getElementById('cartShipping');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCartBtn');
const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
const couponCodeInput = document.getElementById('couponCodeInput');
const applyCouponBtn = document.getElementById('applyCouponBtn');
const appliedCouponTag = document.getElementById('appliedCouponTag');
const removeCouponBtn = document.getElementById('removeCouponBtn');

// Wishlist Drawer Elements
const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const wishlistDrawerBackdrop = document.getElementById('wishlistDrawerBackdrop');
const closeWishlistBtn = document.getElementById('closeWishlistBtn');
const wishlistBody = document.getElementById('wishlistBody');
const wishlistCount = document.getElementById('wishlistCount');
const wishlistItemsCount = document.getElementById('wishlistItemsCount');

// Quick View Modal Elements
const quickViewModal = document.getElementById('quickViewModal');
const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
const quickViewBody = document.getElementById('quickViewBody');

// Checkout Modal Elements
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutFormStep = document.getElementById('checkoutFormStep');
const checkoutSuccessStep = document.getElementById('checkoutSuccessStep');
const confirmedOrderId = document.getElementById('confirmedOrderId');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const heroDealBtn = document.getElementById('heroDealBtn');

// Toast Container
const toastContainer = document.getElementById('toastContainer');

// ==========================================
// 4. Persistence Helpers
// ==========================================
function saveCart() {
  localStorage.setItem('aurastore_cart', JSON.stringify(state.cart));
}

function saveWishlist() {
  localStorage.setItem('aurastore_wishlist', JSON.stringify(state.wishlist));
}

// ==========================================
// 5. Toast Notifications
// ==========================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconHtml = '<i class="fa-solid fa-circle-check"></i>';
  if (type === 'danger') iconHtml = '<i class="fa-solid fa-triangle-exclamation"></i>';
  if (type === 'info') iconHtml = '<i class="fa-solid fa-circle-info"></i>';

  toast.innerHTML = `${iconHtml}<span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3200);
}

// ==========================================
// 6. Product Rendering & Filtering
// ==========================================
function getFilteredAndSortedProducts() {
  let list = [...PRODUCTS];

  // 1. Category Filter
  if (state.currentCategory !== 'all') {
    list = list.filter(p => p.category.toLowerCase() === state.currentCategory.toLowerCase());
  }

  // 2. Search Query Filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    );
  }

  // 3. Sorting
  switch (state.sortBy) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'popular':
      list.sort((a, b) => b.reviewsCount - a.reviewsCount);
      break;
    case 'featured':
    default:
      list.sort((a, b) => a.id - b.id);
      break;
  }

  return list;
}

function renderProducts() {
  const filtered = getFilteredAndSortedProducts();

  // Handle Search feedback banner
  if (state.searchQuery.trim() !== '') {
    resultsFeedback.style.display = 'flex';
    searchTermDisplay.textContent = state.searchQuery.trim();
  } else {
    resultsFeedback.style.display = 'none';
  }

  // Handle Empty State
  if (filtered.length === 0) {
    productsGrid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  productsGrid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          
          <div class="product-badge-group">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badgeLabel}</span>` : ''}
          </div>

          <div class="card-action-overlay">
            <button class="icon-action-btn ${isWishlisted ? 'active-wishlist' : ''}" 
                    title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                    onclick="toggleWishlist(${product.id})">
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <button class="icon-action-btn" title="Quick View" onclick="openQuickView(${product.id})">
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>

        <div class="product-details">
          <span class="product-category-name">${product.category}</span>
          <h3 class="product-title" title="${product.name}">${product.name}</h3>
          
          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            <span>${product.rating.toFixed(1)}</span>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>

          <div class="product-pricing-cart">
            <div class="price-box">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <button class="btn-add-cart" title="Add to Cart" onclick="addToCart(${product.id})">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Global category switcher
window.filterByCategory = function(category) {
  state.currentCategory = category;
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.category === category);
  });
  renderProducts();
};

// ==========================================
// 7. Cart Operations
// ==========================================
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: qty
    });
  }

  saveCart();
  renderCart();
  showToast(`Added "${product.name}" to cart!`);
}
window.quickAddToCart = addToCart;

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  const itemIndex = state.cart.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    const [removed] = state.cart.splice(itemIndex, 1);
    saveCart();
    renderCart();
    showToast(`Removed "${removed.name}" from cart`, 'info');
  }
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  saveCart();
  renderCart();
  showToast('Cart cleared', 'info');
}

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountAmount = subtotal * state.discountRate;
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 9.99;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  return { subtotal, discountAmount, shipping, total };
}

function renderCart() {
  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const { subtotal, discountAmount, shipping, total } = calculateTotals();

  // Badges and counters
  cartCount.textContent = totalItemsCount;
  cartDrawerCount.textContent = totalItemsCount;
  cartHeaderTotal.textContent = `$${total.toFixed(2)}`;

  // Cart body
  if (state.cart.length === 0) {
    cartBody.innerHTML = `
      <div class="drawer-empty-msg">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>Your cart is empty</h4>
        <p>Looks like you haven't added anything yet.</p>
        <button class="btn btn-primary btn-sm" onclick="closeCart(); location.href='#catalog';" style="margin-top: 1rem;">
          Browse Catalog
        </button>
      </div>
    `;
    proceedCheckoutBtn.disabled = true;
    proceedCheckoutBtn.style.opacity = '0.5';
    proceedCheckoutBtn.style.cursor = 'not-allowed';
  } else {
    proceedCheckoutBtn.disabled = false;
    proceedCheckoutBtn.style.opacity = '1';
    proceedCheckoutBtn.style.cursor = 'pointer';

    cartBody.innerHTML = state.cart.map(item => `
      <div class="drawer-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="drawer-item-info">
          <h4>${item.name}</h4>
          <div class="drawer-item-price">$${(item.price * item.qty).toFixed(2)}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" title="Remove Item" onclick="removeFromCart(${item.id})">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');
  }

  // Price breakdown
  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  
  if (state.discountRate > 0) {
    discountRow.style.display = 'flex';
    cartDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  cartShipping.textContent = shipping === 0 ? (subtotal > 0 ? 'FREE' : '$0.00') : `$${shipping.toFixed(2)}`;
  cartTotal.textContent = `$${total.toFixed(2)}`;
  checkoutTotal.textContent = `$${total.toFixed(2)}`;
}

// Drawer Toggles
function openCart() {
  cartDrawer.classList.add('active');
  cartDrawerBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('active');
  cartDrawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// Coupon Handling
function applyCoupon() {
  const code = couponCodeInput.value.trim().toUpperCase();
  if (!code) return;

  if (code === 'AURA15') {
    state.discountRate = 0.15;
    state.couponCode = 'AURA15';
    appliedCouponTag.style.display = 'flex';
    appliedCouponTag.querySelector('span').innerHTML = 'Coupon <strong>AURA15</strong> applied (-15%)';
    couponCodeInput.value = '';
    renderCart();
    showToast('Promo code AURA15 applied successfully!');
  } else if (code === 'FREESHIP') {
    state.discountRate = 0.05;
    state.couponCode = 'FREESHIP';
    appliedCouponTag.style.display = 'flex';
    appliedCouponTag.querySelector('span').innerHTML = 'Coupon <strong>FREESHIP</strong> applied (-5%)';
    couponCodeInput.value = '';
    renderCart();
    showToast('Promo code FREESHIP applied!');
  } else {
    showToast('Invalid coupon code. Try AURA15', 'danger');
  }
}

function removeCoupon() {
  state.discountRate = 0;
  state.couponCode = null;
  appliedCouponTag.style.display = 'none';
  renderCart();
  showToast('Coupon removed', 'info');
}

// ==========================================
// 8. Wishlist Operations
// ==========================================
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${product.name}" from wishlist`, 'info');
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${product.name}" to wishlist ❤️`);
  }

  saveWishlist();
  renderProducts();
  renderWishlist();
}

function renderWishlist() {
  const total = state.wishlist.length;
  wishlistCount.textContent = total;
  wishlistItemsCount.textContent = total;

  if (total === 0) {
    wishlistBody.innerHTML = `
      <div class="drawer-empty-msg">
        <i class="fa-regular fa-heart"></i>
        <h4>Your wishlist is empty</h4>
        <p>Save items you love to revisit anytime.</p>
      </div>
    `;
    return;
  }

  const wishlistProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  wishlistBody.innerHTML = wishlistProducts.map(item => `
    <div class="drawer-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="drawer-item-info">
        <h4>${item.name}</h4>
        <div class="drawer-item-price">$${item.price.toFixed(2)}</div>
        <button class="btn btn-sm btn-dark" onclick="addToCart(${item.id}); toggleWishlist(${item.id});">
          Move to Cart
        </button>
      </div>
      <button class="remove-btn" title="Remove" onclick="toggleWishlist(${item.id})">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

function openWishlist() {
  wishlistDrawer.classList.add('active');
  wishlistDrawerBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlist() {
  wishlistDrawer.classList.remove('active');
  wishlistDrawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 9. Quick View Modal
// ==========================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  quickViewBody.innerHTML = `
    <div class="quickview-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="quickview-info">
      <span class="quickview-category">${product.category}</span>
      <h2>${product.name}</h2>
      
      <div class="product-rating">
        <i class="fa-solid fa-star"></i>
        <span>${product.rating.toFixed(1)}</span>
        <span class="rating-count">(${product.reviewsCount} customer reviews)</span>
      </div>

      <div class="quickview-pricing">
        <span class="current">$${product.price.toFixed(2)}</span>
        ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
      </div>

      <p class="quickview-desc">${product.description}</p>

      <div class="quickview-actions">
        <button class="btn btn-primary btn-block btn-lg" onclick="addToCart(${product.id}); closeQuickView();">
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>
        <button class="btn btn-outline" onclick="toggleWishlist(${product.id}); closeQuickView();" title="Wishlist">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  `;

  quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  quickViewModal.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 10. Checkout & Order Completion
// ==========================================
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty!', 'danger');
    return;
  }
  closeCart();
  checkoutFormStep.style.display = 'block';
  checkoutSuccessStep.style.display = 'none';
  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleOrderSubmit(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('submitOrderBtn');
  const submitText = document.getElementById('submitOrderBtnText');
  submitBtn.disabled = true;
  submitText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Payment...';

  setTimeout(() => {
    // Generate random order id
    const orderNum = Math.floor(100000 + Math.random() * 900000);
    confirmedOrderId.textContent = `#AURA-${orderNum}`;

    // Switch view
    checkoutFormStep.style.display = 'none';
    checkoutSuccessStep.style.display = 'block';

    // Clear cart
    state.cart = [];
    saveCart();
    renderCart();

    submitBtn.disabled = false;
    submitText.innerHTML = 'Confirm & Place Order';
    document.getElementById('orderForm').reset();
  }, 1200);
}

// Newsletter subscription
window.handleNewsletter = function(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast(`Thank you! Subscription confirmed for ${input.value}`);
  input.value = '';
};

// ==========================================
// 11. Event Listeners Setup
// ==========================================
function initEvents() {
  // Category Filtering
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-chip')) {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      state.currentCategory = e.target.dataset.category;
      renderProducts();
    }
  });

  // Sorting
  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Search input live filtering
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderProducts();
  });

  // Reset filters buttons
  const resetAll = () => {
    searchInput.value = '';
    state.searchQuery = '';
    state.currentCategory = 'all';
    clearSearchBtn.style.display = 'none';
    document.querySelectorAll('.filter-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.category === 'all');
    });
    renderProducts();
  };

  resetFiltersBtn.addEventListener('click', resetAll);
  emptyResetBtn.addEventListener('click', resetAll);

  // Cart Drawer
  cartToggleBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartDrawerBackdrop.addEventListener('click', closeCart);
  clearCartBtn.addEventListener('click', clearCart);
  proceedCheckoutBtn.addEventListener('click', openCheckout);

  // Promo code
  applyCouponBtn.addEventListener('click', applyCoupon);
  removeCouponBtn.addEventListener('click', removeCoupon);
  couponCodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyCoupon();
    }
  });

  // Wishlist Drawer
  wishlistToggleBtn.addEventListener('click', openWishlist);
  closeWishlistBtn.addEventListener('click', closeWishlist);
  wishlistDrawerBackdrop.addEventListener('click', closeWishlist);

  // Quick View Modal
  closeQuickViewBtn.addEventListener('click', closeQuickView);
  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeQuickView();
  });

  // Checkout Modal
  closeCheckoutBtn.addEventListener('click', closeCheckout);
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) closeCheckout();
  });
  continueShoppingBtn.addEventListener('click', () => {
    closeCheckout();
    location.href = '#catalog';
  });

  // Hero Deal Button
  heroDealBtn.addEventListener('click', () => {
    state.sortBy = 'price-asc';
    sortSelect.value = 'price-asc';
    renderProducts();
    const catalogEl = document.getElementById('catalog');
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  });

  // Escape key closes modals/drawers
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeWishlist();
      closeQuickView();
      closeCheckout();
    }
  });
}

// ==========================================
// 12. Application Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initEvents();
  renderProducts();
  renderCart();
  renderWishlist();
});
