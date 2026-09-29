import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p>What I Work With</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>Frontend Development</h3>
            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <h3>Programming</h3>
            <div className="skill-list">
              <span>Python</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend & Database</h3>
            <div className="skill-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
            </div>
            <p className="skill-note">Familiar</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🛠️</div>
            <h3>Tools</h3>
            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Vercel</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;