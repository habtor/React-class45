import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ItemsLists from "./components/lists";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ItemsLists />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
