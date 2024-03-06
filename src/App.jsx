import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Submain from "./components/Submain";
import Footer from "./components/Footer";

function App() {

  return (
    <>
        <Header />
        <Main /> 
        {/* <Footer /> */}
        <Submain />
    </>
  );
}

export default App;
