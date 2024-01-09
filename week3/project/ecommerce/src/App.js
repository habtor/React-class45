import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";
import FavouirtsItems from "./components/Favourites";
import { FavouirtsItemsProvider } from "./components/favContext";

function App() {
  return (
    <Router>
      <div>
        <FavouirtsItemsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/fav/" element={<FavouirtsItems />} />
          </Routes>
        </FavouirtsItemsProvider>
      </div>
    </Router>
  );
}

export default App;
