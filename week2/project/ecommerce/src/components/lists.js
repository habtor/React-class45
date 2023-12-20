import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./lists.css";

const ItemsLists = () => {
  const [categories, setCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories/`
      );
      const result = await response.json();
      setCategories(result);
      setCategoryLoading(false);
    } catch (err) {
      setCategoryError("Error fetching Categories.");
      setCategoryLoading(false);
    }
  };
  const fetchProducts = async (category) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${category}`
      );
      const result = await response.json();
      setProduct(result);
      setLoading(false);
    } catch (err) {
      setError("Error fetching products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory !== "") {
      fetchProducts(`category/${selectedCategory}`);
    } else {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="categoryDiv">
        <h1>Products</h1>
        <ul>
          {categoryLoading ? (
            <div>Loading...</div>
          ) : categoryError ? (
            <div>{categoryError}</div>
          ) : (
            categories.map((category, index) => (
              <li key={index} onClick={() => handleClick(category)}>
                {category}
              </li>
            ))
          )}
        </ul>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products.map((item, index) => (
            <li key={index} className="item">
              <div className="item-container">
                <img src={item.image} alt={item.title} />
                <Link to={`/products/${item.id}`}>
                  <p>{item.title}</p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemsLists;
