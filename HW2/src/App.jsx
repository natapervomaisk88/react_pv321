import React from "react";
import ProductCard from "./components/ProductCard";  
import "./App.css";

function App() {
  const products = [
    {
      image: "https://content1.rozetka.com.ua/goods/images/big/24709323.jpg",
      title: "Миша Logitech G102 Lightsync USB Black (910-005823)",
      price: 1300,
    },
    {
      image: "https://content1.rozetka.com.ua/goods/images/big/285504284.jpg",
      title: "SSD диск Kingston NV2 1TB M.2 2280 NVMe PCIe 4.0 x4 (SNV2S/1000G)",
      price: 3059,
    },
    {
      image: "https://content.rozetka.com.ua/goods/images/big/256155567.jpg",
      title: "Корпус RZTK PcCooler Master RP200 Mesh RGB 3F",
      price: 1999,
    },
    {
      image: "https://content.rozetka.com.ua/goods/images/big/327503063.jpg",
      title: "Процесор AMD Ryzen 7 7800X3D 4.2GHz/96MB (100-100000910WOF) sAM5 BOX",
      price: 17999,
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {products.map((product, index) => ( 
        <ProductCard
          key={index} 
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
