import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="fav-links">
      <h1>Products</h1>
      <div className="categoryDiv">
        <ul>
          <Link to={`/`}>
            <li>Products</li>
          </Link>
          <Link to={`/fav`}>
            <li>Favourits</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
