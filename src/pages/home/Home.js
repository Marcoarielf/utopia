import React, { useEffect } from 'react';
import './Home.css';
import locomotiveScroll from "locomotive-scroll";
import Nav from './../../components/nav/nav.jsx'
import Header from './../../components/header/header.jsx'
import Tecnologias from './../../components/tecExponenciales/tecnologias.jsx'
import Dimensiones from './../../components/dimensiones/dimensiones.jsx'

function Home() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
    <div className="App">
      <div className="scroll" ref={scrollRef}>
        <Nav />
        <Header />
        <Tecnologias />
        <Dimensiones />
      </div>
    </div>
  );
}

export default Home;
