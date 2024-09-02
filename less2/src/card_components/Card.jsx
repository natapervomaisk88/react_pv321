
import "./Card.css";
const Card = ({ isHeartFilled, filledHeart, emptyHeart, photo, action, name, exprice, price }) => {
    return (
        <div className="card">
            <img 
             class = "photo-heart"
                src={isHeartFilled ? filledHeart : emptyHeart} 
                alt="Heart Icon" 
                onClick={action} 
            />
            <img 
            className = "photo-product"
                src={photo} 
                alt={name} 
            />
            <p className = "name">{name}</p>
            <p className = "exprice" style={{ textDecoration: 'line-through' }}>{exprice}</p>
            <p className = "price">{price}</p>
        </div>
    );
};

export default Card;


  