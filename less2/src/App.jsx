import React from "react";
import ProductCard from "./components/ProductCard";  // Перевірте правильність шляху
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
    const ProductCard=[
      {
        image:'',
        title:'Миша Logitech G102 Lightsync USB Black (910-005823)',
        oldPrice:1300,
        newPrice:999,
      },
      {
        
      }
    ];
    return(
      <div className="product-list">
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
