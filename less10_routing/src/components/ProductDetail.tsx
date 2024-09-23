import { useParams } from "react-router-dom";
import { products } from "../data/products";
export default function ProductDetail() {
  const { id_product } = useParams();
  const id = Number(id_product);
  const product = products.find((el) => el.id === id);
  return (
    <div>
      {product?.title} {product?.id} {product?.price} {product?.description}
    </div>
  );
}
