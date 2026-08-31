import React from "react";
import "./loading.css";

export default function Loading({ text = "Loading products..." }) {
  return (
    <div className="loading_wrapper">
      <div className="loading_spinner"></div>
      <p>{text}</p>
    </div>
  );
}
