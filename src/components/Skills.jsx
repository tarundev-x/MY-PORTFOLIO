function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Microservices",
        "REST APIs",
      ],
    },
    {
      title: "Database & Caching",
      skills: ["PostgreSQL", "Redis", "DynamoDB", "Hibernate"],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS EC2",
        "AWS Lambda",
        "AWS Cognito",
        "AWS S3",
        "Docker",
        "CI/CD",
      ],
    },
    {
      title: "Messaging & Integration",
      skills: [
        "Apache Kafka",
        "Spring Cloud Bus",
        "Firebase Cloud Messaging",
        "WebClient",
      ],
    },
    {
      title: "Testing & Quality",
      skills: ["JUnit 5", "Mockito", "WireMock", "SonarQube", "JMeter"],
    },
    {
      title: "Frontend & Tools",
      skills: ["React", "JavaScript", "HTML", "CSS", "Git", "Maven", "Postman"],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-badges">
              {category.skills.map((skill) => (
                <span className="badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
