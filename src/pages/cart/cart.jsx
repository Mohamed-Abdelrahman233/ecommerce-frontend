import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { MdDelete } from "react-icons/md";
import PageTransition from "../../components/PageTransition";
import "./cart.css";

export default function Cart() {
  const { certItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  let totalPrice = 0;
  certItems.forEach((item) => {
    totalPrice += item.price * (item.quantity || 1);
  });

  return (
    <PageTransition>
      <div className="checkout">
        <div className="ordersummary">
          <h1>Order Summary</h1>

          {certItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {/* 1. قائمة المنتجات (مع السكرول) */}
              <div className="items_list">
                {certItems.map((item) => (
                  <div className="item_cart" key={item.id}>
                    <img src={item.images?.[0]} alt={item.title} />

                    <div className="item_info">
                      <h3>{item.title}</h3>
                      <p>${item.price}</p>
                      <div className="btn">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="delete_item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
              </div>

              <div className="total">
                <h3>Total</h3>
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>
              <button className="place_order_btn">Place order</button>
            </>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
