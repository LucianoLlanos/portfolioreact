import React from 'react'
import foto from '../recursos/WhatsApp Image 2025-04-02 at 20.36.49.png'
import Home from './Home';
import { Link } from 'react-router-dom';
import css from'../stilos/PaginaP.css'


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
      <Link to="/Home">
         <button className="btn">Adelante</button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default PaginaP