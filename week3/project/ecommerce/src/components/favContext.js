import { createContext, useState, useContext } from "react";

const FavoriteItemsContext = createContext();

export const useFavoriteItems = () => useContext(FavoriteItemsContext);

export const FavouirtsItemsProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (itemId) => {
    if (favoriteIds.includes(itemId)) {
      setFavoriteIds(favoriteIds.filter((id) => id !== itemId));
    } else {
      setFavoriteIds([...favoriteIds, itemId]);
    }
  };

  return (
    <FavoriteItemsContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoriteItemsContext.Provider>
  );
};
