
export const ProductCardComponent = ({ product }) => {
    const discountedPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price;

    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px', textAlign: 'center' }}>
            <img src={product.imagePath} alt={product.title} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.title}</h3>
            {product.discount ? (
                <div>
                    <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>${product.price}</span>
                    <span>${discountedPrice.toFixed(2)}</span>
                </div>
            ) : (
                <div>${product.price}</div>
            )}
        </div>
    );
}