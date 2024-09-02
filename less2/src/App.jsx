
import './App.css'
/*const handleOK = () =>
  {
    alert("Ok");
  };

  const handleAdd= () =>
    {
      alert("Add");
    }
  


function App() {
  return (
    <>
      <Button name = "OK" action = {handleOK} color = "green"/>
      <Button name = "Add" action = {handleAdd} color = "red"/>
      <Button name="OK" action={handleOK} color="red" />
      <Button name="Add" action={handleAdd} color="green" />
      <Button name="Remove" action={handleAdd} color="yellow" />
    </>
  );
}

export default App;*/
import Card from './card_components/Card';
import filledHeart from './card_photo/filledHeart.png'; 
import emptyHeart from './card_photo/emptyHeart.png'; 
//import productPhoto from './card_photo/Rowenta_PRO_EXPERT.webp'; 

function App() {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    return (
        <>
            <Card 
                isHeartFilled={isHeartFilled}
                filledHeart={filledHeart} 
                emptyHeart={emptyHeart} 
                //photo={productPhoto} 
                name="Фен Rowenta PRO EXPERT CV8820F0" 
                exprice="$50" 
                price="$40" 
                action={handleHeartClick}
            />
            <p>Some text</p>
        </>
    );
}

export default App;
