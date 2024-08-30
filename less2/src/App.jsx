import React from "react";
import ProductCard from "./components/ProductCard";  
import "./App.css";


// import "./App.css";
// import Button from "./components/Button";
// // const handleOK = () => {
// //   alert("OK");
// // };
// // const handleAdd = () => {
// //   alert("Add");
// // };


function App() {
  const products = [
    {
      image: "https://content1.rozetka.com.ua/goods/images/big/24709323.jpg",
      title: "Миша Logitech G102 Lightsync USB Black (910-005823)",
      oldPrice: 1300,
      newPrice: 999,
    },

    {
      image: "https://content1.rozetka.com.ua/goods/images/big/285504284.jpg",
      title: "SSD диск Kingston NV2 1TB M.2 2280 NVMe PCIe 4.0 x4 (SNV2S/1000G)",
      oldPrice: 3059,
      newPrice: 2449,
    },

    {
      image:"https://content.rozetka.com.ua/goods/images/big/256155567.jpg",
      title:"Корпус RZTK PcCooler Master RP200 Mesh RGB 3F",
      oldPrice:1999,
      newPrice:1799,
    },

    {
      image:"https://content.rozetka.com.ua/goods/images/big/327503063.jpg",
      title:"Процесор AMD Ryzen 7 7800X3D 4.2GHz/96MB (100-100000910WOF) sAM5 BOX",
      oldPrice:17999,
      newPrice:174,
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
        />
      ))}
    </div>
  );
}

export default App;