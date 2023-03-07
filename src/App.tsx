import React from "react";
import "./App.css";
import NavigationBar from "./Common/navigationbar";
import { BrowserRouter} from "react-router-dom";
import {Router} from "./Router/router";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
       <Router></Router>
        </BrowserRouter>
    </>
  );
}

export default App;


// import { BrowserRouter } from "react-router-dom";
// return (
//  <BrowserRouter>
//   <NavigationBar />
//   <Router />
//  </BrowserRouter>
// <ProductList></ProductList> should be just <ProductList />



