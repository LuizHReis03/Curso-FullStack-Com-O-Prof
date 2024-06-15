import React from 'react'

const RenderizandoComFuncoes = () => {

    const escolhaDeRedenrizacao = (oQueRenderizar) => {
        if (oQueRenderizar === "PB") {
            return <h1>Paraíba</h1>
        } else {
            return <h2>João Pessoa</h2>
        }
    }

  return (
    <div className='container'>
        <div className='renderizacao'>
            {escolhaDeRedenrizacao("PB")}
            {escolhaDeRedenrizacao("JP")}
        </div>
    </div>
  )
}

export default RenderizandoComFuncoes