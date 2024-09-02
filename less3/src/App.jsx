import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  const ref_color = useRef();

  const handleChangeColor = () => {
    setColor(ref_color.current.value);
  };

  return (
    <>
      <div className="canvas" style={{backgroundColor: color}}></div>
      <input className="palette" type="color" ref={ref_color} onInput={handleChangeColor} />
    </>
  );
}
export default App;
