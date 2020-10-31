import React from 'react';
import './accesoContenidoContainer.css';
import AccesoContenido from './accesoContenido/accesoContenido'
import imagen1 from './../../images/contenido_demo_1.jpg'
import imagen2 from './../../images/contenido_demo_2.jpg'
import imagen3 from './../../images/contenido_demo_3.jpg'
import imagen4 from './../../images/contenido_demo_4.jpg'

function AccesoContenidoContainer() {
  return (
    <section id="bloque-contenidos-home" class="contenidos">
        <AccesoContenido idName="c-1" descripcion2="funciona" image={imagen1} description="¿Serán capaces las máquinas de pensar, comprender y actuar como las personas?"/>
        <AccesoContenido idName="c-2" image={imagen2} description="¿Serán capaces las máquinas de pensar, comprender y actuar como las personas?"/>
        <AccesoContenido idName="c-3" image={imagen3} description="¿Serán capaces las máquinas de pensar, comprender y actuar como las personas?"/>
        <AccesoContenido idName="c-4" image={imagen4} description="¿Serán capaces las máquinas de pensar, comprender y actuar como las personas?"/>
    </section>
  );
}

export default AccesoContenidoContainer;


