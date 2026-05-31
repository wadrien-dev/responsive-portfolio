import colorSharp from "../assets/img/color-sharp.png";

const skillGroups = [
  {
    title: "Backend Development",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "Maven",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      "Android SDK",
      "Android Studio",
      "Kotlin",
      "Java",
    ],
  },
  {
    title: "Testing and QA",
    skills: [
      "JUnit",
      "Espresso",
      "Debugging",
      "Validation",
      "Defect Documentation",
    ],
  },
  {
    title: "Tools and Methods",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Jenkins",
      "Agile",
      "Scrum",
      "SDLC",
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Technical Skills</h2>

              <p>
                A practical toolkit for building applications,
                troubleshooting issues, and supporting software quality.
              </p>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <article
                    className="skill-card"
                    key={group.title}
                  >
                    <h3>{group.title}</h3>

                    <div className="skill-tags">
                      {group.skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};