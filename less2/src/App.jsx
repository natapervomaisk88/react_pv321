import React, { useState } from 'react';
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

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    return (
        <div className='cards'>
            <Card 
                isHeartFilled={isHeartFilled}
                filledHeart={filledHeart} 
                emptyHeart={emptyHeart} 
                photo = {photoProduct}
                name="Фен Rowenta PRO EXPERT CV8820F0" 
                exprice="$50" 
                price="$40" 
                action={handleHeartClick}
            />
             <Card 
                isHeartFilled={isHeartFilled}
                filledHeart={filledHeart} 
                emptyHeart={emptyHeart} 
                photo = {photoProduct2}
                name="Фен Rowenta x KARL LAGERFELD GLOW ADDICT CV613LF0" 
                exprice="$50" 
                price="$40" 
                action={handleHeartClick}
            />
             <Card 
                isHeartFilled={isHeartFilled}
                filledHeart={filledHeart} 
                emptyHeart={emptyHeart} 
                photo = {photoProduct3}
                name="Набір для прибирання Idea Home DS-342C Grey-Blue" 
                exprice="$20" 
                price="$10" 
                action={handleHeartClick}
            />
             <Card 
                isHeartFilled={isHeartFilled}
                filledHeart={filledHeart} 
                emptyHeart={emptyHeart} 
                photo = {photoProduct4}
                name="Сушарка для білизни Eurogold 18 м Чорна (D0503SE)" 
                exprice="$50" 
                price="$40" 
                action={handleHeartClick}
            />
        </div>
    );
}

export default App;

