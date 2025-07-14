// Cart page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    setupCartEventListeners();
});

function loadCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartElement = document.getElementById('emptyCart');
    
    if (cart.items.length === 0) {
        if (cartItemsContainer) cartItemsContainer.style.display = 'none';
        if (emptyCartElement) emptyCartElement.style.display = 'block';
        updateCartSummary();
        return;
    }
    
    if (cartItemsContainer) {
        cartItemsContainer.style.display = 'flex';
        cartItemsContainer.innerHTML = cart.items
            .map(item => createCartItemHTML(item))
            .join('');
    }
    
    if (emptyCartElement) emptyCartElement.style.display = 'none';
    
    updateCartSummary();
}

function createCartItemHTML(item) {
    return `
        <div class="cart-item" data-product-id="${item.id}">
            <div class="cart-item-image">
                ${item.image}
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <div class="category">${getCategoryById(item.category).name}</div>
                <div class="price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" 
                       min="1" onchange="updateQuantity(${item.id}, parseInt(this.value))">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-total">
                ${formatPrice(item.price * item.quantity)}
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
}

function updateQuantity(productId, newQuantity) {
    cart.updateQuantity(productId, newQuantity);
    loadCart();
}

function removeFromCart(productId) {
    cart.removeItem(productId);
    loadCart();
}

function updateCartSummary() {
    const subtotal = cart.getTotal();
    const shipping = subtotal > 0 ? 500 : 0; // Free shipping over Rs. 0 (for demo)
    const tax = subtotal * 0.15; // 15% tax
    const total = subtotal + shipping + tax;
    
    // Update summary elements
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal);
    if (shippingElement) shippingElement.textContent = formatPrice(shipping);
    if (taxElement) taxElement.textContent = formatPrice(tax);
    if (totalElement) totalElement.textContent = formatPrice(total);
    
    // Enable/disable checkout button
    if (checkoutBtn) {
        checkoutBtn.disabled = subtotal === 0;
    }
}

function setupCartEventListeners() {
    // Clear cart button
    const clearCartBtn = document.getElementById('clearCart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your cart?')) {
                cart.clearCart();
                loadCart();
            }
        });
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            alert('Thank you for your order! This is a demo website. In a real application, you would be redirected to a payment gateway.');
        });
    }
} 