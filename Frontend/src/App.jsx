import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";

export default function App() {
  return( <div className="App">
    <Header/> {/* Header is special, 
    it will remain same, all time in website and only changes is home page or other things */}
    <div className="container container-fluid">
      <Home />
      <Menu/>
      <Cart/>
    </div>
    <Footer/>
    
  </div>
  );
}
