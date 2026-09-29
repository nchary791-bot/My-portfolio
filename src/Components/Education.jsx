
import "./Education.css";

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Holy Mary Institute of Science and Technology",
      year: "2022 – 2026",
      details: "CGPA: 6.98",
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Kalashala",
      year: "2020 – 2022",
      details: "Percentage: 70%",
    },
    {
      degree: "Secondary School",
      institution: "Sri Vidya School",
      year: "Completed in 2020",
      details: "GPA: 9.2",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-container">
        <div className="section-heading">
          <p>My Academic Background</p>
          <h2>Education</h2>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-card" key={index}>
              <div className="education-marker">
                <span>{index + 1}</span>
              </div>

              <div className="education-details">
                <span className="education-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;