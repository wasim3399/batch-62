# ShopHub - E-commerce Website

A modern, responsive e-commerce website built with HTML, CSS, and JavaScript. Inspired by popular e-commerce platforms like Daraz.pk.

## 🚀 Features

### Core Features
- **Home Page**: Hero section, featured categories, and featured products
- **Categories Page**: Browse all product categories with product counts
- **Products Page**: Advanced filtering, searching, and sorting capabilities
- **Shopping Cart**: Add/remove items, quantity management, and order summary
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Product Management
- **48 Sample Products** across 6 categories (Electronics, Fashion, Home & Living, Books, Sports & Fitness, Beauty & Health)
- **Advanced Filtering**: By category, price range, and search terms
- **Sorting Options**: Name (A-Z/Z-A), Price (Low-High/High-Low)
- **Grid/List View**: Toggle between different product display modes

### Shopping Cart Features
- **Add to Cart**: One-click product addition with notifications
- **Quantity Management**: Increase/decrease quantities with real-time updates
- **Cart Persistence**: Cart data saved in localStorage
- **Order Summary**: Subtotal, shipping, tax, and total calculation
- **Empty Cart State**: User-friendly empty cart message

### User Experience
- **Modern UI**: Clean, professional design with smooth animations
- **Navigation**: Sticky navigation with cart count indicator
- **Notifications**: Toast notifications for cart actions
- **Loading States**: Smooth transitions and feedback
- **Mobile-First**: Optimized for all screen sizes

## 📁 Project Structure

```
├── index.html              # Home page
├── categories.html         # Categories page
├── products.html          # Products page with filters
├── cart.html              # Shopping cart page
├── css/
│   ├── style.css          # Global styles and components
│   ├── home.css           # Home page specific styles
│   ├── categories.css     # Categories page styles
│   ├── products.css       # Products page styles
│   └── cart.css           # Cart page styles
├── js/
│   ├── data.js            # Sample data and helper functions
│   ├── cart.js            # Cart functionality
│   ├── home.js            # Home page functionality
│   ├── categories.js      # Categories page functionality
│   ├── products.js        # Products page functionality
│   └── cart-page.js       # Cart page functionality
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **Font Awesome**: Icons for UI elements
- **LocalStorage**: Cart data persistence

## 🚀 How to Run

1. **Download/Clone** the project files to your local machine
2. **Open** `index.html` in your web browser
3. **Start Shopping!** 🛒

No server setup required - this is a pure frontend application that runs directly in the browser.

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #007bff (buttons, links, highlights)
- **Success Green**: #28a745 (add to cart, positive actions)
- **Danger Red**: #dc3545 (remove, clear actions)
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Responsive**: Scales appropriately across devices

### Animations
- **Hover Effects**: Smooth transitions on interactive elements
- **Cart Notifications**: Slide-in notifications for user feedback
- **Product Cards**: Lift effect on hover
- **Category Cards**: Scale and border effects

## 📊 Sample Data

The website includes 48 sample products across 6 categories:

### Electronics (8 products)
- iPhone 15 Pro, Samsung Galaxy S24, MacBook Air M2, etc.

### Fashion (8 products)
- Nike Air Max 270, Levi's 501 Jeans, Ray-Ban Aviator, etc.

### Home & Living (8 products)
- IKEA Malm Bed, Samsung QLED TV, Dyson V15 Vacuum, etc.

### Books (8 products)
- The Alchemist, Atomic Habits, Rich Dad Poor Dad, etc.

### Sports & Fitness (8 products)
- Bowflex Dumbbells, Nike Yoga Mat, Peloton Bike, etc.

### Beauty & Health (8 products)
- Dyson Airwrap, La Mer Moisturizer, Oral-B Toothbrush, etc.

## 🔧 Customization

### Adding Products
Edit `js/data.js` to add new products:
```javascript
{
    id: 49,
    name: 'New Product',
    price: 5000,
    category: 'electronics',
    image: '📱',
    description: 'Product description'
}
```

### Adding Categories
Add new categories in `js/data.js`:
```javascript
{
    id: 'new-category',
    name: 'New Category',
    icon: 'fas fa-icon',
    description: 'Category description',
    productCount: 10
}
```

### Styling Changes
- Modify `css/style.css` for global changes
- Edit specific page CSS files for page-specific styling
- Update color variables for consistent theming

## 🚀 Future Enhancements

Potential features for future versions:
- User authentication and accounts
- Product reviews and ratings
- Wishlist functionality
- Advanced search with filters
- Payment gateway integration
- Order tracking
- Product recommendations
- Admin panel for product management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📞 Support

For questions or support, please open an issue in the project repository.

---

**Happy Shopping! 🛍️** 