import React, {useEffect} from 'react';
import './header.css';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import utopia from './../../images/marca_fbyb.svg';
import logoUtopia from './../../images/logo_utopia.svg';
// gsap.registerPlugin(ScrollTrigger);
// gsap.core.globals("ScrollTrigger", ScrollTrigger)

function Header(props) {

  const animatedPortadaSitio = React.useRef(null);

  useEffect(() => {
    
    gsap.to(animatedPortadaSitio.current, {
      duration:3,
      y: "-20vh",
      // ease: "none",
      opacity: 0,
      // stagger: 1,
      scrollTrigger:{
          // scroller: ".containerScroll",
          trigger: '.portada',
          start: '70% center',
          end: '110% center',
          markers:true,     
          scrub: 1,
          toggleActions: 'restart pause reverse reset'
      }
  })
  }, [animatedPortadaSitio])

  return (
    <div id="portada-sitio" ref={animatedPortadaSitio} class="portada">
        <img src={utopia} class="marca-fbyb" />
        <div>
            <div class="logo-utopia">
                <img src={logoUtopia} />
            </div>
            <div class="descripcion-utopia">
                <h1>Un espacio para vincularse con las<br /> tecnologías exponenciales desde el<br /> ámbito educativo. Para interrogarnos<br /> acerca del presente e imaginar el<br /> futuro desde diferentes ámbitos de<br /> la vida en sociedad.</h1>
            </div>           
        </div>
    </div>
  );
}

export default Header;


