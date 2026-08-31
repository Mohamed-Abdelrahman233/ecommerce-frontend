import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/SlideProduct/product";
import "./BrowseCategory.css";

export default function BrowseCategory() {
  const { category } = useParams();
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProduct(data.products || []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return <p className="loading">Loading products...</p>;
  }

  return (
    <div className="category_products">
      {/* 1. الهيدر منفصل تماماً في الأعلى */}
      <div className="category_header">
        <h2>
          {category.replace("-", " ")} : <span>{categoryProduct.length}</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          voluptates?
        </p>
        <div className="bottom_line"></div>
      </div>

      {/* 2. شبكة المنتجات تحتوي على الكروت فقط */}
      <div className="contener">
        {categoryProduct?.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
