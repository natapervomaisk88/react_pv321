import { Outlet, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { MouseEventHandler } from "react";

export default function Products() {
  const navigate = useNavigate();
  const handlerClick: MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = e.target as HTMLButtonElement;
    const id = target.dataset.id;
    navigate(`${id}`);
  };

  return (
    <div>
      <Outlet />
      {products.map((el) => (
        <p key={el.id}>
          {el.id} {el.title}
          <button data-id={el.id} onClick={handlerClick}>
            Show Details
          </button>
        </p>
      ))}
    </div>
  );
}
