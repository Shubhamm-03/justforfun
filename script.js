// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Search functionality
const searchToggle = document.querySelector('.search-toggle');
const searchModal = document.querySelector('.search-modal');
const closeSearch = document.querySelector('.close-search');
const searchInput = document.querySelector('.search-input');

searchToggle.addEventListener('click', () => {
    searchModal.style.display = 'flex';
    setTimeout(() => searchInput.focus(), 300);
});

closeSearch.addEventListener('click', () => {
    searchModal.style.display = 'none';
});

searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Products data
const products = [
    {
        id: 1,
        name: 'Air Jordan 1 High OG',
        brand: 'Jordan',
        price: 189,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
        thumbs: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop'
        ],
        sizes: [7, 8, 9, 10, 11, 12],
        category: 'jordan'
    },
    {
        id: 2,
        name: 'Yeezy Boost 350 V2',
        brand: 'Adidas',
        price: 299,
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=300&fit=crop',
        thumbs: [
            'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop'
        ],
        sizes: [7, 8, 9, 10],
        category: 'adidas'
    },
    {
        id: 3,
        name: 'Nike Dunk Low Panda',
        brand: 'Nike',
        price: 129,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
        thumbs: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=100&h=100&fit=crop'
        ],
        sizes: [6, 7, 8, 9, 10, 11],
        category: 'nike'
    },
    {
        id: 4,
        name: 'Air Force 1 Low',
        brand: 'Nike',
        price: 109,
        image: 'https://images.unsplash.com/photo-1523961133220-33f3f917e1a9?w=400&h=300&fit=crop',
        thumbs: [
            'https://images.unsplash.com/photo-1523961133220-33f3f917e1a9?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop'
        ],
        sizes: [7, 8, 9, 10, 11],
        category: 'nike'
    },
    {
        id: 5,
        name: 'Yeezy 700',
        brand: 'Adidas',
        price: 249,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
        thumbs: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=100&h=100&fit=crop'
        ],
        sizes: [8, 9, 10, 11],
        category: 'adidas'
    },
    {
        id: 6,
        name: 'Air Jordan 4 Retro',
        brand: 'Jordan',
        price: 219,
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&h=300&fit=crop',
        thumbs: [
            'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=100&h=100&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop'
        ],
        sizes: [7, 8, 9, 10, 11, 12],
        category: 'jordan'
    }
];

// Initialize products
function initProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Create product card
function createProductCard(product) {
    return `
        <div class="product-card fade-in-up" data-category="${product.category}" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-badge">New</div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
            </div>
        </div>
    `;
}

// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        filterProducts(filterValue);
    });
});

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.classList.add('fade-in-up');
        } else {
            card.style.display = 'none';
        }
    });
}

// Product modal
const productModal = document.getElementById('productModal');
const modalMainImage = document.getElementById('modalMainImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalPriceValue = document.getElementById('modalPriceValue');
const sizeButtons = document.getElementById('sizeButtons');
const closeModal = document.querySelector('.close-modal');

document.addEventListener('click', (e) => {
    if (e.target.dataset.productId) {
        const productId = parseInt(e.target.closest('.product-card').dataset.productId);
        const product = products.find(p => p.id === productId);
        openProductModal(product);
    }
});

function openProductModal(product) {
    modalMainImage.src = product.image;
    modalTitle.textContent = product.name;
    modalPrice.textContent = `$${product.price}`;
    modalPriceValue.textContent = product.price;
    
    // Thumbnails
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');
    thumbnailGallery.innerHTML = product.thumbs.map((thumb, index) => 
        `<div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${thumb}" alt="${product.name}">
        </div>`
    ).join('');
    
    // Sizes
    sizeButtons.innerHTML = product.sizes.map(size => 
        `<button class="size-btn">${size}</button>`
    ).join('');
    
    productModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    productModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Thumbnail functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.thumbnail')) {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const index = parseInt(e.target.closest('.thumbnail').dataset.index);
        const product = products.find(p => p.id === parseInt(document.querySelector('.product-card[data-product-id]:not([style*="display: none"])')?.dataset.productId));
        
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
        
        modalMainImage.src = product.thumbs[index];
    }
});

// Size selection
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('size-btn')) {
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    }
});

// Shopping Cart
let cart = [];
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const closeCart = document.querySelector('.close-cart');
const addToCartBtn = document.getElementById('addToCartBtn');

cartIcon.addEventListener('click', () => {
    updateCartUI();
    cartModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

addToCartBtn.addEventListener('click', () => {
    const activeSize = document.querySelector('.size-btn.active');
    if (!activeSize) {
        alert('Please select a size');
        return;
    }
    
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const productId = parseInt(document.querySelector('.product-card:not([style*="display: none"])')?.dataset.productId);
    const product = products.find(p => p.id === productId);
    
    const cartItem = {
        ...product,
        size: parseInt(activeSize.textContent),
        quantity: quantity
    };
    
    const existingItemIndex = cart.findIndex(item => 
        item.id === cartItem.id && item.size === cartItem.size
    );
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push(cartItem);
    }
    
    updateCartUI();
    alert('Added to cart!');
});

function updateCartUI() {
    cartItems.innerHTML = cart.length ? cart.map(item => createCartItem(item)).join('') : 
        '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function createCartItem(item) {
    return `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-price">$${item.price}</div>
                <div>Size: ${item.size}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.size}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.size}, 1)">+</button>
                    <button class="qty-btn" style="background: #dc3545; color: white; margin-left: 1rem;" onclick="removeFromCart(${item.id}, ${item.size})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function updateQuantity(id, size, change) {
    const itemIndex = cart.findIndex(item => item.id === id && item.size === size);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        updateCartUI();
    }
}

function removeFromCart(id, size) {
    cart = cart.filter(item => !(item.id === id && item.size === size));
    updateCartUI();
}

// Checkout
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    alert('Proceeding to checkout... (Demo)');
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const brand = card.querySelector('.product-brand').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || brand.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe product cards
document.addEventListener('DOMContentLoaded', () => {
    initProducts();
    
    // Observe elements for animation
    document.querySelectorAll('.product-card, .featured-item').forEach(el => {
        observer.observe(el);
    });
    
    // Hero sneaker rotation
    const heroSneaker = document.getElementById('heroSneaker');
    let rotation = 0;
    setInterval(() => {
        rotation += 2;
        heroSneaker.style.transform = `rotate(${rotation}deg)`;
    }, 50);
    
    // Featured items 3D effect
    document.querySelectorAll('.featured-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${speed}px)`;
    }
});