import React from 'react'

const Multiplicacao = (props) => {
    const resultado = props.num1 * props.num2;
  return (
    <div className='operacao'>
        <h1>O resultado dessa multiplicação é {props.num1} * {props.num2} = {resultado}</h1>
    </div>
  )
};

export default Multiplicacao