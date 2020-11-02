import React, { useEffect, useRef } from 'react';
import './Home.css';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from './../../components/header/header.jsx'
import Tecnologias from './../../components/tecExponenciales/tecnologias.jsx'
import Dimensiones from './../../components/dimensiones/dimensiones.jsx'
import AccesoContenidoContainer from './../../components/accesoContenidoContainer/accesoContenidoContainer.jsx'
import Footer from './../../components/footer/footer'
gsap.registerPlugin(ScrollTrigger);
function Home() {

  const animatedPortadaSitio = React.useRef(null);

  // useEffect(() => {
    
  //   gsap.to(animatedPortadaSitio.current, {
  //     duration:3,
  //     y: "-20vh",
  //     // ease: "none",
  //     opacity: 0,
  //     // stagger: 1,
  //     // scrollTrigger:{
  //     //     // scroller: ".containerScroll",
  //     //     trigger: '.portada',
  //     //     start: '70% center',
  //     //     end: '110% center',
  //     //     markers:true,     
  //     //     scrub: 1,
  //     //     toggleActions: 'restart pause reverse reset'
  //     // }
  // })
  // }, [animatedPortadaSitio])

  return (
    <div>
      
        <Header ref={animatedPortadaSitio} />
        <Tecnologias />
        <Dimensiones />
        <AccesoContenidoContainer />
        <Footer />
        </div>

  );
}

export default Home;
