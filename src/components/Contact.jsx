import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Get In Touch</h2>

        <p className="contact-description">
          Software Engineer with experience in building secure payment systems,
          scalable microservices, and high-performance backend applications.
          Available for Software Engineer and Java Backend Developer roles.
        </p>

        <div className="contact-info">
          <MdEmail className="icon" />
          <a href="mailto:devraj8575b@gmail.com" className="email-link">
            devraj8575b@gmail.com
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/tarundev-x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tarun-dev-b43757215"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
