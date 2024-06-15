import React from 'react'
import Livro from './components/Livro';
import ListaDeLivros from './components/ListaDeLivros';

const App = () => {
  const livros = [
    { titulo: "A revolução dos Bichos", autor: "George Orwell", ano:1945 },
    { titulo: "1984", autor: "George Orwell", ano:1945 },
    { titulo: "Código Limpo", autor: "Uncle Bob", ano: "2012" }
  ]
  return (
    <div className='container'>
      <h1>Lista de Livros</h1>
      <ListaDeLivros livros={livros} /> 

    </div>
  )
}

export default App