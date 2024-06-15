import React from 'react'
import dbz from '../assets/dbz.jpg'

const TrabalhandoComImagens = () => {
  return (  
    <div className='container'>
        <h1>Trabalhando com Imagens</h1>
        <div className='imagens'>
            <div className='imagem'>
                <h2>Imagem da pasta public</h2>
                <img src="/avs.png" alt='Imagem da pasta public' />
            </div>
            <div className='Imagem'>
                <h2>Imagem da pasta assets</h2>
                <img src={dbz} alt='Imagem da pasta assets' />
            </div>
        </div>
        
    </div>
  )
}

export default TrabalhandoComImagens