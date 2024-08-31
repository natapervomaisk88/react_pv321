const Img = ({ imgSrc, altName }) => {
	return (
		<>
			<img src={imgSrc} alt={altName} style={imgStyles}/>
		</>
	);
};

const imgStyles = {
	width: "100%",
    height: "200px"
};

export default Img;