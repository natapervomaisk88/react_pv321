import { FC } from "react";
import "./CartModal.css"; 

interface CartItem {
  title: string;
  quantity: number;
  totalPrice: number;
}

interface CartModalProps {
  cartItems: CartItem[];
  onClose: () => void; 
}

const CartModal: FC<CartModalProps> = ({ cartItems, onClose }) => {
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <button className="cart-close-button" onClick={onClose}>×</button>
        <h2>Ваша корзина</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="item-title">{item.title}</span>
              <span className="item-quantity">Количество: {item.quantity}</span>
              <span className="item-price">Цена: {item.totalPrice} ₴</span>
            </div>
          ))}
        </div>
        <div className="cart-total">
          Итого: {cartItems.reduce((acc, item) => acc + item.totalPrice, 0)} ₴
        </div>
        <button className="cart-checkout-button" onClick={() => console.log('Переход к оформлению заказа')}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default CartModal;
