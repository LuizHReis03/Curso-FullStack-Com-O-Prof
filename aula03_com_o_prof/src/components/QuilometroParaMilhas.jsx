import React from 'react'

const QuilometrosParaMilhas = (props) => {
    const conversao = props.km * 0.621371;
    return (
    <div className='conversao'>
        <h1>O resultado da conversão de Quilômetros para Milhas é de: {conversao.toFixed(2)} </h1>
    </div>
    )
};

export default QuilometrosParaMilhas