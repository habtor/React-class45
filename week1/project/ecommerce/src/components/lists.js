import React, { useState } from "react";
import allCategories from "../fake-data/all-categories";
import allProducts from "../fake-data/all-products";
import "./lists.css";

const ItemsLists = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  let filteredCategory = "";

  if (selectedCategory === "") {
    filteredCategory = allProducts;
  } else if (selectedCategory === "FAKE: electronics") {
    filteredCategory = allProducts.filter(
      (item) => item.category === "electronics"
    );
  } else if (selectedCategory === "FAKE: women's clothing") {
    filteredCategory = allProducts.filter(
      (item) => item.category === "women's clothing"
    );
  } else if (selectedCategory === "FAKE: men's clothing") {
    filteredCategory = allProducts.filter(
      (item) => item.category === "men's clothing"
    );
  } else {
    filteredCategory = allProducts.filter(
      (item) => item.category === "jewelery"
    );
  }

  const handelClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="categoryDiv">
        <h1>Products</h1>
        <ul>
          {allCategories.map((category, index) => (
            <li key={index} onClick={() => handelClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>

      <ul className="products">
        {filteredCategory.map((item, index) => (
          <li key={index} className="item">
            <div className="item-container">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsLists;
