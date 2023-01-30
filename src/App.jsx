import { useState } from 'react'
import './App.css'

function App() {

  const [total,setTotal] = useState(0)

  const Agregar = ()=> {
    const input = Number(document.querySelector("#monto").value) || 0
    const acum  = total + input
    setTotal(acum)
    document.querySelector("#monto").value = 0
  }

  
  return (
    <div>
        <input id='monto' type="text" placeholder='Monto' />
        <button onClick={Agregar}>Agregar</button>
        <p> <span>SubTotal:</span><span>{total}</span></p>
    </div>
  )
}

export default App
