import "./App.css";
import Card from "./components/cardItem/Card";
import PwrStn from "./assets/p445671491.png";
import IntelCPU from "./assets/p356294160.png";
import Gerenator from "./assets/p369489339.png";
import Blender from "./assets/p32815055.png";


// const handleOK = () => {
// 	alert("OK");
// };
// const handleAdd = () => {
// 	alert("Add");
// };

function App() {
	return (
		<>
			{/* <Button name="OK" action={handleOK} color="red" />
      <Button name="Add" action={handleAdd} color="green" />
      <Button name="Remove" action={handleAdd} color="yellow" /> */}
			<div style={styles.cards}>
				<Card
					imgSrc={PwrStn}
					altName="Зарядная станция Alphaess BlackBee 2000+ / 2580 Вт / 2203 Вт⋅ч / Li-ion (BLACKBEE 2000+)"
					name="Зарядная станция Alphaess BlackBee 2000+ / 2580 Вт / 2203 Вт⋅ч / Li-ion (BLACKBEE 2000+)"
					originalPrice="57999"
					discountedPrice="45999"
					link=""
				/>
				<Card
					imgSrc={IntelCPU}
					altName="Процессор Intel Core i9-13900KF 3.0GHz/36MB (BX8071513900KF) s1700 BOX"
					name="Процессор Intel Core i9-13900KF 3.0GHz/36MB (BX8071513900KF) s1700 BOX"
					originalPrice="27266"
					discountedPrice="21289"
					link=""
				/>
				<Card
					imgSrc={Gerenator}
					altName="Генератор бензиновый Rato R3000-L 2.7/3 кВт AVR"
					name="Генератор бензиновый Rato R3000-L 2.7/3 кВт AVR"
					originalPrice="18753"
					discountedPrice="13500"
					link=""
				/>
				<Card
					imgSrc={Blender}
					altName="Блендер Bosch MSM2650B"
					name="Блендер Bosch MSM2650B"
					originalPrice="2329"
					discountedPrice="1799"
					link=""
				/>
			</div>
		</>
	);
}

const styles = {
	cards: {
		display: "flex",
		flexDirection: "row",
	},
};

export default App;
