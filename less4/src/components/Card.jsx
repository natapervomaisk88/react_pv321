import "./Card.css";
import { useState } from "react";

const Card = ({ id, image, title, cost }) => {
    const [amount, setAmount] = useState(0);

    const handleIncrementAmount = () => {
        setAmount(amount + 1);
    };
    const handleDencrementAmount = () => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    };

    return (
        <>
            <div className="card" id={"card-" + id}>
                <img className="card-image" src={image} />
                <div className="card-inner">
                    <p className="card-title">{title}</p>
                    <p className="card-cost">${cost.toFixed(2)}</p>
                    <div className="card-buttons">
                        <button onClick={handleIncrementAmount}>+</button>
                        <input type="number" min="0" placeholder="0" readOnly={true} value={amount}></input>
                        <button onClick={handleDencrementAmount}>-</button>
                        <p className="card-total">${(cost * amount).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;
  