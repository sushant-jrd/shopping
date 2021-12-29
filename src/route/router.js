import React from "react";

import { Routes, Route } from "react-router-dom";

import ProductListing from "../components/views/product_listing";
import ProductDetails from "../components/views/product_details";
export default function Router(props) {
  console.log("Hereeee", props);
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route
        path="/product_detail/:product_id"
        element={<ProductDetails {...props} />}
      />
    </Routes>
  );
}
