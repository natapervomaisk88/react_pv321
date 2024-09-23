import { NavLink, Outlet } from "react-router-dom";
import { products } from "../data/products";

export default function Products() {
  return (
    <div>
      <Outlet />
      {products.map((el) => (
        <p key={el.id}>
          {el.id} {el.title}
          <NavLink to={`${el.id}`}>Details</NavLink>
        </p>
      ))}
    </div>
  );
}
