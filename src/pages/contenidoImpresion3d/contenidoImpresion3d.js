import React, { useEffect, useRef } from 'react';
import './contenidoImpresion3d.css';
import { gsap } from 'gsap';

import AccesoContenidoContainer from './../../components/accesoContenidoContainer/accesoContenidoContainer.jsx'
import Footer from './../../components/footer/footer'

function Home() {

  return (
      <div id="#contenido">
            <section id="portada-contenido">
                <div>
                    <h2>Impresión 3D<br />Hay vida más allá del<br />papel y las pantallas</h2>
                    <div className="links-dim-tec">
                    <a href="#" target="_parent">CREAR</a><a href="#" target="_parent">Impresión 3D</a>
                    </div>
                </div>
            </section>
      </div>

  );
}

export default Home;
