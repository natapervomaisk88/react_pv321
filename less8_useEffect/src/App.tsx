import { useEffect, useState, useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [val, setVal] = useState<number>(0);
  const [isShowCounter, setIsShowCounter] = useState<boolean>(true);
  const my_ref: any = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("start useEffect App");
  }, []);
  const handlerClick = () => {
    setVal(my_ref.current.value);
  };
  return (
    <>
      App Component
      <input type="number" ref={my_ref} onChange={() => {}} />
      <button onClick={handlerClick}>OK</button>
      <button
        onClick={() => {
          setIsShowCounter(!isShowCounter);
        }}
      >
        Change
      </button>
      {isShowCounter ? <Counter value={val} /> : ""}
    </>
  );
}

export default App;
