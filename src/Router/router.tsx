import { Route, Routes } from "react-router-dom";
import { CartItems } from "../Layout/cartItems";
import { ProductList } from "../Layout/productList";
import React from "react";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/cart" element={<CartItems />} />
    </Routes>
  );
};
