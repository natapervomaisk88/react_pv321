import { useState, FC } from "react";
import "./ProductForm.css";

interface ProductFormProps {
  onClose: () => void;
  onProductCreated: () => void;
}

const ProductForm: FC<ProductFormProps> = ({ onClose, onProductCreated }) => {
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [inStock, setInStock] = useState<number>(0);
    const [image, setImage] = useState<string>('');
    const [discount, setDiscount] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
        title,
        price,
        inStock,
        image,
        discount,
    };

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      });

      if (response.ok) {
        onProductCreated();
      }
    } catch (error) {
      console.error("Ошибка добавления продукта:", error);
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Добавить новый товар</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Название:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Цена:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Количество на складе:</label>
            <input
              type="number"
              value={inStock}
              onChange={(e) => setInStock(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-group">
            <label>Изображение (URL):</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Скидка (%):</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              required
            />
          </div>
          <button type="submit" className="submit-button">Добавить товар</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
