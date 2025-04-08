import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import phot from '../Hero/22ITR035.png';
import { FaCode } from 'react-icons/fa6';
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Immanuvel</h1>
            <h2>Full Stack Developer</h2>
            <p>I create innovative web solutions to solve real-world problems.</p>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/immanuvel-r-336442259/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24}/>
              </a>
              <a href="https://github.com/Immanuvel1207" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24}/>
              </a>
              <a href="mailto:r.immanuvel12@gmail.com">
                <FaEnvelope size={24}/>
              </a>
              <a href="https://leetcode.com/u/Immanuvel12/" target="_blank">
                <FaCode size={24}/>
              </a>
              <a href="https://www.instagram.com/immanuvel.12/" target="_blank">
                <FaInstagram size={24}/>
              </a>
            </div>
            
            <a href='#contact'><button className="cta-button">Contact Me</button></a>
          </div>
          
          <div className="hero-image">
            <div className="blob-animation">
              <img src={phot} alt="Immanuvel" className="profile-photo" />
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <a href='#about'><div className="arrow"></div></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;