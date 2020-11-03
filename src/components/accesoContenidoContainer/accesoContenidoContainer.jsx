import React, {useEffect} from 'react';
import './accesoContenidoContainer.css';
import AccesoContenido from './accesoContenido/accesoContenido'
import imagen1 from './../../images/contenido_demo_1.jpg'
import imagen2 from './../../images/contenido_demo_2.jpg'
import imagen3 from './../../images/contenido_demo_3.jpg'
import imagen4 from './../../images/contenido_demo_4.jpg'
import { gsap } from 'gsap';
import $ from 'jquery';

function AccesoContenidoContainer() {

  useEffect(() => {

  gsap.to('#c-1', {
    duration:3,
    y: 0,
    ease: "none",
    opacity: 1,
    stagger: 1,
    scrollTrigger:{
        // scroller: ".containerScroll",
        trigger: '#c-1',
        start: 'top bottom',
        end: 'center 90%',
        //markers:true,     
        scrub: 1,
        toggleActions: 'restart pause reverse reset'
    }
})

gsap.to('#c-2', {
    duration:3,
    y: 0,
    ease: "none",
    opacity: 1,
    stagger: 1,
    scrollTrigger:{
        // scroller: ".containerScroll",
        trigger: '#c-2',
        start: 'top bottom',
        end: 'center 90%',
        //markers:true,     
        scrub: 1,
        toggleActions: 'restart pause reverse reset'
    }
})

gsap.to('#c-3', {
    duration:3,
    y: 0,
    ease: "none",
    opacity: 1,
    stagger: 1,
    scrollTrigger:{
        // scroller: ".containerScroll",
        trigger: '#c-3',
        start: 'top bottom',
        end: 'center 90%',
        //markers:true,     
        scrub: 1,
        toggleActions: 'restart pause reverse reset'
    }
})

gsap.to('#c-4', {
    duration:3,
    y: 0,
    ease: "none",
    opacity: 1,
    stagger: 1,
    scrollTrigger:{
        // scroller: ".containerScroll",
        trigger: '#c-4',
        start: 'top bottom',
        end: 'center 90%',
        //markers:true,     
        scrub: 1,
        toggleActions: 'restart pause reverse reset'
    }
})

gsap.to('#f-1', {
    duration:3,
    y: 0,
    ease: "none",
    opacity: 1,
    scrollTrigger:{
        // scroller: ".containerScroll",
        trigger: '#f-1',
        start: 'top bottom',
        end: 'center 80%',
        // markers:true,     
        scrub: 2,
        toggleActions: 'restart pause reverse reset'
    }
})
},[])

  return (
    <section id="bloque-contenidos-home" class="contenidos">
        <AccesoContenido idName="c-1" image={imagen1} description="¿Serán capaces las máquinas de pensar, comprender y actuar como las personas?" />
        <AccesoContenido idName="c-2" image={imagen2} description="¿Serán capaces las máquinas de pensar, comprender y actuar como las personas?" link="contenido-impresion3d"/>
        <AccesoContenido idName="c-3" image={imagen3} description="¿Serán capaces las máquinas de pensar, comprender y actuar como las personas?"/>
        <AccesoContenido idName="c-4" image={imagen4} description="¿Serán capaces las máquinas de pensar, comprender y actuar como las personas?"/>
    </section>
  );
}

export default AccesoContenidoContainer;


