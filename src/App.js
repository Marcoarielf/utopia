import React, { useEffect } from 'react';
// import './Home.css';
import locomotiveScroll from "locomotive-scroll";
import Nav from './components/nav/nav'
import Home from './pages/home/Home'
import Crear from './pages/crear/crear'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
    <>
    <Router>
        <Nav />
        <switch>
            <div className="scroll" ref={scrollRef}>
                <Route exact path="/">
                        <Home />
                </Route>
                <Route path="crear">
                        <Crear />
            </Route>
            </div>
        </switch>
    </Router>
    </>
  );
}

export default App;
