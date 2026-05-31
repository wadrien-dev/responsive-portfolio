export const ProjectCard = ({
  title,
  category,
  description,
  tech,
  imgUrl,
  repoUrl,
  liveUrl,
}) => {
  return (
    <article className="carousel-project-card">
      <div className="carousel-project-image">
        <img
          src={imgUrl}
          alt={`${title} project preview`}
        />

        <span className="carousel-project-category">
          {category}
        </span>
      </div>

      <div className="carousel-project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="carousel-project-tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="carousel-project-links">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-project-link"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};