import React from 'react'
import './App.css'
import Soma from './components/Soma'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'


const App = () => {
  return (
    <div className='container'>
  <Soma num1={2} num2={3} />
  <Subtracao num1={8} num2={5} />
  <Multiplicacao num1={2} num2={5} />
  <Divisao num1={10} num2={2} />
    </div>
  )
}

export default App