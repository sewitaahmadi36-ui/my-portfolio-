import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <div>
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Education />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </div>
  );
}

export default App;