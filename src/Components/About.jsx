import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>I'm a passionate developer who enjoys building things for the web.</h3>

            <p>
              I'm Narendra Chary, a B.Tech graduate and aspiring software
              developer with a strong interest in frontend development.
              I enjoy creating responsive, user-friendly web applications
              and continuously improving my technical skills.
            </p>

            <p>
              I have hands-on experience with HTML, CSS, JavaScript, React, 
              and Python. Through my projects, I have also explored 
              backend development using Node.js, Express, and MySQL,
              which has helped me understand how frontend applications communicate with backend
              services and databases.
            </p>

            <p>
              I'm currently looking for an opportunity where I can apply
              my skills, learn from experienced developers, and contribute
              to real-world software projects.
            </p>
          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>B.Tech</p>
              </div>
            </div>

            <div className="highlight-card">
              <span>💻</span>
              <div>
                <h4>Focus</h4>
                <p>Frontend Development</p>
              </div>
            </div>

            <div className="highlight-card">
              <span>🚀</span>
              <div>
                <h4>Projects</h4>
                <p>Web Applications</p>
              </div>
            </div>

            <div className="highlight-card">
              <span>📚</span>
              <div>
                <h4>Learning</h4>
                <p>Always Improving</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;