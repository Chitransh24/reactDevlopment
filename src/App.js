// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor='grey';  
      setMode("dark");
    }
    else {
      document.body.style.backgroundColor='white';
      setMode("light");}
  };
  return (
    <>
      <Navbar
        title="Chitransh"
        dropdown="Dropdown Menu"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Textform heading="Enter Your text" text="Enter Text to analyze" mode= {mode} />
      {/* <About/> */}
    </>
  );
}

export default App;
