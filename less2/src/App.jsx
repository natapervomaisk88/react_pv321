import './App.css'
import Button from './components/Button'

const handleOk =()=> {
  alert("OK");
}

const handleAdd =()=> {
  alert("Add");
}




function App() {

  return (
    <>
    <Button name="Ok" action={handleOk} color="red"/>
    <Button name="Add" action={handleAdd} color="green"/>
    </>
  )
}

export default App
