import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <h1 className="logo">Immanuvel</h1>
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#qualifications" className="nav-link" onClick={() => setIsMenuOpen(false)}>Qualifications</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#papers" className="nav-link" onClick={() => setIsMenuOpen(false)}>Papers</a></li>
            <li><a href="#certificates" className="nav-link" onClick={() => setIsMenuOpen(false)}>Certificates</a></li>
            <li><a href="#achievements" className="nav-link" onClick={() => setIsMenuOpen(false)}>Achievements</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
