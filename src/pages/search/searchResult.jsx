import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/SlideProduct/product";
import "./search.css";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("Search Error :", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="search_page_wrapper">
        <div className="category_products">
          {loading ? (
            <p className="loading">Loading search results...</p>
          ) : (
            <div className="container">
              <div className="top_slide">
                <h2>Results For : {query}</h2>
              </div>

              <div className="products">
                {results.map((item) => (
                  <Product item={item} key={item.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
