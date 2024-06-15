import React from 'react'

const FahrenheitParaCelsius = (props) => {
    const conversao = (props.tempf - 32) * 5 / 9;
  return (
    <div className='conversao'>
        <h1>O resultado da conversão de fahrenheit para celsius é de: {conversao.toFixed(2)} </h1>
    </div>
  )
};

export default FahrenheitParaCelsius