import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import useFetch from "./useFetch";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <Navbar />
      {data ? (
        <div className="item-container">
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          <img src={data.image} alt={data.titel} />
        </div>
      ) : (
        <div>error</div>
      )}
    </div>
  );
}
