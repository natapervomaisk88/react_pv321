import "./App.css";
import { CityDesc } from "./components/city/cityDesc";
import { CityImg } from "./components/city/cityImg";
import { CityInfo } from "./components/city/cityInfo";
import { PersonImg } from "./components/personInfo/personImg";
import { PersonData } from "./components/personInfo/personData";
import { MainData } from "./components/personInfo/mainData";

function App() {
	return (
		<>
			{/* city */}
			{/* <h1>Одесса</h1>
			<CityInfo />
			<CityImg />
			<CityDesc /> */}

			{/* person info */}
			<h1>Vladimir Demchenko</h1>
			<div style={{display:"flex", justifyContent:"row", marginBottom:"10px"}}>
				<PersonImg />
				<MainData />
			</div>
			<PersonData />
		</>
	);
};

export default App;
