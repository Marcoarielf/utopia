import React from 'react';
import './accesoContenido.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function AccesoContenido(props) {
  return (
    <div id={props.idName} className="acceso-contenido">
        <div className="img-thumb">
          <img src={props.image} />
        </div>
        <div className="titulo">
            <h4>{props.description}
                <Link to={props.link}>
                <a target="_parent"></a>
                </Link>
            </h4> 
            <p>{props.description2}</p>
        </div>
    </div>
  );
}

export default AccesoContenido;


