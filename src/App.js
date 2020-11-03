import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import './Home.css';
// import LocomotiveScroll from 'locomotive-scroll';
// import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from './components/nav/nav'
import Home from './pages/home/Home'
import Crear from './pages/crear/crear'
import ContenidoImpresion3d from './pages/contenidoImpresion3d/contenidoImpresion3d'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 

function App() {
  
    // const scrollRef = React.createRef();



  // useEffect(() => {
  //   //LOOCMOTIVE scroll
  //   const locoScroll = new LocomotiveScroll({
  //     el: document.querySelector(".containerScroll"),
      
  //     smooth: true,
  //     //multiplier: velocidad
  //     // multiplier: 0.5,
  //     // This defines the "smoothness" intensity
  //     // lerp: .1
  //     });
      
  //     // // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  //     // locoScroll.on("scroll", ScrollTrigger.update);
      
  //     // // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  //     // ScrollTrigger.scrollerProxy(".containerScroll", {
  //     //   scrollTop(value) {
  //     //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  //     //   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  //     //   getBoundingClientRect() {
  //     //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  //     //   },
  //     //   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  //     //   pinType: document.querySelector(".containerScroll").style.transform ? "transform" : "fixed"
  //     // });
      
  // });






  return (
    <>
    <Router>
        <Nav />
        <switch>
        <div className="containerScroll"  >
                <Route exact path="/">
                        <Home />
                </Route>
                <Route path="/crear">
                        <Crear />
                </Route>
                <Route path="/contenido-impresion3d">
                        <ContenidoImpresion3d />
                </Route>
          </div>
        </switch>
    </Router>
    </>
  );
}

export default App;
