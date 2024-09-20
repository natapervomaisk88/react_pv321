import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './ProductForm.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  inStock: number;
  isNew: boolean;
}

interface ProductFormProps {
  onProductCreated: (newProduct: Product) => void;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onProductCreated, onClose }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [inStock, setInStock] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newProduct: Product = {
      id: Date.now(),
      title,
      price,
      image,
      inStock,
      isNew: true,
    };

    try {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      onProductCreated(newProduct);
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
    }
  };

  const modalContent = (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Добавить продукт</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Название</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Цена</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">URL изображения</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inStock">Количество на складе</label>
            <input
              type="number"
              id="inStock"
              value={inStock}
              onChange={(e) => setInStock(Number(e.target.value))}
            />
          </div>
          <button type="submit" className="submit-button">Добавить продукт</button>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('portal') as HTMLElement);
};

export default ProductForm;
