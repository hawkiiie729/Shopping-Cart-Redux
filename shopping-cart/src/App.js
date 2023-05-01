import React from "react";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import SingleProductDetail from "./Pages/Products/ProductDetails/SingleProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<SingleProductDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div
              className="text-center text-danger text-lg"
              style={{ fontSize: 50 }}
            >
              Page not found!!
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
