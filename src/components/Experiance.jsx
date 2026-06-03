function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Professional Experience</h2>

      <div className="experience-card">
        <div className="experience-header">
          <h3>Software Engineer Trainee - Dev</h3>
          <span>Jan 2024 – Present</span>
        </div>

        <h4>Girmiti Software Pvt. Ltd.</h4>

        <div className="project-block">
          <h5>Client: Infineon Technologies | Project: Digital Wallet (SE)</h5>

          <ul>
            <li>
              Developed Spring Boot microservices for card tokenization and
              lifecycle management.
            </li>

            <li>Improved API performance using Redis caching.</li>

            <li>Integrated Visa and Mastercard payment platforms.</li>

            <li>Built secure mTLS communication using Spring WebClient.</li>

            <li>
              Implemented authentication using Spring Security and AWS Cognito.
            </li>

            <li>
              Improved observability through centralized logging and exception
              handling using Spring AOP.
            </li>
          </ul>
        </div>

        <div className="project-block">
          <h5>Client: Reliance Jio | Project: Digital Wallet (HCE)</h5>

          <ul>
            <li>
              Migrated monolithic applications to Microservices architecture.
            </li>

            <li>
              Developed REST APIs for wallet provisioning and device onboarding.
            </li>

            <li>Implemented Factory Design Pattern for payment routing.</li>

            <li>Enhanced reliability using JUnit and Mockito testing.</li>

            <li>
              Collaborated with UI, QA and DevOps teams for end-to-end delivery.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
