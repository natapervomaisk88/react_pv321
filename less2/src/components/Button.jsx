const Button = (name, action, color) => {
	//const value = "Cancel";
	return (
	<>
		{/* <button>{value}</button> */}
		<button style={{backgroundColor:color}} onclick={action}>{name}</button>
	</>
	);
};

export default Button;