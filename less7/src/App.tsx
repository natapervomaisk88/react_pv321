import './App.css';
import { useState } from 'react';
import Products from "./model/products";
import CardForm from './components/CardForm';
import Card from './components/Card';

function App(): JSX.Element {
  const [cards, setCards] = useState(Products);

  return (
    <>
      <CardForm cards={cards} setCards={setCards} />
      <hr />
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} image={card.image} title={card.title} cost={card.cost} stock={card.stock} discount={card.discount} />
        ))}
      </div>
    </>
  );
}

export default App
