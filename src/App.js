import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import { type } from '@testing-library/user-event/dist/type';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



// import About from './components/About';
function App() {
  const[mode,setmode]=useState('light')
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggle=()=>{
    if(mode=== 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark Theme Enabled','success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
     
      showAlert('Light Theme Enabled','success')
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggle={toggle} />
    <Alert alert={alert} />
    <div className="container my-3">
  
      <Routes>
        <Route path="/" element={<TextForm heading="TextUtils - Word Counter , Character Counter , Case Converter" mode={mode} showAlert={showAlert} />} />
        <Route path="/about*" element={<About mode={mode}/> } />
      </Routes>
      {/* <TextForm heading="Enter Your Text to analyze below" mode={mode} showAlert={showAlert} /> */}
    </div>
    
  </Router>
    
    </>
    
  );
}

export default App;
