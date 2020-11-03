import React, {useEffect} from 'react';
import './dimensiones.css';
import { gsap } from 'gsap';
import $ from 'jquery';

function Dimensiones() {

    const dimVivir = React.useRef(null);
    const cubo = React.useRef(null);
    const frente = React.useRef(null);
    const atras = React.useRef(null);
    const arriba = React.useRef(null);
    const abajo = React.useRef(null);
    const izquierda = React.useRef(null);
    const derecha = React.useRef(null);

    useEffect(() => {
    var cubo2 = gsap.timeline({paused: true,repeat:-1});
        
        cubo2.to(cubo.current,{duration:6,ease: "none",rotationY: '-=360'}); 
        
        var cubo3 = gsap.timeline({paused: true,repeat:-1});
        
        cubo3.to(cubo.current,{duration:10,ease: "none",rotationX: '-=360'});
        
        var cubo4 = gsap.timeline({paused: true,repeat:-1});
        
        cubo4.to(frente.current,{duration:0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0.2)"});
        cubo4.to(atras.current,{duration:0.8,delay:-0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0.2)"});
        cubo4.to(arriba.current,{duration:0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0.2)"});
        cubo4.to(abajo.current,{duration:0.8,delay:-0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0.2)"});
        cubo4.to(izquierda.current,{duration:0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0.2)"});
        cubo4.to(derecha.current,{duration:0.8,delay:-0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0.2)"});
        cubo4.to(frente.current,{duration:0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0)"});
        cubo4.to(atras.current,{duration:0.8,delay:-0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0)"});
        cubo4.to(arriba.current,{duration:0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0)"});
        cubo4.to(abajo.current,{duration:0.8,delay:-0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0)"});
        cubo4.to(izquierda.current,{duration:0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0)"});
        cubo4.to(derecha.current,{duration:0.8,delay:-0.5,ease: "sine.inOut",backgroundColor: "rgba(255,255,255,0)"});
        
        var cubo5 = gsap.timeline({paused: true,repeat:-1});
        
        cubo5.to('#dim-vivir #cubo .cara',{duration:2,ease: "elastic.inOut(1, 0.3)",boxShadow: "0px -14px 200px 0px rgba(13,157,216,1)"}); 
        
        $("#dim-vivir").mouseover(function()
        {
            cubo2.play();
            cubo3.play();
            cubo4.play();
            cubo5.play();
        });
        
        $("#dim-vivir").mouseleave(function()
        {
            cubo2.pause();
            cubo3.pause();
            cubo4.pause();
            cubo5.pause();
        });

        gsap.to('#selector-dimensiones', {
            duration:3,
            y: 0,
            ease: "none",
            stagger: 1,
            scrollTrigger:{
                // scroller: ".containerScroll",
                trigger: '#selector-dimensiones',
                start: 'top bottom',
                end: 'center top',
                // markers:true,     
                scrub: 1,
                toggleActions: 'restart pause reverse reset'
            }
        })
        
        gsap.to('#selector-dimensiones', {
            duration:1,
            ease: "none",
            opacity: 1,
            stagger: 1,
            scrollTrigger:{
                // scroller: ".containerScroll",
                trigger: '#selector-dimensiones',
                start: '20% 95%',
                end: '35% 90%',
                // markers:true,     
                scrub: 1,
                toggleActions: 'restart pause reverse reset'
            }
        })

    }, [dimVivir])


  return (
    <section id="selector-dimensiones">
        <div class="todo">
            <div id="dim-pensar">
                <div id="circulo"></div>
                <h2><strong>PENSAR</strong>con inteligencia expandida</h2>
                <a href="pensar.html" target="_parent">explorar</a>
            </div>
            <div id="dim-crear">
                <div id="cubo">
                    <div class="cara frente"></div>
                    <div class="cara atras"></div>
                    <div class="cara arriba"></div>
                    <div class="cara abajo"></div>
                    <div class="cara izquierda"></div>
                    <div class="cara derecha"></div>
                </div>
                <h2><strong>CREAR</strong>con herramientas digitales</h2>
                <a href="crear.html" target="_parent">explorar</a>
            </div>
            <div id="dim-vivir" ref={dimVivir}>
                <div id="cubo" ref={cubo}>
                    <div class="cara frente" ref={frente}></div>
                    <div class="cara atras" ref={atras}></div>
                    <div class="cara arriba" ref={arriba}></div>
                    <div id="circulo"></div>
                    <div class="cara abajo" ref={abajo}></div>
                    <div class="cara izquierda" ref={izquierda}></div>
                    <div class="cara derecha" ref={derecha}></div>
                </div>
                
                <h2><strong>VIVIR</strong>inmersos en la cultura digital</h2>
                <a href="vivir.html" target="_parent">explorar</a>
            </div>
        </div>
    </section>
  );
}

export default Dimensiones;


