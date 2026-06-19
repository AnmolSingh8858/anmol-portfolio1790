import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import CTA from "./components/CTA";


function App() {
  return (
    <>
   

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Achievements />
      <Highlights />
      <Projects />
      <Certifications />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;