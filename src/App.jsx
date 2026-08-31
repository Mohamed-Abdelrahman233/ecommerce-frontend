import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

// تصحيح مسارات الاستيراد المباشرة النسبية
import TopHeader from "./components/header/TopHeader";
import BtnHeader from "./components/header/BtnHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/productDetails";
import Cart from "./pages/cart/cart";
import BrowseCategory from "./pages/category/Browse-Category";
import SearchResult from "./pages/search/searchResult";
import About from "./pages/about/About";
import Accessories from "./pages/accessories/Accessories";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";

function App() {
  const location = useLocation(); // ضروري لعمل AnimatePresence

  return (
    <>
      <header>
        <TopHeader />
        <BtnHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<BrowseCategory />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/about" element={<About />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
