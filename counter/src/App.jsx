import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(10);

 // let counter = 5;

const addvalue = () =>{
  console.log("Value added",counter);
  counter = counter + 1;
  setCounter(counter)
}

const removevalue = () =>{
  console.log("removevalue",{counter});
  counter = counter - 1;
  setCounter(counter);
}

  return (
    <>
     <h1>Vishal babar</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick = {addvalue}
     >Add value</button>
     <br />
     <br />
     <button
     onClick={removevalue}
     >remove value</button>
    </>
  )
}

export default App
