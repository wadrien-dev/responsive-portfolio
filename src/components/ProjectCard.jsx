export const ProjectCard = ({
  title,
  description,
  tech,
  imgUrl,
  repoUrl,
  liveUrl,
}) => {
  return (
    <article className="proj-card">
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt={`${title} project preview`}
        />
      </div>

      <div className="proj-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <small>{tech}</small>

        <div className="proj-links">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};