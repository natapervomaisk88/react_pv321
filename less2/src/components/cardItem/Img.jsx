const Img = ({ imgSrc, altName }) => {
	return (
		<>
			<img src={imgSrc} alt={altName} style={imgStyles}/>
		</>
	);
};

const imgStyles = {
	width: "150px",
    height: "150px"
};

export default Img;