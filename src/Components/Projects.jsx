
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Tasty Kitchen",
      category: "React Web Application",
      description:
        "A responsive food ordering web application where users can explore restaurants, view offers, browse food items, and manage their cart.",
      technologies: ["React", "JavaScript", "CSS", "React Router"],
      liveLink:
        "https://tasty-kitchen-a838h2fbm-narendra-chary.vercel.app/",
      githubLink: "https://github.com/nchary791-bot/Tasty-Kitchen.git",
    },
    {
      title: "Food Munch",
      category: "Food Web Application",
      description:
        "A food web application where users can explore different types of food and view food reviews and ratings.",
      technologies: ["HTML", "CSS"],
      liveLink:
        "https://food-munch-3b08hpyat-narendra-chary.vercel.app/",
      githubLink: "https://github.com/nchary791-bot/foodmunch.git",
    },
    {
      title:
        "Transforming Unstructured Data into Context-Aware Conversational Intelligence",
      category: "AI Project",
      description:
        "This project focuses on transforming unstructured data, such as text, audio, and images, into meaningful conversational intelligence using GPT and LLaMA.",
      technologies: ["GPT", "LLaMA"],
      
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <p>What I've Built</p>
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>
              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-content">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;