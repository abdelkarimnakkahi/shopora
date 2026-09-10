# E-Commerce Web Application

A responsive e-commerce web application built with React and the DummyJSON REST API. The project focuses on practical React fundamentals, client-side routing, API integration, reusable components, and shopping cart state management.

## Features

- Product listing fetched from a REST API
- Product details pages with React Router
- Product image gallery with selectable thumbnails
- Product search using React Context API
- Product category filtering
- Shopping cart functionality:
  - Add products to cart
  - Prevent duplicate cart items
  - Increase/decrease quantities
  - Respect product stock limits
  - Remove individual items
  - Clear the entire cart
- Dynamic cart subtotal and total item count
- Empty cart state
- Cart persistence with LocalStorage
- Loading states while fetching products
- Responsive UI

## Tech Stack

- **React**
- **JavaScript (ES6+)**
- **React Router**
- **REST API**
- **React Context API**
- **LocalStorage**
- **Vite**
- **CSS**

## API

Product data is provided by the [DummyJSON](https://dummyjson.com/) API.

The application uses endpoints for:

- All products
- Product details
- Product categories
- Products by category
- Product search

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Project Structure

```text
src/
├── components/
│   ├── About.jsx
│   ├── Cart.jsx
│   ├── Categories.jsx
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   ├── Product.jsx
│   ├── ProductDetails.jsx
│   ├── ProductsList.jsx
│   ├── Search.jsx
│   └── SearchContext.jsx
├── assets/
├── App.jsx
└── main.jsx
```

## How It Works

### Products

Products are fetched from the DummyJSON API and displayed as reusable product cards. Each product links to its own details page.

### Search

The search input uses React Context API to share the search query between the search component and the product listing without passing the state through multiple component levels.

### Categories

Users can filter products by category. Selecting a category fetches the corresponding products from the API.

### Product Details

Each product has a dedicated route containing:

- Product images
- Product description
- Price
- Rating
- Discount
- Brand
- Tags
- Stock information
- Add to Cart functionality

### Shopping Cart

The cart keeps track of selected products and their quantities. Users can increase or decrease quantities while respecting each product's available stock.

The cart calculates:

- Total number of items
- Subtotal price

### LocalStorage

Cart data is stored in LocalStorage so that the cart is restored after refreshing the page.

## Routes

| Route                 | Description     |
| --------------------- | --------------- |
| `/`                   | Product listing |
| `/about`              | About page      |
| `/product/:productId` | Product details |
| `/cart`               | Shopping cart   |

## Learning Goals

This project was built to practice and demonstrate:

- React components and props
- `useState`
- `useEffect`
- React Context API
- React Router
- Fetch API
- Async JavaScript
- Array methods such as `map`, `filter`, `find`, and `reduce`
- State updates without mutating existing state
- LocalStorage persistence
- Conditional rendering
- Responsive web development

## Future Improvements

Planned improvements include:

- Pagination
- Improved search UX with debouncing or search submission
- Wishlist/favorites
- Improved error and empty states
- Cart item count in the navbar
- UI and accessibility refinements

## Author

Built as a frontend development portfolio project to practice React and modern JavaScript development.
