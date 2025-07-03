function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Репозиторий</a>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Демо</a>
      </div>
    </div>
  )
}

export default ProjectCard