import React from 'react'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import QuilometrosParaMilhas from './components/QuilometroParaMilhas'
import MilhasParaQuilometros from './components/MilhasParaQuilometros'

const App = () => {
  return (
    <div className='container'>
      <h1>Conversões</h1>
      <CelsiusParaFahrenheit celcius={10} />
      <FahrenheitParaCelsius tempf={10} />
      <QuilometrosParaMilhas km={10} />
      <MilhasParaQuilometros mi={10} />
    </div>
  )
}

export default App