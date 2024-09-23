import { NavLink } from "react-router-dom";

export default function NavBar() {
  const menu_items = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/products", title: "Products" },
    { path: "/contacts", title: "Contacts" },
  ];
  return (
    <div>
      <ul>
        {menu_items.map((el, index) => (
          <li key={index}>
            <NavLink to={el.path}>{el.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
