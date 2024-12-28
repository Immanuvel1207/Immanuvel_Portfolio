import './About.css';
import phot from '../About/fulllength.png';
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img src={phot} alt="About Me" />
            </div>
          </div>
          
          <div className="about-text">
            <p className="about-description">
            A driven Full Stack Developer and third-year engineering student with a passion
             for creating innovative and user-friendly web applications. Skilled in React, Node.js,
              and MongoDB, I’ve worked on impactful.With a strong foundation in network programming and enterprise application development,
                I combine technical expertise with creativity to deliver seamless user experiences. 
                Dedicated to continuous learning.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
            
            <a href="cv.pdf" className="cv-button" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;