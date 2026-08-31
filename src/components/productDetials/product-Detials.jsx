import {
  FaStar,
  FaStarHalfStroke,
  FaCartShopping,
  FaHeart,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./productDetails.css";
import toast from "react-hot-toast";

import { CartContext } from "../../context/cartContext";
import { FavoritesContext } from "../../context/favoritesContext";
import React, { useContext } from "react";

export default function ProductDetial({ productDetails }) {
  const { addToCart } = useContext(CartContext);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const inFavorites = isFavorite(productDetails.id);

  function handleAddCart() {
    addToCart(productDetails);
    const toastId = toast.success(
      <div className="stoast-wrapper">
        <img
          src={
            productDetails.images?.[0] ||
            productDetails.thumbnail ||
            "https://via.placeholder.com/150"
          }
          alt=""
          className="toast-img"
        />
        <div className="toast-content">
          <strong>{productDetails.title}</strong>
          added to cart
          <button className="btn">
            <Link to="/cart" onClick={() => toast.dismiss(toastId)}>
              view cart
            </Link>
          </button>
        </div>
      </div>,
      { duration: 3500 },
    );
  }

  return (
    <div className="detais_item">
      <h1>{productDetails.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
      </div>
      <p className="price">${productDetails.price}</p>
      <h5>
        Availavility:<span>{productDetails.availabilityStatus}</span>
      </h5>
      <h5>
        Brand:<span>{productDetails.brand}</span>
      </h5>
      <p className="desc">{productDetails.description}</p>
      <h5>
        <span>
          Hurry Up! Only {productDetails.stock} products left in stock{" "}
        </span>
      </h5>
      <div className="actions">
        <button onClick={handleAddCart} className="add_to_cart_btn">
          Add To Cart <FaCartShopping />
        </button>
        <button
          onClick={() => toggleFavorite(productDetails)}
          className="wishlist_btn"
          style={{
            color: inFavorites ? "#e53e3e" : "#333333",
            transition: "all 0.3s ease",
          }}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
}
