function Projects() {
  const projects = [
    {
      title: "Serverless Car Booking Application",
      description:
        "Developed a fully serverless booking platform using AWS Lambda, DynamoDB, and Cognito. Designed an event-driven architecture to provide scalability, fault tolerance, and secure authentication.",
      tech: ["AWS Lambda", "DynamoDB", "Cognito", "AWS"],
      live: "your-project-link",
    },
    {
      title: "Microservices E-Commerce Platform",
      description:
        "Built a scalable e-commerce platform using Spring Boot microservices, Spring Cloud Gateway, Eureka Service Discovery, PostgreSQL, React, and Docker. Implemented JWT authentication, OTP verification, and centralized API routing.",
      tech: [
        "Spring Boot",
        "Microservice",
        "Spring Cloud",
        "React",
        "PostgreSQL",
        "Docker",
      ],
      github: "https://github.com/tarundev-x/E-COMMERSE",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Personal Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            {/* <p className="project-tech">{project.tech}</p> */}
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
