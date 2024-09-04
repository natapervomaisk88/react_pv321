import { useState } from 'react'
import './App.css'
import TeamLean from './components/TeamLead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeamLean/>
    </>
  )
}

export default App
