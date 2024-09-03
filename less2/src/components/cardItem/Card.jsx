import { useState } from "react";
import Img from "./Img";

const Card = ({ imgSrc, altName, name, originalPrice, discountedPrice, link }) => {
	const [quantity, setQuantity] = useState(1);

	const handleUp = () => {
		setQuantity(prev => prev + 1);
	};

	const handleDown = () => {
		setQuantity(prev => (prev > 1 ? prev - 1 : 1));
	};

	const totalOriginal = originalPrice * quantity;
	const totalDiscounted = discountedPrice * quantity;

	return (
		<>
			<div style={styles.cardCntr}>
				<div style={styles.mainBody}>
					<Img imgSrc={imgSrc} altName={altName} />
					<a href={link} style={styles.prodName}>{name}</a>
				</div>

				<div style={styles.cardFooter}>
					<div style={styles.quantity}>
						<button style={styles.minusBtn} onClick={handleDown}>-</button>
						<input type="number" style={styles.inputQuantity} value={quantity} readOnly />
						<button style={styles.plusBtn} onClick={handleUp}>+</button>
					</div>

					<div style={styles.priceContainer}>
						<span style={styles.originalPrice}>{totalOriginal} ₴</span>
						<span style={styles.discountedPrice}>{totalDiscounted} ₴</span>
					</div>
				</div>
			</div>
		</>
	);
};

const styles = {
	cardCntr: {
		display: "flex",
		flexDirection: "column",
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "16px",
		margin: "10px",
		width: "60%",
		backgroundColor: "#fff",
	},
	prodName: {
		fontSize: "16px",
		color: "#333",
		textDecoration: "none",
		margin: "10px 16px",
	},
	cardFooter: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: "16px",
		marginLeft: "40%"
	},
	quantity: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	minusBtn: {
		padding: "4px 8px",
	},
	plusBtn: {
		padding: "4px 8px",
	},
	priceContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
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
	inputQuantity: {
		width: "40px",
		textAlign: "center",
		margin: "0 10px",
	},
	mainBody: {
		display: "flex",
		flexDirection: "row",
	},
};

export default Card;