// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [customColor , setCustomColor] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
      setAlert({
          msg: message,
          ty: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  };
  const toggleMode = (cls) => {
    if (mode === "light") {
      removeClasses();
      document.body.style.backgroundColor = '#042743';
      setInterval(() => {
        document.title = "Text Utility"
      }, 2000);
      showAlert("Dark mode has been Enabled.", "success");
      setMode("dark");
    }                                          
    else {
      removeClasses();
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled.", "success");
      setMode("light");}
  };
  const toggleRed = () => { 
    if(customColor === "light"){
      removeClasses();
      document.body.classList.add("bg-danger")
      setCustomColor("dark");
    }
    else{
      document.body.style.backgroundColor = 'white';
      removeClasses();
      setCustomColor('light');

    }
  };
  const toggleGreen = () => { 
    if(customColor === "light"){
      removeClasses();
      document.body.classList.add("bg-success")
      setCustomColor("dark");
    }
    else{
      document.body.style.backgroundColor = 'white';
      removeClasses();
      setCustomColor('light');

    }
  };
  const toggleBlue = () => { 
    if(customColor === "light"){
      removeClasses();
      document.body.classList.add("bg-primary");
      setCustomColor("dark");
    }
    else{
      document.body.style.backgroundColor = 'white';
      removeClasses();
      setCustomColor('light');

    }
  };
  const removeClasses = () => {
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-primary");

  }
  return (
    <>
        <Router>
      <Navbar
        title="TextUtility"
        dropdown="Dropdown Menu"
        mode={mode}
        toggleMode={toggleMode}
        toggleRed= {toggleRed}
        toggleBlue={toggleBlue}
        toggleGreen={toggleGreen}
      />
      <Alert alert= {alert} />
      <Routes>
         
         <Route exact path="/" element= {<Textform heading="Enter Your text" text="Enter Text to analyze" showAlert = {showAlert} mode= {mode} />} />
         
         <Route exact path="/about" element={<About mode= {mode} />}  /> 

       </Routes>
        </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
