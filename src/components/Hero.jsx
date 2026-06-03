import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <img src="/profile.png" alt="Tarun Dev" className="profile-image" />

      <h1>Hi, I'm Tarun Dev</h1>

      <h2>Software Engineer | Java Backend Developer</h2>

      {/* <p className="hero-tagline">
        Building Secure Payment Systems, Microservices & Digital Wallet
        Solutions
      </p>

      <p className="hero-tech">
        Spring Boot • Microservices • AWS • Redis • Kafka • PostgreSQL • React
      </p> */}

      <div className="hero-buttons">
        <a href="/tarun_dev.pdf" download>
          <button>Download Resume</button>
        </a>

        <a href="#contact">
          <button>Contact Me</button>
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://github.com/tarundev-x"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/tarun-dev-b43757215"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Hero;
