// Products page functionality
let currentProducts = [];
let currentFilters = {
    categories: [],
    maxPrice: 50000,
    search: ''
};
let currentSort = 'name';

document.addEventListener('DOMContentLoaded', function() {
    initializeProductsPage();
    setupEventListeners();
});

function initializeProductsPage() {
    // Check for category filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('category');
    
    if (categoryFilter) {
        currentFilters.categories = [categoryFilter];
        // Update category checkboxes
        setTimeout(() => {
            const checkbox = document.querySelector(`input[value="${categoryFilter}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        }, 100);
    }
    
    loadCategoryFilters();
    loadProducts();
}

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            currentFilters.search = this.value;
            loadProducts();
        }, 300));
    }
    
    // Price range slider
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            currentFilters.maxPrice = parseInt(this.value);
            document.getElementById('priceValue').textContent = `Rs. ${parseInt(this.value).toLocaleString()}`;
            loadProducts();
        });
    }
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            loadProducts();
        });
    }
    
    // Clear filters button
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // View toggle buttons
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            toggleView(view);
        });
    });
}

function loadCategoryFilters() {
    const categoryFiltersContainer = document.getElementById('categoryFilters');
    
    if (categoryFiltersContainer) {
        categoryFiltersContainer.innerHTML = categories
            .map(category => `
                <div class="filter-option">
                    <input type="checkbox" id="cat-${category.id}" value="${category.id}" 
                           ${currentFilters.categories.includes(category.id) ? 'checked' : ''}>
                    <label for="cat-${category.id}">${category.name}</label>
                </div>
            `)
            .join('');
        
        // Add event listeners to checkboxes
        const checkboxes = categoryFiltersContainer.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    if (!currentFilters.categories.includes(this.value)) {
                        currentFilters.categories.push(this.value);
                    }
                } else {
                    currentFilters.categories = currentFilters.categories.filter(cat => cat !== this.value);
                }
                loadProducts();
            });
        });
    }
}

function loadProducts() {
    // Apply filters
    let filteredProducts = filterProducts(currentFilters);
    
    // Apply sorting
    filteredProducts = sortProducts(filteredProducts, currentSort);
    
    currentProducts = filteredProducts;
    
    // Update products count
    const productsCountElement = document.getElementById('productsCount');
    if (productsCountElement) {
        productsCountElement.textContent = filteredProducts.length;
    }
    
    // Display products
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsGrid) {
        if (products.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <i class="fas fa-search" style="font-size: 3rem; color: #dee2e6; margin-bottom: 20px;"></i>
                    <h3 style="color: #6c757d; margin-bottom: 10px;">No products found</h3>
                    <p style="color: #adb5bd;">Try adjusting your filters or search terms</p>
                </div>
            `;
        } else {
            productsGrid.innerHTML = products
                .map(product => createProductCard(product))
                .join('');
        }
    }
}

function clearAllFilters() {
    // Reset filters
    currentFilters = {
        categories: [],
        maxPrice: 50000,
        search: ''
    };
    
    // Reset UI
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.value = 50000;
        document.getElementById('priceValue').textContent = 'Rs. 50,000';
    }
    
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'name';
    
    // Uncheck all category checkboxes
    const checkboxes = document.querySelectorAll('#categoryFilters input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reload products
    loadProducts();
}

function toggleView(view) {
    const productsGrid = document.getElementById('productsGrid');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    // Update active button
    viewBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    // Update grid layout
    if (view === 'list') {
        productsGrid.classList.add('list-view');
    } else {
        productsGrid.classList.remove('list-view');
    }
}

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
} 