import "./App.css";
import { useState, useRef } from "react";
import products from "./model/products.json";
function App() {
  console.log(products);
  const [todos, setTodos] = useState([{ id: 1, title: "todo 1" }]);
  const ref_todo = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const new_id = todos.length + 1;
    setTodos([...todos, { id: new_id, title: ref_todo.current.value }]);
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input type="text" ref={ref_todo} />
        <div>
          <button>Add todo</button>
        </div>
      </form>
      <hr />
      {todos.map((el) => (
        <p key={el.id}>
          {el.id} : {el.title}
        </p>
      ))}
    </>
  );
}
export default App;
