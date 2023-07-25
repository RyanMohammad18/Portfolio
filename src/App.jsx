import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Homes from "./containers/homes/Index";
import About from "./containers/about/Index";
import Resume from "./containers/resume/Index";
import Skills from "./containers/skills/Index";
import Portfolio from "./containers/portfolio/Index";
import Contact from "./containers/contact/Index";
import Navbar from "./components/navBar/Index";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleInHomePage = location.pathname === "/";

  return (
    <>


      {/* particle js */}

      {renderParticleInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />
     
      

      {/* main page content */}

      <Routes>
        
        <Route path="/" element={<Homes />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </>
  );
}

export default App;
