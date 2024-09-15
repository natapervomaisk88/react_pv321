import { useState } from "react";
import './ProductCardComponentV2.css';

export const ProductCardComponentV2 = ({ product }) => {
    const [amount, setAmount] = useState(1);
    const basePrice = product.price;
    const totalPrice = basePrice * amount;

    const onIncreaseAmountButtonClick = () => {
        setAmount(amount + 1);
    };

    const onDecreaseAmountButtonClick = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    return (
        <div className="product-card">
            <img className="product-image" src={product.imagePath} alt={product.title} />
            <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-actions">
                    <div className="amount-controls">
                        <button onClick={onDecreaseAmountButtonClick}>-</button>
                        <span>{amount}</span>
                        <button onClick={onIncreaseAmountButtonClick}>+</button>
                    </div>
                    <p className="product-price">{totalPrice} €</p>
                </div>
            </div>
        </div>
    );
};
