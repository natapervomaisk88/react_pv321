import operaTheatre from '../assets/opera_theatre.jpg';
import potemkinStairs from '../assets/potemkin_stairs.jpg';

export const CityInfoComponent = () => {
    return (
      <div>
        <h1>Одеса, Україна</h1>
        <p>Рік заснування: 1794</p>
        <h2>Визначні пам{'\''}ятки:</h2>
        <ul>
          <li>Одеський національний академічний театр опери та балету</li>
          <li>Потьомкінські сходи</li>
        </ul>
        <h3>Фотографії:</h3>
        <img src={operaTheatre} alt="Оперний театр" />
        <img src={potemkinStairs} alt="Потьомкінські сходи" />
      </div>
    );
  };
  