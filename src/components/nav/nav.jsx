import React, {Component} from 'react';
import logoUtopia from './../../images/logo_utopia.svg'
import './nav.css'

function Nav() {
  return (
        <header className="hportada">
            <div>
                <img src={logoUtopia} />
                <p>espacio cenit</p>
                <div id="abrir-menu">
                    <span className="line-menu-1 line-menu-animation"></span>
                    <span className="line-menu-2 line-menu-animation"></span>
                    <span className="line-menu-3 line-menu-animation"></span>
                </div>
            </div>
        </header>
  );
}

export default Nav;
