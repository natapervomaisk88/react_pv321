import { useState, useEffect, FC } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  inStock: number;
  isNew?: boolean;
  discount?: number;
}

const App: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          inStock={product.inStock}
          isNew={product.isNew ?? false}
          discount={product.discount ?? 0}
        />
      ))}
    </div>
  );
};

export default App;
