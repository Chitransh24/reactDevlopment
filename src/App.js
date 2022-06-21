import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title = "Chitransh" dropdown = "Aur bta bhai"/>
      <Textform heading = "Enter Your text" text = "Enter Text to analyze"/>
      <About/>
    </>
  );
}

export default App;
