import Navbar from "./Navbar";
import useFetch from "./useFetch";
import { useFavoriteItems } from "./favContext";
import "./style.css";
import regularHeart from "../assets/heart-regular.svg";
import solidHeart from "../assets/heart-solid.svg";

export default function FavouirtsItems() {
  const { favoriteIds, toggleFavorite } = useFavoriteItems();
  const {
    data: favItems,
    error,
    isLoading,
  } = useFetch(`https://fakestoreapi.com/products`);

  if (error) {
    return <div>Error...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleToggleFavorite = (itemId) => {
    toggleFavorite(itemId);
  };

  const isFavorit = (itemId) => {
    return favoriteIds.includes(itemId);
  };
  const favoriteProducts = favItems
    ? favItems.filter((item) => favoriteIds.includes(item.id))
    : [];

  return (
    <div>
      <Navbar />
      <div className="products">
        {favoriteProducts.length === 0 ? (
          <div>No Fav itmes</div>
        ) : (
          favoriteProducts.map((product) => (
            <div key={product.id}>
              <ul className="products">
                <li className="item">
                  <div className="item-container">
                    <div className="heart">
                      <img
                        src={isFavorit(product.id) ? solidHeart : regularHeart}
                        onClick={() => handleToggleFavorite(product.id)}
                        alt="fav icon"
                      />
                    </div>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                  </div>
                </li>
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
