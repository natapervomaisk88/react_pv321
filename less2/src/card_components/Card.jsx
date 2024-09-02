

const Card = ({ isHeartFilled, filledHeart, emptyHeart, photo, action, name, exprice, price }) => {
    return (
        <div className="card">
            <img 
                src={isHeartFilled ? filledHeart : emptyHeart} 
                alt="Heart Icon" 
                onClick={action} 
                style={{ cursor: 'pointer', width: '50px', height: '50px' }}
            />
            <img 
                src={photo} 
                alt={name} 
                style={{ width: '100px', height: '100px' }} 
            />
            <p>{name}</p>
            <p style={{ textDecoration: 'line-through' }}>{exprice}</p>
            <p>{price}</p>
        </div>
    );
};

export default Card;


  