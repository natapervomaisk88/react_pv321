import React, { useState } from "react";

function ProductCard({ image, title, price, initialStock }) { 
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [stock, setStock] = useState(initialStock > 0 ? initialStock : 1); 

  const handleIncrease = () => {
    if (quantity < stock) { 
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * price);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * price);
    }
  };

  const styles = {
    card: {
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      overflow: "hidden",
      width: "200px",
      margin: "16px",
      backgroundColor: stock > 0 ? "#fff" : "#f8d7da",
      transition: "box-shadow 0.3s ease",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      opacity: stock > 0 ? 1 : 0.6,
    },
    imageContainer: {
      width: "100%",
      padding: "8px",
      filter: stock > 0 ? "none" : "grayscale(100%)",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      display: "block",
      margin: "0 auto",
    },
    info: {
      padding: "12px",
      textAlign: "center",
      width: "100%",
    },
    title: {
      fontSize: "16px",
      margin: "8px 0",
      color: stock > 0 ? "#333" : "#721c24",
      fontWeight: "normal",
    },
    price: {
      fontSize: "18px",
      fontWeight: "bold",
      color: stock > 0 ? "#d32f2f" : "#721c24",
      marginBottom: "12px",
    },
    quantity: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "12px",
    },
    button: {
      backgroundColor: "#ff5722",
      color: "#fff",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background-color 0.3s ease",
      margin: "0 5px",
    },
    totalPrice: {
      color: "#333",
      fontSize: "16px",
      fontWeight: "bold",
    },
    stockStatus: {
      fontSize: "14px",
      color: stock > 0 ? "#28a745" : "#dc3545",
      marginBottom: "8px",
    },
  };

  return (
    <div className="product-card" style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <span style={styles.price}>{price} ₴</span>
        <p style={styles.stockStatus}>
          {stock > 0 ? `На складі: ${stock}` : "Немає в наявності"}
        </p>
        <div style={styles.quantity}>
          <button style={styles.button} onClick={handleDecrease} disabled={quantity === 0}>
            -
          </button>
          <span>{quantity}</span>
          <button style={styles.button} onClick={handleIncrease} disabled={stock === 0}>
            +
          </button>
        </div>
        <p style={styles.totalPrice}>Загальна вартість: {totalPrice} ₴</p>
      </div>
    </div>
  );
}

export default ProductCard;
