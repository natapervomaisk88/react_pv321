import { useState, useEffect, FC } from "react";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal"; 
import "./components/CartModal.css";
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

interface CartItem {
  title: string;
  quantity: number;
  totalPrice: number;
}

const App: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (title: string, quantity: number, totalPrice: number) => {
    const newItem = { title, quantity, totalPrice };
    setCart((prevCart) => [...prevCart, newItem]);
    console.log(`Товар "${title}" добавлен в корзину. Количество: ${quantity}. Общая цена: ${totalPrice} ₴`);
    setIsCartOpen(true); 
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

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
          onAddToCart={handleAddToCart}
        />
      ))}
      {isCartOpen && <CartModal cartItems={cart} onClose={handleCloseCart} />}
    </div>
  );
};

export default App;
