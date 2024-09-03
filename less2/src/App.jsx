import React, { useState, useRef } from 'react';
import "./App.css";
import Card from './card_components/Card';
import filledHeart from './card_photo/filledHeart.png'; 
import emptyHeart from './card_photo/emptyHeart.png'; 
import photoProduct from "./card_photo/Rowenta1.webp";
import photoProduct2 from "./card_photo/Rowenta2.webp";
import photoProduct3 from "./card_photo/IdeaHome.webp";
import photoProduct4 from "./card_photo/Dryer.webp";


function App() {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = (id) => {
        setIsHeartFilled((prev) => !prev);
    };

    const products = [
        {
            id: 1,
            isHeartFilled: isHeartFilled,
            filledHeart: filledHeart,
            emptyHeart: emptyHeart,
            photo: photoProduct,
            name: "Фен Rowenta PRO EXPERT CV8820F0",
            exprice: "$50",
            price: "$40",
            action: () => handleHeartClick(1),
        },
        {
            id: 2,
            isHeartFilled: isHeartFilled,
            filledHeart: filledHeart,
            emptyHeart: emptyHeart,
            photo: photoProduct2,
            name: "Фен Rowenta x KARL LAGERFELD GLOW ADDICT CV613LF0",
            exprice: "$60",
            price: "$50",
            action: () => handleHeartClick(2),
        },
        {
            id: 3,
            isHeartFilled: isHeartFilled,
            filledHeart: filledHeart,
            emptyHeart: emptyHeart,
            photo: photoProduct3,
            name: "Набір для прибирання Idea Home DS-342C Grey-Blue",
            exprice: "$20",
            price: "$10",
            action: () => handleHeartClick(3),
        },
        {
            id: 4,
            isHeartFilled: isHeartFilled,
            filledHeart: filledHeart,
            emptyHeart: emptyHeart,
            photo: photoProduct4,
            name: "Сушарка для білизни Eurogold 18 м Чорна (D0503SE)",
            exprice: "$30",
            price: "$25",
            action: () => handleHeartClick(4),
        },
    ];

    return (
        <div className='cards'>
            {products.map((product) => (
                <Card
                    key={product.id}
                    isHeartFilled={product.isHeartFilled}
                    filledHeart={product.filledHeart}
                    emptyHeart={product.emptyHeart}
                    photo={product.photo}
                    name={product.name}
                    exprice={product.exprice}
                    price={product.price}
                    action={product.action}
                />
            ))}
        </div>
    );
}

export default App;
