import React from "react";
import "./App.css";
import { ProductList } from "./Layout/productList";
import NavigationBar from "./Common/navigationbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartItems } from "./Layout/cartItems";

function App() {
  return (
    <>
      <Router>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<ProductList></ProductList>} >
          </Route>
          <Route path="/cart" element={<CartItems />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
