import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]= useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert('Dark mode has been enabled.','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('Light mode has been enabled.','success');
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextPlay" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>  
      {/* <Switch> */}
            {/* <Route path="/about">
              <About/>
            </Route> */}
            {/* <Route exact path="/"> */}
            <TextForm heading='Enter The Text To Analyze Below' mode={mode} showAlert={showAlert} /> 
            {/* </Route> */}
      {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
