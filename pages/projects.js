const Projects = () => {
  const info = require('../info.json');
  const skillsArr = [];
  const projectsArr = [];
  info.technical_skills.forEach((skill) => {
    skillsArr.push(<li key={skill}>{skill}</li>);
  });
  info.projects.forEach((project) => {
    projectsArr.push(
      <section className="project">
        <a href={project.link}>
          <h3>{project.title}</h3>
        </a>
        <h4>{project.description}</h4>
        <h4>About this project:</h4>
        <p>{project.narrative}</p>
      </section>
    );
  });
  return (
    <div>
      <h1>Projects</h1>
      <section id="tech-skills">
        <h3>Technical Skills</h3>
        <ul>{skillsArr}</ul>
      </section>
      {projectsArr}
    </div>
  );
};

export default Projects;
