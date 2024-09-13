import "./Card.css";
import { useState } from "react";

const Card = ({ id, image, title, cost, stock, discount }) => {
    const [amount, setAmount] = useState(0);
    cost = parseFloat(cost.toFixed(2));
    const true_cost = parseFloat((cost * (100 - discount) / 100).toFixed(2));

    const handleIncrementAmount = () => {
        if (amount < stock) {
            setAmount(amount + 1);
        }
    };
    const handleDencrementAmount = () => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    };

    return (
        <>
            <div className={(stock > 0) ? "card" : "card card-disabled"} id={"card-" + id}>
                {(discount > 0) && <div className="card-badge">{discount}%</div>}
                <img className="card-image" src={image} />
                <div className="card-inner">
                    <p className="card-title">{title}</p>
                    <span className="card-stock">Stock: {stock}</span>
                    <span className="card-stock">
                        {(discount > 0) && <s>${cost.toFixed(2)}</s>}
                        <span className="card-cost">${true_cost.toFixed(2)}</span>
                    </span>
                    <div className="card-buttons">
                        <button disabled={stock <= 0} onClick={handleIncrementAmount}>+</button>
                        <input type="number" min="0" placeholder="0" readOnly={true} value={amount}></input>
                        <button disabled={stock <= 0} onClick={handleDencrementAmount}>-</button>
                        <p className="card-total">${(true_cost * amount).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;
  