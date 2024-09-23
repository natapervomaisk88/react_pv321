import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Contacts from "./components/Contacts";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/products",
    element: <Products />,
    children: [{ path: ":id", element: <ProductDetail /> }],
  },
  { path: "/contacts", element: <Contacts /> },
]);
export default routes;
