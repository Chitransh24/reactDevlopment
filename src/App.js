// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import './App.css';
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
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor='grey';  
      showAlert("Dark mode has been Enabled.", "success");
      setMode("dark");
    }                                          
    else {
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled.", "success");
      setMode("light");}
  };
  const toggleRed = () => { 
    if(customColor === "light"){
      document.body.classList.add("bg-danger")
      setCustomColor("dark");
    }
    else{
      document.body.style.backgroundColor = 'white';
      setCustomColor('light');
    }
  };
  return (
    <>
      <Navbar
        title="TextUtility"
        dropdown="Dropdown Menu"
        mode={mode}
        toggleMode={toggleMode}
        toggleRed= {toggleRed}
      />
      <Alert alert= {alert}/>
      <Textform heading="Enter Your text" text="Enter Text to analyze" showAlert = {showAlert} mode= {mode} />
      {/* <About/> */}
    </>
  );
}

export default App;
