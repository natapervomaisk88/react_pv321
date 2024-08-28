import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

const handleOK = () => {
  alert("OK");
};
const handleAdd = () => {
  alert("Add");
};

function App() {
  return (
    <>
      {/* <Button name="OK" action={handleOK} color="red" />
      <Button name="Add" action={handleAdd} color="green" />
      <Button name="Remove" action={handleAdd} color="yellow" /> */}
      <div className="card-container">
        <Card image="https://m.media-amazon.com/images/I/61o8j2ohWvL._SX522_.jpg" title="Pastel highlighters pack" cost="1.50" />
        <Card image="https://m.media-amazon.com/images/I/51I1nBnQBOL._SX522_.jpg" title="Sticky notes" cost="1.75" />
        <Card image="https://m.media-amazon.com/images/I/81-uPq+MNHL._SX679_.jpg" title="Clip box set" cost="3.85" />
        <Card image="https://m.media-amazon.com/images/I/31RglIeKQ1L.jpg" title="Led light table night lamp" cost="4.75" />
        <Card image="https://m.media-amazon.com/images/I/717edTeWYZL._SX522_.jpg" title="Whiteboard boldmarkers" cost="1.60" />
        <Card image="https://m.media-amazon.com/images/I/71PLDE86q9L._SX679_.jpg" title="Pencil pouch" cost="7.15" />
        <Card image="https://m.media-amazon.com/images/I/81NNwqzBX4S._SX522_.jpg" title="Spiral notebooks pack" cost="3.50" />
        <Card image="https://m.media-amazon.com/images/I/616Nn2plxhL._SX522_.jpg" title="Sticky book tabs" cost="1.50" />
      </div>
    </>
  );
}

export default App;
