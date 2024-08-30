import React from 'react';

function ProductCard({ image, title, oldPrice, newPrice }) {
  const styles = {
    card: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '200px',
      margin: '16px',
      backgroundColor: '#fff',
      transition: 'box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    imageContainer: {
      width: '100%',
      padding: '8px',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    },
    info: {
      padding: '12px',
      textAlign: 'center',
      width: '100%',
    },
    title: {
      fontSize: '16px',
      margin: '8px 0',
      color: '#333',
      fontWeight: 'normal',
    },
    prices: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '12px',
    },
    oldPrice: {
      textDecoration: 'line-through',
      color: '#a0a0a0',
      marginRight: '8px',
    },
    newPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#d32f2f',
    },
    buyButton: {
      backgroundColor: '#ff5722',
      color: '#fff',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
    },
    buyButtonHover: {
      backgroundColor: '#e64a19',
    },
  };

  return (
    <div
      className="product-card"
      style={styles.card}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <div style={styles.prices}>
          {oldPrice && <span style={styles.oldPrice}>{oldPrice} ₴</span>}
          <span style={styles.newPrice}>{newPrice} ₴</span>
        </div>
        <button
          style={styles.buyButton}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buyButtonHover.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.buyButton.backgroundColor}
        >
          Купити
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
