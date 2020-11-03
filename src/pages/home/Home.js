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

  return (
    <div>
      
        <Header />
        <Tecnologias />
        <Dimensiones />
        <AccesoContenidoContainer />
        <Footer />
        </div>

  );
}

export default Home;
