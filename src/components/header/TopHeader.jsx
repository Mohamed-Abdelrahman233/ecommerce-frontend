import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "./header.css";
import { useContext } from "react";
import SearchBox from "./SearchBox";
import { CartContext } from "../../context/cartContext";
import { FavoritesContext } from "../../context/favoritesContext";

export default function TopHeader() {
  const { certItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="top_header">
      <div className="container">
        {/* 1. اللوجو */}
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* 2. نموذج البحث فقط */}
        <SearchBox />
        {/* <-- قفلة الفورم هنا */}
        {/* 3. الأيقونات خارج نموذج البحث */}
        <div className="header_icon">
          <div className="icon">
            <Link to="/favorites">
              <FaRegHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <IoCartOutline />
              <span className="count">{certItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
