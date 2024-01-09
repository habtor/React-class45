import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import regularHeart from "../assets/heart-regular.svg";
import solidHeart from "../assets/heart-solid.svg";
import { useFavoriteItems } from "./favContext";

export default function Products({ selectedCategory }) {
  const { data, error, isLoading } = useFetch(
    `https://fakestoreapi.com/products${
      selectedCategory ? `/category/${selectedCategory}` : ""
    }`
  );

  const { favoriteIds, toggleFavorite } = useFavoriteItems();

  const handleToggleFavorite = (itemId) => {
    toggleFavorite(itemId);
  };

  const isFavorit = (itemId) => {
    return favoriteIds.includes(itemId);
  };

  if (isLoading) {
    <div>Loading..</div>;
  }

  if (error) {
    <div>Error...</div>;
  }

  return (
    <div>
      {data ? (
        <ul className="products">
          {data.map((item, index) => (
            <li key={index} className="item">
              <div className="item-container">
                <div className="heart">
                  <img
                    src={isFavorit(item.id) ? solidHeart : regularHeart}
                    onClick={() => handleToggleFavorite(item.id)}
                    alt="fav icon"
                  />
                </div>
                <img src={item.image} alt={item.title} />
                <Link to={`/products/${item.id}`}>
                  <p>{item.title}</p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}
