const Card = ({ image, title, cost }) => {
    return (
        <>
            <div className="card">
                <img className="card-image" src={image} />
                <p className="card-title">{title}</p>
                <p className="card-cost">${cost}</p>
            </div>
        </>
    );
};
export default Card;
  