import "./App.css";
import { useState } from "react";
// import TeamLead from "./components/TeamLead";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import Products from "./model/products";

function App() {
  const [cards, setCards] = useState(Products);

  return (
    <>
      {/* <TeamLead /> */}
      <CardForm cards={cards} setCards={setCards} />
      <hr />
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} image={card.image} title={card.title} cost={card.cost} stock={card.stock ?? 0} discount={card.discount ?? 0} />
        ))}
      </div>
    </>
  );
}

export default App;
