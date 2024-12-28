import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Immanuvel</h3>
          <p>Creating digital experiences with code and creativity</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-social">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Immanuvel. All rights reserved.</p>
        <button className="scroll-top" onClick={scrollToTop}>↑</button>
      </div>
    </footer>
  );
};

export default Footer;