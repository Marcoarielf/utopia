import React from 'react';
import './dimensiones.css';

function Dimensiones() {
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
            <div id="dim-vivir">
                <div id="cubo">
                    <div class="cara frente"></div>
                    <div class="cara atras"></div>
                    <div class="cara arriba"></div>
                    <div id="circulo"></div>
                    <div class="cara abajo"></div>
                    <div class="cara izquierda"></div>
                    <div class="cara derecha"></div>
                </div>
                
                <h2><strong>VIVIR</strong>inmersos en la cultura digital</h2>
                <a href="vivir.html" target="_parent">explorar</a>
            </div>
        </div>
    </section>
  );
}

export default Dimensiones;


