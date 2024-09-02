import { useState } from 'react';

export default function Counter() {
	const [counter, setCounter] = useState(0);
	//let counter = 0;
	const handlerUp = () => {
		//++counter;
		//console.log(counter);
		setCounter((prev) => prev + 1);
	}

	return (
		<>
			<span>{counter}</span>
			<div>
				<button onClick={handlerUp}>UP</button>
			</div>
		</>
	);
}