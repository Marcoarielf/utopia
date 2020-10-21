import React, {useEffect} from 'react';
import { gsap } from 'gsap';
import './header.css';
import utopia from './../../images/marca_fbyb.svg';
import logoUtopia from './../../images/logo_utopia.svg';

function Header() {
  const animated = React.createRef();

  useEffect(() => {
    gsap.to(animated.current, {opacity: 0, duration: 2})
  }, [animated])
  return (
    <div id="portada-sitio" class="portada">
        <img src={utopia} class="marca-fbyb" />
        <div>
            <div class="logo-utopia">
                <img src={logoUtopia} />
            </div>
            <div class="descripcion-utopia" ref={animated}>
                <h1>Un espacio para vincularse con las<br /> tecnologías exponenciales desde el<br /> ámbito educativo. Para interrogarnos<br /> acerca del presente e imaginar el<br /> futuro desde diferentes ámbitos de<br /> la vida en sociedad.</h1>
            </div>           
        </div>
    </div>
  );
}

export default Header;


