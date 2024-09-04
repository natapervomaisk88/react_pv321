// Lesson 3

// import './App.css'
// import { useState, useRef } from 'react';

//useState - наш первый Хук, позволяет работать с состоянием компонента
//Hooks - хуки(готовые функции JS, работающие с жизненным циклом компонента)

// 1. Вариант

// function App() {
//   const ref_name = useRef()
//   const [name, setName] = useState("default");
//   const handleName = () => {
//     setName(ref_name.current.value);
//   };
//   return (
//     <>
//       <p>Name: {name}</p>
//       <input type="text" value={name} ref={ref_name} onChange={handleName}></input>
//     </>
//   );
// }

// export default App


// 2. Вариант (Он лучше!!!)

// function App() {
//   const [name, setName] = useState("default");
//   return (
//     <>
//       <p>Name: {name}</p>
//       <input 
//         type="text" 
//         value={name} 
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//     </>
//   );
// }
// export default App



// Работаем с массивом

// function App() {
//   const [todos, setTodos] = useState([{id: 1, title: "todo 1"}]);
//   const ref_todo = useRef();

//   const handleAddTodo = () => {
//     const new_id = todos.length + 1;
//     setTodos([...todos, { id:new_id,title:ref_todo.current.value }]);
//   };

//   return (
//     <>
//     <input type="text" ref={ref_todo}/>
//     <div>
//       <button onClick={handleAddTodo}>Add todo</button>
//     </div>
//     <hr />
//       {todos.map((el) => (
//         <p key={el.id}>
//           {el.id} : {el.title}
//         </p>
//       ))}
//     </>
//   );
// }

// export default App;


import './App.css'
import Canvas from './components/Canvas';

const App = () => {
  return (
    <>
      <Canvas />
    </>
  );
};

export default App;