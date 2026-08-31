import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import "./header.css";
const Navlinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json()) // أضفنا الأقواس () هنا
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="btm_header">
      <div className="container">
        <div className="category_btn">
          <IoMenu />
          <p>Browse category</p>
          <IoMdArrowDropdown />
        </div>
        <div className="category_nev_list">
          {/* 2. استخدمنا return و أضفنا خاصية key */}
          {categorys.map((category, index) => (
            <Link
              key={category.slug || index}
              to={`/category/${category.slug || category}`}
            >
              {category.name || category}
            </Link>
          ))}
        </div>
        <div className="Nav_list">
          {Navlinks.map((item, index) => {
            return (
              <Link key={index} to={item.link}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="sign_icon">
          <Link to="/login">
            <FaSignInAlt />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
