
import React from "react";
import "./App.css";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Products() {
  return (
    <>
      <h1 className="products">PRODUCTS</h1>
      <ImageSlider slides={SliderData} />
      <Footer />
    </>
  );
}

export default Products;