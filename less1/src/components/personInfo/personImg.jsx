import mainPhoto from "../../assets/img.png"

export const PersonImg = () => {
	return (
		<>
			<img src={mainPhoto} alt="Person Image" style={{ height: 'auto', justifyContent: "center", }} />
		</>
	);
};