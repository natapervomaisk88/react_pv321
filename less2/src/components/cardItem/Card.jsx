import Img from "./Img";

const Card = ({ imgSrc, altName, name, originalPrice, discountedPrice, link }) => {
	return (
		<>
			<div style={styles.cardCntr}>
				<Img imgSrc={imgSrc} altName={altName} />
				<a href={link} style={styles.prodName}>{name}</a>
				<div style={styles.priceContainer}>
					<span style={styles.originalPrice}>{originalPrice} ₴</span>
					<span style={styles.discountedPrice}>{discountedPrice} ₴</span>
				</div>
			</div>
		</>
	);
};

const styles = {
	cardCntr: {
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "16px",
		margin: "10px",
		maxWidth: "200px",
		backgroundColor: "#fff",
	},
	prodName: {
		display: "flex",
		justifyContent: "left",
		fontSize: "16px",
		color: "#333",
		//margin: "10px 0",
		textDecoration: "none",
		height: "100px"
	},
	priceContainer: {
		display: "flex",
		justifyContent: "left",
		alignItems: "baseline",
		flexDirection: "column",
	},
	originalPrice: {
		textDecoration: "line-through",
		color: "#888",
		marginRight: "8px",
	},
	discountedPrice: {
		fontSize: "22px",
		fontWeight: "bold",
		color: "#e60000",
	},
};

export default Card;