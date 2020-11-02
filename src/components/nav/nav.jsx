import React, {Component} from 'react';
import logoUtopia from './../../images/logo_utopia.svg'
import './nav.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Nav() {
  return (
        <header className="hportada">
            <div>
                <Link to="/">
                    <img class="logo-utopia" src={logoUtopia} alt="lgoo"/>
                </Link>
                <p class="btn-espacio-cenit">espacio cenit</p>
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
