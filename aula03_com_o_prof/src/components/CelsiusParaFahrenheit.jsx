import React from 'react'

const CelsiusParaFahrenheit = (props) => {
    const conversao = (props.celcius * 9 / 5) + 32;
  return (
    <div className='conversao'>
        <h1>O resultado da conversão de celsius para fahrenheit é de: {conversao.toFixed(2)} ºF</h1>
    </div>
  )
};
export default CelsiusParaFahrenheit