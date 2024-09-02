import './Card.css';

const Card = ({ image, title, price, oldPrice, description, onAddToCart }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <div className="card-price-container">
            {oldPrice && (
              <span className="card-old-price">${oldPrice}</span> 
            )}
            <span className="card-price">${price}</span>
          </div>
          <button className="card-button" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;