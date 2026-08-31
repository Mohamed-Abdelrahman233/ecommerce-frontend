# Ecommerce

A modern frontend ecommerce web application built with **React**, **Vite**, and **React Router**. It fetches product data from the [DummyJSON](https://dummyjson.com/) API and includes features like product browsing, search, categories, product details, cart management, and additional pages (About, Accessories, Blog, Contact, Login).

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Framer Motion
- Swiper
- React Icons
- React Hot Toast

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Lint the codebase
npm run lint
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint on the source files |

## Project Structure

```
Ecommerce/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── context/         # React context (Cart)
│   ├── img/             # Image assets
│   ├── pages/           # Page components
│   └── ...
├── .gitignore           # Files ignored by Git
├── package.json
├── README.md
└── vite.config.js
```

## Features

- Product listing by category
- Product search and suggestions
- Product details with related products
- Shopping cart with localStorage persistence
- Responsive header with navigation
- About, Accessories, Blog, Contact and Login pages
- Page transition animations

## Notes

- This is a **frontend-only** project. There is no backend server.
- Product data is provided by the DummyJSON public API.
