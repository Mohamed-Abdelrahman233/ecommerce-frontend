import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./header.css";
export default function SearchBox() {
  const [searchItem, setSearchItem] = useState("");
  const [suggesItem, setSuggesItem] = useState([]); // التعديل: مصفوفة فارغة بدلاً من كائن
  const navigate = useNavigate();

  // 1. نقل useEffect خارج handleSubmit لتكون على مستوى المكون الأعلى
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!searchItem.trim()) {
        setSuggesItem([]);
        return;
      }

      try {
        const query = encodeURIComponent(searchItem.trim());
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setSuggesItem(data.products ? data.products.slice(0, 5) : []);
      } catch (error) {
        console.error("Search Error :", error);
        setSuggesItem([]);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchItem]);

  // 2. دالة التسليم تقتصر فقط على التوجيه عند Submit
  function handleSubmit(e) {
    e.preventDefault();
    if (searchItem.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchItem.trim())}`);
      setSuggesItem([]); // إخفاء قائمة الاقتراحات عند الضغط على البحث
    }
  }

  return (
    <div className="SearchBox_contenar">
      <form onSubmit={handleSubmit} className="search_box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search For products"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {suggesItem.length > 0 && (
        <ul className="suggestions">
          {suggesItem.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                navigate(`/search?query=${encodeURIComponent(item.title)}`);
                setSuggesItem([]);
              }}
            >
              <img src={item.images[0]} />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
