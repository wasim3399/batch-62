// Sample data for the e-commerce website

const categories = [
    {
        id: 'electronics',
        name: 'Electronics',
        icon: 'fas fa-mobile-alt',
        description: 'Latest gadgets and devices',
        productCount: 15
    },
    {
        id: 'fashion',
        name: 'Fashion',
        icon: 'fas fa-tshirt',
        description: 'Trendy clothing and accessories',
        productCount: 25
    },
    {
        id: 'home',
        name: 'Home & Living',
        icon: 'fas fa-home',
        description: 'Furniture and home decor',
        productCount: 20
    },
    {
        id: 'books',
        name: 'Books',
        icon: 'fas fa-book',
        description: 'Best-selling books and literature',
        productCount: 30
    },
    {
        id: 'sports',
        name: 'Sports & Fitness',
        icon: 'fas fa-dumbbell',
        description: 'Sports equipment and fitness gear',
        productCount: 18
    },
    {
        id: 'beauty',
        name: 'Beauty & Health',
        icon: 'fas fa-spa',
        description: 'Beauty products and health supplements',
        productCount: 22
    }
];

const products = [
    // Electronics
    {
        id: 1,
        name: 'iPhone 15 Pro',
        price: 45000,
        category: 'electronics',
        image: '📱',
        description: 'Latest iPhone with advanced features'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24',
        price: 38000,
        category: 'electronics',
        image: '📱',
        description: 'Premium Android smartphone'
    },
    {
        id: 3,
        name: 'MacBook Air M2',
        price: 120000,
        category: 'electronics',
        image: '💻',
        description: 'Ultra-thin laptop with M2 chip'
    },
    {
        id: 4,
        name: 'Sony WH-1000XM5',
        price: 25000,
        category: 'electronics',
        image: '🎧',
        description: 'Premium noise-cancelling headphones'
    },
    {
        id: 5,
        name: 'iPad Air',
        price: 55000,
        category: 'electronics',
        image: '📱',
        description: 'Powerful tablet for work and play'
    },
    {
        id: 6,
        name: 'Apple Watch Series 9',
        price: 35000,
        category: 'electronics',
        image: '⌚',
        description: 'Advanced smartwatch with health features'
    },
    {
        id: 7,
        name: 'Dell XPS 13',
        price: 95000,
        category: 'electronics',
        image: '💻',
        description: 'Premium Windows laptop'
    },
    {
        id: 8,
        name: 'AirPods Pro',
        price: 18000,
        category: 'electronics',
        image: '🎧',
        description: 'Wireless earbuds with active noise cancellation'
    },

    // Fashion
    {
        id: 9,
        name: 'Nike Air Max 270',
        price: 8500,
        category: 'fashion',
        image: '👟',
        description: 'Comfortable running shoes'
    },
    {
        id: 10,
        name: 'Levi\'s 501 Jeans',
        price: 3200,
        category: 'fashion',
        image: '👖',
        description: 'Classic straight-fit jeans'
    },
    {
        id: 11,
        name: 'Adidas T-Shirt',
        price: 1200,
        category: 'fashion',
        image: '👕',
        description: 'Comfortable cotton t-shirt'
    },
    {
        id: 12,
        name: 'Ray-Ban Aviator',
        price: 8500,
        category: 'fashion',
        image: '🕶️',
        description: 'Classic aviator sunglasses'
    },
    {
        id: 13,
        name: 'Casio G-Shock',
        price: 4500,
        category: 'fashion',
        image: '⌚',
        description: 'Durable digital watch'
    },
    {
        id: 14,
        name: 'H&M Hoodie',
        price: 1800,
        category: 'fashion',
        image: '👕',
        description: 'Warm and comfortable hoodie'
    },
    {
        id: 15,
        name: 'Puma Sneakers',
        price: 3200,
        category: 'fashion',
        image: '👟',
        description: 'Stylish casual sneakers'
    },
    {
        id: 16,
        name: 'Zara Blazer',
        price: 5500,
        category: 'fashion',
        image: '👔',
        description: 'Professional blazer for office'
    },

    // Home & Living
    {
        id: 17,
        name: 'IKEA Malm Bed',
        price: 15000,
        category: 'home',
        image: '🛏️',
        description: 'Modern wooden bed frame'
    },
    {
        id: 18,
        name: 'Samsung 55" QLED TV',
        price: 85000,
        category: 'home',
        image: '📺',
        description: '4K QLED Smart TV'
    },
    {
        id: 19,
        name: 'Philips Hue Bulbs',
        price: 2500,
        category: 'home',
        image: '💡',
        description: 'Smart LED light bulbs'
    },
    {
        id: 20,
        name: 'Dyson V15 Vacuum',
        price: 45000,
        category: 'home',
        image: '🧹',
        description: 'Cordless stick vacuum cleaner'
    },
    {
        id: 21,
        name: 'KitchenAid Mixer',
        price: 28000,
        category: 'home',
        image: '🍳',
        description: 'Professional stand mixer'
    },
    {
        id: 22,
        name: 'Nest Thermostat',
        price: 12000,
        category: 'home',
        image: '🌡️',
        description: 'Smart home thermostat'
    },
    {
        id: 23,
        name: 'Sony Soundbar',
        price: 18000,
        category: 'home',
        image: '🔊',
        description: 'Wireless soundbar for TV'
    },
    {
        id: 24,
        name: 'Instant Pot',
        price: 8500,
        category: 'home',
        image: '🍲',
        description: 'Multi-functional pressure cooker'
    },

    // Books
    {
        id: 25,
        name: 'The Alchemist',
        price: 800,
        category: 'books',
        image: '📚',
        description: 'Paulo Coelho\'s masterpiece'
    },
    {
        id: 26,
        name: 'Atomic Habits',
        price: 950,
        category: 'books',
        image: '📚',
        description: 'Build good habits and break bad ones'
    },
    {
        id: 27,
        name: 'Rich Dad Poor Dad',
        price: 750,
        category: 'books',
        image: '📚',
        description: 'Financial literacy guide'
    },
    {
        id: 28,
        name: 'The Power of Now',
        price: 650,
        category: 'books',
        image: '📚',
        description: 'Spiritual guide to living in the present'
    },
    {
        id: 29,
        name: 'Think and Grow Rich',
        price: 550,
        category: 'books',
        image: '📚',
        description: 'Napoleon Hill\'s classic'
    },
    {
        id: 30,
        name: 'The 7 Habits of Highly Effective People',
        price: 850,
        category: 'books',
        image: '📚',
        description: 'Personal development classic'
    },
    {
        id: 31,
        name: 'How to Win Friends and Influence People',
        price: 600,
        category: 'books',
        image: '📚',
        description: 'Dale Carnegie\'s timeless advice'
    },
    {
        id: 32,
        name: 'The Psychology of Money',
        price: 900,
        category: 'books',
        image: '📚',
        description: 'Timeless lessons on wealth, greed, and happiness'
    },

    // Sports & Fitness
    {
        id: 33,
        name: 'Bowflex SelectTech Dumbbells',
        price: 15000,
        category: 'sports',
        image: '🏋️',
        description: 'Adjustable weight dumbbells'
    },
    {
        id: 34,
        name: 'Nike Yoga Mat',
        price: 1200,
        category: 'sports',
        image: '🧘',
        description: 'Non-slip yoga mat'
    },
    {
        id: 35,
        name: 'Fitbit Charge 5',
        price: 8500,
        category: 'sports',
        image: '⌚',
        description: 'Advanced fitness tracker'
    },
    {
        id: 36,
        name: 'Peloton Bike',
        price: 120000,
        category: 'sports',
        image: '🚴',
        description: 'Smart exercise bike with classes'
    },
    {
        id: 37,
        name: 'Under Armour Running Shoes',
        price: 4500,
        category: 'sports',
        image: '👟',
        description: 'Lightweight running shoes'
    },
    {
        id: 38,
        name: 'Lululemon Leggings',
        price: 3200,
        category: 'sports',
        image: '👖',
        description: 'High-performance workout leggings'
    },
    {
        id: 39,
        name: 'Garmin Forerunner 245',
        price: 18000,
        category: 'sports',
        image: '⌚',
        description: 'GPS running watch'
    },
    {
        id: 40,
        name: 'Resistance Bands Set',
        price: 800,
        category: 'sports',
        image: '🏋️',
        description: 'Complete resistance training set'
    },

    // Beauty & Health
    {
        id: 41,
        name: 'Dyson Airwrap',
        price: 35000,
        category: 'beauty',
        image: '💇',
        description: 'Multi-styler hair tool'
    },
    {
        id: 42,
        name: 'La Mer Moisturizer',
        price: 8500,
        category: 'beauty',
        image: '🧴',
        description: 'Luxury face moisturizer'
    },
    {
        id: 43,
        name: 'Oral-B Electric Toothbrush',
        price: 4500,
        category: 'beauty',
        image: '🪥',
        description: 'Smart electric toothbrush'
    },
    {
        id: 44,
        name: 'Clarisonic Face Brush',
        price: 6500,
        category: 'beauty',
        image: '🧼',
        description: 'Sonic facial cleansing brush'
    },
    {
        id: 45,
        name: 'Vitamin D3 Supplements',
        price: 1200,
        category: 'beauty',
        image: '💊',
        description: 'High-potency vitamin D3'
    },
    {
        id: 46,
        name: 'Omega-3 Fish Oil',
        price: 1800,
        category: 'beauty',
        image: '💊',
        description: 'Pure fish oil supplements'
    },
    {
        id: 47,
        name: 'Probiotics',
        price: 950,
        category: 'beauty',
        image: '💊',
        description: 'Gut health probiotics'
    },
    {
        id: 48,
        name: 'Collagen Peptides',
        price: 2200,
        category: 'beauty',
        image: '💊',
        description: 'Beauty and joint support'
    }
];

// Helper functions
function getCategoryById(id) {
    return categories.find(category => category.id === id);
}

function getProductsByCategory(categoryId) {
    return products.filter(product => product.category === categoryId);
}

function getFeaturedProducts(limit = 8) {
    return products.slice(0, limit);
}

function searchProducts(query) {
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery)
    );
}

function filterProducts(filters) {
    let filteredProducts = [...products];

    // Category filter
    if (filters.categories && filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            filters.categories.includes(product.category)
        );
    }

    // Price filter
    if (filters.maxPrice) {
        filteredProducts = filteredProducts.filter(product => 
            product.price <= filters.maxPrice
        );
    }

    // Search filter
    if (filters.search) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            product.description.toLowerCase().includes(filters.search.toLowerCase())
        );
    }

    return filteredProducts;
}

function sortProducts(products, sortBy) {
    const sortedProducts = [...products];
    
    switch (sortBy) {
        case 'name':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        case 'price':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sortedProducts.sort((a, b) => b.price - a.price);
        default:
            return sortedProducts;
    }
} 