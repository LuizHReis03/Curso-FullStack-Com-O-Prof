import React from 'react'

const MilhasParaQuilometros = (props) => {
    const conversao = props.mi * 1.60934;
    return (
    <div className='conversao'>
        <h1>O resultado da conversão de Milhas para Quilômetros é de: {conversao.toFixed(2)} </h1>
    </div>
    )
};

export default MilhasParaQuilometros