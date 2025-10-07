import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
   const handleDecrement = () => setCount(count - 1);

  return (
    <>
       <h1>Counter App</h1>
       <div >{count}</div>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <button  onClick={handleDecrement}>
          Decrement
        </button>
    </>
  )
}

export default App
