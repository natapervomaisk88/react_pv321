import "./App.css";
import Card from "./components/cardItem/Card";
import PwrStn from "./assets/p445671491.png";
import IntelCPU from "./assets/p356294160.png";
import Gerenator from "./assets/p369489339.png";
import Blender from "./assets/p32815055.png";

function App() {

	const items = [
		{
			id: 1,
			imgSrc: PwrStn,
			altName: "Зарядная станция Alphaess BlackBee 2000+ / 2580 Вт / 2203 Вт⋅ч / Li-ion (BLACKBEE 2000+)",
			name: "Зарядная станция Alphaess BlackBee 2000+ / 2580 Вт / 2203 Вт⋅ч / Li-ion (BLACKBEE 2000+)",
			originalPrice: "57999",
			discountedPrice: "45999",
			link: "",
		},
		{
			id: 2,
			imgSrc: IntelCPU,
			altName: "Процессор Intel Core i9-13900KF 3.0GHz/36MB (BX8071513900KF) s1700 BOX",
			name: "Процессор Intel Core i9-13900KF 3.0GHz/36MB (BX8071513900KF) s1700 BOX",
			originalPrice: "27266",
			discountedPrice: "21289",
			link: "",
		},
		{
			id: 3,
			imgSrc: Gerenator,
			altName: "Генератор бензиновый Rato R3000-L 2.7/3 кВт AVR",
			name: "Генератор бензиновый Rato R3000-L 2.7/3 кВт AVR",
			originalPrice: "18753",
			discountedPrice: "13500",
			link: "",
		},
		{
			id: 4,
			imgSrc: Blender,
			altName: "Блендер Bosch MSM2650B",
			name: "Блендер Bosch MSM2650B",
			originalPrice: "2329",
			discountedPrice: "1799",
			link: "",
		},

	];

	return (
		<>
			<div style={styles.cards}>
				{items.map((item) => (
					<Card
						key={item.is}
						imgSrc={item.imgSrc}
						altName={item.altName}
						name={item.name}
						originalPrice={item.originalPrice}
						discountedPrice={item.discountedPrice}
						link=""
					/>
				))}
			</div>
		</>
	);
}

const styles = {
	cards: {
		display: "flex",
		flexDirection: "column",
	},
};

export default App;
