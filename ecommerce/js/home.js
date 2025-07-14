// Home page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
});

function loadFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featuredProducts');
    const featuredProducts = getFeaturedProducts(8);
    
    if (featuredProductsContainer) {
        featuredProductsContainer.innerHTML = featuredProducts
            .map(product => createProductCard(product))
            .join('');
    }
}

// Handle category card clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('.category-card')) {
        const categoryCard = e.target.closest('.category-card');
        const categoryName = categoryCard.querySelector('h3').textContent.toLowerCase();
        
        // Find category ID
        const category = categories.find(cat => 
            cat.name.toLowerCase() === categoryName
        );
        
        if (category) {
            window.location.href = `products.html?category=${category.id}`;
        }
    }
}); 