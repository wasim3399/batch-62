// Categories page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
});

function loadCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    
    if (categoriesGrid) {
        categoriesGrid.innerHTML = categories
            .map(category => createCategoryCard(category))
            .join('');
    }
}

function createCategoryCard(category) {
    return `
        <div class="category-item" onclick="window.location.href='products.html?category=${category.id}'">
            <i class="${category.icon}"></i>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
            <span class="product-count">${category.productCount} Products</span>
        </div>
    `;
} 