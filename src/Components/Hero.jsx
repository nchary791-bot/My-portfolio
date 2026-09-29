import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Narendra <span>Chary</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p className="hero-description">
            I build responsive and user-friendly web applications using
            modern frontend technologies. I'm passionate about learning,
            solving problems, and turning ideas into real-world projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            <span>NC</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;