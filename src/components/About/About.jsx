import './About.css';
import phot from '../About/fulllength.png';
import pdf from '../About/IMMANUVEL_R.pdf';
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
             Third-year engineering student and Full Stack Developer with a passion
             for creating innovative and user-friendly web applications. Skilled in React, Node.js,
              and MongoDB. With a strong foundation in network programming and enterprise application development,
                I combine technical expertise with creativity to deliver seamless user experiences. 
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label"><a href='#projects'>Projects Completed</a></span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label"><a href='#qualifications'>Internships</a></span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label"><a href='#certificates'>Certifications</a></span>
              </div>
            </div>
            
            <a href={pdf} target='_blank' className="cv-button" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;