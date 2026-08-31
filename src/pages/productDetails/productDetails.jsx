import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "../../components/productDetials/productImage";

import "../../components/productDetials/productDetails.css";
import SlideProduct from "../../components/SlideProduct/SlideProduct";
import ProductDetial from "../../components/productDetials/product-Detials";
import PageTransition from "../../components/PageTransition";

export default function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProduct, setRelatedProduct] = useState(null);
  const [loadingRelatedProduct, setLoadingRelatedProduct] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProductDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!productDetails) return;
    fetch(`https://dummyjson.com/products/category/${productDetails.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProduct(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProduct(false));
  }, [productDetails?.category]);

  if (loading) {
    return <p>loading.....</p>;
  }

  return (
    <>
      <PageTransition key={id}>
        <div className="Item_dateils">
          <div className="contenar">
            <ProductImage productDetails={productDetails} />
            <ProductDetial productDetails={productDetails} />
          </div>
        </div>
        {loadingRelatedProduct ? (
          <p> loading.....</p>
        ) : (
          <SlideProduct
            title={productDetails?.category}
            data={relatedProduct}
          />
        )}
      </PageTransition>
    </>
  );
}
