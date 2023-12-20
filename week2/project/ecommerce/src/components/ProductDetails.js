import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  const fetchProduct = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();
      setProduct(result);
    } catch (err) {
      console.log("API error");
    }
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <div>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <img src={product.image} alt={product.titel} />
    </div>
  );
}
