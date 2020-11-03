import React, {Component , useEffect} from 'react';
import logoUtopia from './../../images/logo_utopia.svg'
import './nav.css'
import { gsap } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Nav() {

      // Animación navbar

    const portada = React.useRef(null);
    const logoUtopiaAnim = React.useRef(null);
    const abrirMenu = React.useRef(null);
    const logoCenit = React.useRef(null);

    useEffect(() => {
        
    gsap.to(portada.current, {
        duration:.1,
        ease: "none",
        top: 0,
        scrollTrigger:{
            // scroller: ".containerScroll",
            trigger: '.portada',
            start: '30%',
            end: '31%',
            // markers:true,     
            scrub: 2,
            toggleActions: 'restart pause reverse reset'
        }
    })
    gsap.to(logoUtopiaAnim.current, {
        duration:.5,
        ease: "none",
        opacity: 1,
        scrollTrigger:{
            // scroller: ".containerScroll",
            trigger: '.portada',
            start: '30%',
            end: '31%',
            // markers:true,     
            scrub: 2,
            toggleActions: 'restart pause reverse reset'
        }
    })
    gsap.to(abrirMenu.current, {
        duration:.4,
        ease: "none",
        opacity: 1,
        width: 24,
        delay: 1,
        stagger: .2,
        scrollTrigger:{
            // scroller: ".containerScroll",
            trigger: '.portada',
            start: '32%',
            end: '33%',
            // markers:true,     
            scrub: 2,
            toggleActions: 'restart pause reverse reset'
        }
    })
    gsap.to(logoCenit.current, {
        duration:1,
        ease: "power2.inOut",
        opacity: 1,
        scrollTrigger:{
            // scroller: ".containerScroll",
            trigger: '.portada',
            start: '32%',
            end: '33%',
            //markers:true,     
            scrub: 2,
            toggleActions: 'restart pause reverse reset',
        }
    })

    }, [portada])

  return (
        <header className="hportada" ref={portada}>
            <div>
                <Link to="/">
                    <img class="logo-utopia" src={logoUtopia} alt="lgoo" ref={logoUtopiaAnim}/>
                </Link>
                <p class="btn-espacio-cenit" ref={logoCenit}>espacio cenit</p>
                <div id="abrir-menu">
                    <span className="line-menu-1 line-menu-animation" ref={abrirMenu}></span>
                    <span className="line-menu-2 line-menu-animation" ref={abrirMenu}></span>
                    <span className="line-menu-3 line-menu-animation" ref={abrirMenu}></span>
                </div>
            </div>
        </header>
  );
}

export default Nav;
