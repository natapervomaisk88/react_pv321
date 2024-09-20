import { useReducer, useEffect, FC, useState } from "react";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import ProductForm from "./components/ProductForm";
import "./components/CartModal.css";
import "./App.css";
import './components/ProductForm.css';

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

type Action =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'REMOVE_PRODUCT'; payload: number }
  | { type: 'UPDATE_PRODUCT'; payload: Product };

const productReducer = (state: Product[], action: Action): Product[] => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.payload);
    case 'UPDATE_PRODUCT':
      return state.map(product =>
        product.id === action.payload.id ? action.payload : product
      );
    default:
      return state;
  }
};

const App: FC = () => {
  const [products, dispatch] = useReducer(productReducer, []);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      dispatch({ type: 'SET_PRODUCTS', payload: data }); 
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  };

  const handleAddToCart = (title: string, quantity: number, totalPrice: number) => {
    const newItem = { title, quantity, totalPrice };
    setCart((prevCart) => [...prevCart, newItem]);
    console.log(`Товар "${title}" добавлен в корзину. Количество: ${quantity}. Общая цена: ${totalPrice} ₴`);
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleProductCreated = (newProduct: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct }); 
    fetchProducts();
    handleCloseForm();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleOpenForm} style={{ marginBottom: '20px', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Добавить товар
      </button>

      {isFormOpen && (
        <div style={{ marginBottom: '20px' }}>
          <ProductForm onProductCreated={handleProductCreated} onClose={handleCloseForm} />
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
      </div>

      {isCartOpen && <CartModal cartItems={cart} onClose={handleCloseCart} />}
    </div>
  );
};

export default App;
