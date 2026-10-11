import Terminal from "./Terminal";
function Hero() {
  return (
    <section id="home">
      <div className="hero-layout">
        <div className="hero-content">
          <div className="status-badge">
           <span className="status-dot"></span>
           Aspiring Cybersecurity Professional
           </div>
          <p>Hello, I'm</p>

          <h1>Sewita Ahmadi</h1>

          <h2>Cybersecurity Student</h2>

          <p>
           I am interested in Cybersecurity, 
           technology, programming, and
           building secure digital solutions.
          </p>
          <p>
           Welcome to my personal portfolio website.
          </p>
          <div>
           <a href="#projects">View My Projects</a>
           <a href="#contact">Contact Me</a>
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}

export default Hero;