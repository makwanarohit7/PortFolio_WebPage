import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Home />
      
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
