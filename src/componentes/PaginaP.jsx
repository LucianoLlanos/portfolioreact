import React from 'react'
import css from '../stilos/PaginaP.css'
import foto from '../recursos/WhatsApp Image 2025-04-02 at 20.36.49.png'
import home from '../componentes/home';

const PaginaP = () => {
  return (
<div className="container">
  <div style={{ display: 'flex' }}>
    <div className="card" style={{ width: '20rem', height: '30rem' }}>
      <img
        src={foto}
        className="img"
        alt=""
      />
      <p style={{ textAlign: 'center', fontSize: 'x-large' }}>Hola</p>
      <p style={{ textAlign: 'center', fontSize: 'x-large' }}>
        Soy Luciano Agustin Llanos, programador
      </p>
      <p style={{ textAlign: 'center', fontSize: 'x-large' }}>
        Haz clic aquí abajo para saber más sobre mí
      </p>
      <a href={home}>
        <button className="btn">Adelante</button>
      </a>
    </div>
  </div>
</div>

  )
}

export default PaginaP