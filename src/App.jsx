import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Submain from "./components/Submain";
import Footer from "./components/Footer";
import HeaderExpanded from "./components/HeaderExpanded";
import React from 'react'

export let Context1 = React.createContext();

function App() {
    const [expanded, setExpanded] = useState(false)
    const [menuIcon, setMenuIcon] = useState(true)
    const [size, setSize] = useState({ width: window.innerWidth})
    const [toggle, setToggle] = useState(false)

    const main = expanded ? <HeaderExpanded/> : <Main/>

    const flip = () => {
        setExpanded(!expanded)
        setMenuIcon(!menuIcon)
    }

    // IF PIXEL IS BIGGER THAN 1279 IT TURNS
    useEffect(() => {
      const handleSize = () => {
        setSize({ width: window.innerWidth})
      }

      window.addEventListener('resize', handleSize)

      if (size.width >= 1480) {
        setToggle(true)
      } else {
        setToggle(false)
      }

      return () => {
        window.removeEventListener('resize',handleSize)
      }
    }, [size])

  return (
    <>
      <Context1.Provider value={{ menuIcon, toggle, flip }}>
        <Routes>
          <Route path="/" element ={
            <div>

              <Header flip={flip} menuIcon={menuIcon} toggle={toggle}/>
              {main}

              <Submain />
              {/* <Footer /> */}
            </div>
          }/>
        </Routes>
          </Context1.Provider>
    </>
  );
}

export default App;
