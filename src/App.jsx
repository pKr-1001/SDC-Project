import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Submain from "./components/Submain";
import Footer from "./components/Footer";
import HeaderExpanded from "./components/HeaderExpanded";

function App() {
    const [expanded, setExpanded] = useState(false)

    const example = expanded ? <HeaderExpanded/> : <Main/>
    const flip = () => {
        setExpanded(!expanded)
    }

  return (
    <>
        <Header flip={flip} />
        {example}
        {/* <Main />  */}
        {/* <Footer /> */}
        <Submain />
    </>
  );
}

export default App;
