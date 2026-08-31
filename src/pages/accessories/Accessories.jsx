import React, { useEffect, useState } from "react";
import Product from "../../components/SlideProduct/product";
import PageTransition from "../../components/PageTransition";
import Loading from "../../components/loading/Loading";
import "./accessories.css";

const accessoryCategories = [
  "mobile-accessories",
  "sports-accessories",
  "kitchen-accessories",
  "womens-jewellery",
  "sunglasses",
];

export default function Accessories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      accessoryCategories.map((category) =>
        fetch(`https://dummyjson.com/products/category/${category}`).then(
          (res) => res.json(),
        ),
      ),
    )
      .then((results) => {
        const allProducts = results.flatMap((data) => data.products || []);
        setProducts(allProducts);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading text="Loading accessories..." />;
  }

  return (
    <PageTransition>
      <div className="accessories_page">
        <div className="container">
          <div className="accessories_header">
            <h2>
              Accessories <span>({products.length})</span>
            </h2>
            <p>Find the perfect accessory for your lifestyle.</p>
            <div className="bottom_line"></div>
          </div>

          <div className="contener">
            {products.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
