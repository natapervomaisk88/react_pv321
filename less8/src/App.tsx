import './App.css';
import { useEffect, useState } from 'react';
import CardForm from './components/CardForm';
import Card from './components/Card';
import Item from './model/Item';

function App(): JSX.Element {
  const [cards, setCards] = useState<Array<Item>>([]);
  useEffect((): void => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        setCards(data);
        console.log('GET products');
      });
  }, [])

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
