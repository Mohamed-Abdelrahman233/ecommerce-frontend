import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/slidehome/homeSlider.jsx";
import SlideProduct from "../../components/SlideProduct/SlideProduct.jsx";
import PageTransition from "../../components/PageTransition.jsx";
import Loading from "../../components/loading/Loading.jsx";
const categories = [
  "laptops",
  "smartphones",
  "sunglasses",
  "tablets",
  "watches",
];

export default function ProductsComponent() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );

        // دمج النتائج في أوبجيكت واحد
        const productsData = Object.assign({}, ...result);
        setProducts(productsData);
      } catch (error) {
        console.error("Error Fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct(); // 👈 استدعاء الدالة هنا مهم جداً عشان تشتغل!
  }, []);

  return (
    <PageTransition>
      <div>
        <HomeSlider />

        {loading ? (
          <Loading text="Loading products..." />
        ) : (
          categories.map((catgory) => (
            <SlideProduct
              key={catgory}
              data={products[catgory]}
              title={catgory}
            />
          ))
        )}
      </div>
    </PageTransition>
  );
}
