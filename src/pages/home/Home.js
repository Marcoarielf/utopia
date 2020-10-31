import React, { useEffect } from 'react';
import './Home.css';
import Header from './../../components/header/header.jsx'
import Tecnologias from './../../components/tecExponenciales/tecnologias.jsx'
import Dimensiones from './../../components/dimensiones/dimensiones.jsx'
import AccesoContenidoContainer from './../../components/accesoContenidoContainer/accesoContenidoContainer.jsx'
import Footer from './../../components/footer/footer'

function Home() {
  // const scrollRef = React.createRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true
  //   });
  // });

  return (
    <div className="App">
        
        <Header />
        <Tecnologias />
        <Dimensiones />
        <AccesoContenidoContainer />
        <Footer />
    </div>
  );
}

export default Home;
