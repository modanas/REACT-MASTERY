import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react';


function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  const [mode, setMode] = useState("light");
  return (
    <>
      {/* <Navbar title="Anas" aboutText="Fucker"/> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm mode={mode} heading="Enter your text to analyze below"/>
        {/* <About /> */}
      </div>
    </>
  )
}

export default App
