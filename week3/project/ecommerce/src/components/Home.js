import "./style.css";
import useFetch from "./useFetch";
import { useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";

export default function Catigories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data, error, isLoading } = useFetch(
    `https://fakestoreapi.com/products/categories`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  const handleClick = (cate) => {
    setSelectedCategory(cate);
  };

  return (
    <div>
      <Navbar />
      <div className="categoryDiv">
        <ul>
          {data ? (
            data.map((category, index) => (
              <li key={index} onClick={() => handleClick(category)}>
                {category}
              </li>
            ))
          ) : (
            <div>error</div>
          )}
        </ul>
      </div>
      <div>
        <Products selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
