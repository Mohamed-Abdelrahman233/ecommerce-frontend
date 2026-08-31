import React, { useContext } from "react";
import {
  FaStar,
  FaStarHalfStroke,
  FaCartShopping,
  FaHeart,
} from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import "./slideproduct.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { FavoritesContext } from "../../context/favoritesContext";
import toast from "react-hot-toast";

export default function Product({ item }) {
  const { certItems, addToCart } = useContext(CartContext);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const isInCart = certItems.some((i) => i.id === item.id);
  const inFavorites = isFavorite(item.id);

  if (!item || !item.title) {
    return null;
  }

  function handleAddToCart() {
    addToCart(item);

    const toastId = toast.success(
      <div className="stoast-wrapper">
        <img
          src={item.images?.[0] || item.thumbnail || "https://via.placeholder.com/150"}
          alt=""
          className="toast-img"
        />

        <div className="toast-content">
          <strong>{item.title}</strong>
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
    <div className="product_card">
      <Link to={`/products/${item.id}`}>
        <div className="img_box">
          <img
            src={
              item.images?.[0] ||
              item.thumbnail ||
              "https://via.placeholder.com/150"
            }
            alt={item.title}
          />
        </div>
        <div className="product_info">
          <h4>{item.title}</h4>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
          </div>
          <h3>$ {item.price}</h3>
        </div>
      </Link>
      <div className="icon_product">
        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: isInCart ? "#007bff" : "", // خلفية زرقاء لو في السلة
            color: isInCart ? "#ffffff" : "black", // لون الأيقونة أبيض لو في السلة وأزرق لو مش فيها
            borderColor: "#007bff", // الحواف تفضل زرقاء ثابتة
            transition: "all 0.3s ease", // انيميشن ناعم للون
          }}
        >
          <FaCartShopping />
        </button>
        <button
          onClick={() => toggleFavorite(item)}
          style={{
            color: inFavorites ? "#e53e3e" : "#333333",
            transition: "all 0.3s ease",
          }}
        >
          <FaHeart />
        </button>
        <button>
          <FaShare />
        </button>
      </div>
    </div>
  );
}
