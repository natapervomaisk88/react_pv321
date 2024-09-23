import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import "./App.css";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Contacts from "./components/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path=":id_product" element={<ProductDetail />} />
        </Route>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
