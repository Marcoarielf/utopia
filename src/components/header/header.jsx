import React, {Component} from 'react';
import './header.css';
import utopia from './../../images/marca_fbyb.svg';
import logoUtopia from './../../images/logo_utopia.svg';

function Header() {
  return (
        <div id="portada-sitio" className="portada">
            <img src={utopia} className="marca-fbyb"></img>
            <div>
                <div className="logo-utopia"><img src={logoUtopia}></img></div>
                <div className="descripcion-utopia">
                    <h1>Un espacio para vincularse con las<br /> tecnologías exponenciales desde el<br /> ámbito educativo. Para interrogarnos<br /> acerca del presente e imaginar el<br /> futuro desde diferentes ámbitos de<br /> la vida en sociedad.
                    </h1>
                </div>   
            </div>
        </div>
  );
}

export default Header;


