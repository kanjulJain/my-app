import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextFormj from './Components/TextForm';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [btnClr, setBtnClr] = useState('dark')

  const toggleGreenMode = () => {
    if (mode === 'light') {
      setMode('green');
      setBtnClr('success');
      document.body.style.backgroundColor = '#062E03'
      showAlert("green mode has been enabled", "success");
      document.title = "TextUtils-greenMode";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnClr('dark');
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-lightMode";
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnClr('primary');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-darkMode";
    }

    else {
      setMode('light');
      setBtnClr('dark');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-lightMode";
    }
  }
  return (
    <>
      <Navbar title="textUtils" AboutText="About" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <Routes>
          <Route path='/' element={<TextFormj heading="Enter the text below to analyze" mode={mode} btnClr={btnClr} showAlert={showAlert} />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </>

  );
}

export default App