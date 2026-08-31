import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/cartContext.jsx";
import FavoritesProvider from "./context/favoritesContext.jsx";
import "./index.css";
import App from "./App.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <CartProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
