import React, { useContext } from "react";
import { FavoritesContext } from "../../context/favoritesContext";
import Product from "../../components/SlideProduct/product";
import PageTransition from "../../components/PageTransition";
import "./favorites.css";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <PageTransition>
      <div className="favorites_page">
        <div className="container">
          <div className="favorites_header">
            <h2>
              My Favorites <span>({favorites.length})</span>
            </h2>
            <p>Products you love, all in one place.</p>
            <div className="bottom_line"></div>
          </div>

          {favorites.length === 0 ? (
            <p className="empty_favorites">No favorite products yet.</p>
          ) : (
            <div className="contener">
              {favorites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
