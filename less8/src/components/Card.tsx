import "./Card.css";
import { useState } from "react";
import Item from "../model/Item";

const Card = (item: Item): JSX.Element => {
    const [amount, setAmount] = useState(0);
    const true_cost: number = parseFloat((item.cost * (100 - (item.discount ?? 0)) / 100).toFixed(2));

    const handleIncrementAmount = (): void => {
        if (amount < (item.stock ?? 0)) {
            setAmount(amount + 1);
        }
    };
    const handleDencrementAmount = (): void => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    };

    return (
        <>
            <div className={((item.stock ?? 0) > 0) ? "card" : "card card-disabled"} id={"card-" + item.id}>
                {((item.discount ?? 0) > 0) && <div className="card-badge">{item.discount}%</div>}
                <img className="card-image" src={item.image} />
                <div className="card-inner">
                    <p className="card-title">{item.title}</p>
                    <span className="card-stock">Stock: {item.stock}</span>
                    <span className="card-stock">
                        {((item.discount ?? 0) > 0) && <s>${item.cost.toFixed(2)}</s>}
                        <span className="card-cost">${true_cost.toFixed(2)}</span>
                    </span>
                    <div className="card-buttons">
                        <button disabled={(item.stock ?? 0) <= 0} onClick={handleIncrementAmount}>+</button>
                        <input type="number" min="0" placeholder="0" readOnly={true} value={amount}></input>
                        <button disabled={(item.stock ?? 0) <= 0} onClick={handleDencrementAmount}>-</button>
                        <p className="card-total">${(true_cost * amount).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
  