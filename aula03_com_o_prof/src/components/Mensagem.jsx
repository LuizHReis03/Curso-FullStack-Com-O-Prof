import React from 'react'

const Mensagem = ({tipo}) => {

    const condicao = () => {
        if (tipo === "sucesso") {
            return <h1>Operação Realizada com Sucesso</h1>
        }  else if (tipo ==="erro") {
            return <h2>Ocorreu um erro na operação </h2>
        } else if (tipo ==="aviso") {
            return <h3> Atenção! Verifique os dados </h3> 
        } else {
            return null
        }
    }

  return (
    <div className='mensagem'>
           {condicao()}
        </div>
  )
}

export default Mensagem