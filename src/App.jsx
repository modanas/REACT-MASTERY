import './App.css'
import About from './components/About'
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled","success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      {/* <Navbar title="Anas" aboutText="About"/> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} mode={mode} heading="Enter your text to analyze below"/>
        {/* <About /> */}
      </div>
    </>
  )
}

export default App
