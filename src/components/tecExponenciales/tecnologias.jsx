import React, {useEffect} from 'react';
import './tecnologias.css';
import { gsap } from 'gsap';
import $ from 'jquery';
// window.$ = $;


function TecnologiasExponenciales() {

  const tecnoExp = React.useRef(null);
  const contenedorTecn = React.useRef(null);

  useEffect(() => {
        gsap.to(tecnoExp.current, {
          duration:3,
          ease: "none",
          y: 0,
          stagger: 1,
          scrollTrigger:{
              // scroller: ".containerScroll",
              trigger: '#tecnologias-exponenciales',
              start: 'top bottom',
              end: 'center top',
              // markers:true,     
              scrub: 1,
              toggleActions: 'restart pause reverse reset'
          }
      })
      
      gsap.to(tecnoExp.current, {
          duration:3,
          ease: "none",
          stagger: 1,
          opacity: 1,
          scrollTrigger:{
              // scroller: ".containerScroll",
              trigger: '#tecnologias-exponenciales',
              start: 'top bottom',
              end: 'center 80%',
              // markers:true,     
              scrub: 1,
              toggleActions: 'restart pause reverse reset'
          }
      })
      $('.tecnologias').clone().appendTo("#contenedor-tecnologias");
      const paddingL = parseInt($('#contenedor-tecnologias .tecnologias p span').css('padding-left'));
      const paddingR = parseInt($('#contenedor-tecnologias .tecnologias p span').css('padding-right'));
      const width = $(document).width() * 0.3125;
      const TotalPadding = paddingL + paddingR;
      console.log(paddingL);
      var x=gsap.to('#contenedor-tecnologias',{x:0-$('.tecnologias').width()+600,duration:200,repeat:-1,ease:'linear'});
      $('#contenedor-tecnologias').mouseover(function()
      {
          x.kill();
          x = gsap.to('#contenedor-tecnologias',{x:"-=20px",duration:1,ease:'ease.easeOut'});
      
      });
      $('#contenedor-tecnologias').mouseout(function()
      {
          x.kill();
          x = gsap.to('#contenedor-tecnologias',{x:0-$('.tecnologias').width(),duration:200,repeat:-1,ease:'linear'});
      }) ;
    }, [tecnoExp])

  return (
    <section id="tecnologias-exponenciales" ref={tecnoExp}>
        <h3>Tecnologías Exponenciales</h3>
        <div className="linea-tecno"></div>
            <div id="contenedor-tecnologias" ref={contenedorTecn}>
                <div className="tecnologias">
                    <p><span>Inteligencia artificial</span></p>
                    <p><span>Big data</span></p>
                    <p><span>Ciencia de datos</span></p>
                    <p><span>Realidad aumentada</span></p>
                    <p><span>Biotecnología</span></p>
                    <p><span>Impresión 3D</span></p>
                    <p><span>Metodologías ágiles</span></p>
                    <p><span>Cultura digital</span></p>
                    <p><span>Internet de las cosas</span></p>
                    <p><span>Blockchain</span></p>
                    <p><span>Realidad virtual</span></p>
                    <p><span>Nanotecnología</span></p>
                    <p><span>Programación</span></p>
                    <p><span>Robótica</span></p>
                    <p><span>Transmedia</span></p>
                    <p><span>Territorios digitales</span></p>
                    </div>
            </div>
        <div className="linea-tecno"></div>
        <div className="descripcion-tec-ex">
            <p>Las tecnologías exponenciales son aquellas que siguen un patrón<br /> de crecimiento acelerado o exponencial; esto significa que, en poco<br /> tiempo, su precio y complejidad se reducen de forma relevante,<br /> mientras que su capacidad y el número de aplicaciones que las<br /> aprovechan aumenta de forma vertiginosa.</p>
        </div>
    </section>
  );
}

export default TecnologiasExponenciales;


