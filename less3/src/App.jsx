import { useState, useRef } from 'react';
import './App.css'
import Counter from './components/Counter';

// state
// hooks
function App() {
	// console.log(useState(0));
	// const [counter, setCounter] = useState(0);
	// //let counter = 0;
	// const handlerUp = () => {
	// 	//++counter;
	// 	//console.log(counter);
	// 	setCounter((prev) => prev + 1);
	// }
	// const ref_name = useRef();

	// const [name, setName] = useState("default");
	// const handleName = () => {
	// 	setName(ref_name.current.value);
	// }
	// return (
	// 	<>
	// 		{/* <span>{counter}</span>
	// 		<div>
	// 			<button onClick={handlerUp}>UP</button>
	// 		</div> */}

	// 		{/* <Counter/> */}
	// 		<p>Name : {name}</p>
	// 		<input type='text' value={name} ref={ref_name} onChange={handleName} />


	// 	</>
	// );

	// const [name, setName] = useState("default");

	// return (
	// 	<>
	// 		<p>Name : {name}</p>
	// 		<input type='text' value={name} onChange={(e)=>{setName(e.target.value); }} />		
	// 	</>
	// );

	////////////////////////////////
	// const todos = [
	// 	{ id: 1, title: "todo1" },
	// 	{ id: 2, title: "todo2" },
	// 	{ id: 3, title: "todo3" },
	// 	{ id: 4, title: "todo4" },
	// ]

	// return (
	// 	<>
	// 		{todos.map((el) =>
	// 			(<p key={el.id}>{el.title} </p>))}
	// 	</>
	// );




	const [todos, setTodos] = useState([{ id: 1, title: "todo1" }]);
	const ref_todo = useRef();
	const handleAddTodo = (e) => {
		e.preventDefault(); //отмена дефолтного поведения формы
		const new_id = todos.length + 1;
		setTodos([...todos, { id: new_id, title: ref_todo.current.value }]); // spread js
	}



	return (
		<>
			<form onSubmit={handleAddTodo} >

				<input type="text" ref={ref_todo} name="title"/>
				<div>
					<button> Add todo</button>
				</div>
			</form>
			<hr />
			{todos.map((el) =>
				(<p key={el.id}>{el.id} : {el.title} </p>))}
		</>
	);
};

export default App;
