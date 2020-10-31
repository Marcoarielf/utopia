import React from 'react';
import './footer.scss';
import imgFooter from '../../images/marca_fbyb.svg'

function Footer() {
  return (
    <footer>
          <div>
                <img src={imgFooter} class="marca-fbyb" />
                <p>©2020 Fundación Bunge y Born. Buenos Aires, Argentina<br /><span>info@fundacionbyb.org</span>  -  Política de privacidad</p>
          </div>
    </footer>
  );
}

export default Footer;
