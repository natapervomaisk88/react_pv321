import "./Card.css";
import React, { useState } from 'react';

const Card = ({ isHeartFilled, filledHeart, emptyHeart, photo, action, name, exprice, price }) => {
    const [counter, setCounter] = useState(1);

    const handlerUp = () => {
        setCounter(prev => prev + 1);
    };

    const handlerDown = () => {
        setCounter(prev => (prev > 1 ? prev - 1 : 1)); 
    };

    const numericPrice = parseFloat(price.replace('$', ''));
    const totalPrice = numericPrice * counter

    return (
        <div className="card">
            <img 
                className="photo-heart"
                src={isHeartFilled ? filledHeart : emptyHeart} 
                alt="Heart Icon" 
                onClick={action} 
            />
            <img 
                className="photo-product"
                src={photo} 
                alt={name} 
            />
            <p className="name">{name}</p>
            <div className="prices">
                <p className="exprice" style={{ textDecoration: 'line-through' }}>{exprice}</p>
                <p className="price">{`$${totalPrice}`}</p>
            </div>
            <div className="counter">
                <button className="minusBtn" onClick={handlerDown}>-</button>
                <input 
                    type="number" 
                    className="inputCount" 
                    value={counter} 
                    readOnly
                />
                <button className="plusBtn" onClick={handlerUp}>+</button>
            </div>
        </div>
    );
};

export default Card;



  