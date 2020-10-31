import React from 'react';
import './accesoContenido.css';

function AccesoContenido(props) {
  return (
    <div id={props.idName} className="acceso-contenido">
        <div className="img-thumb">
          <img src={props.image} />
        </div>
        <div className="titulo">
            <h4>{props.description}
                <a href="contenido-ra.html" target="_parent"></a>
            </h4> 
            <p>{props.description2}</p>
        </div>
    </div>
  );
}

export default AccesoContenido;


