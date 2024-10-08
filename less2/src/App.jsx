import "./App.css";
import Button from "./components/Button";

const handleOK = () => {
  alert("OK");
};
const handleAdd = () => {
  alert("Add");
};

function App() {
  return (
    <>
      <Button name="OK" action={handleOK} color="red" />
      <Button name="Add" action={handleAdd} color="green" />
      <Button name="Remove" action={handleAdd} color="yellow" />
    </>
  );
}

export default App;
