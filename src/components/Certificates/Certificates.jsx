import { useState, useEffect } from 'react';
import './Certificates.css';
import phot from './bb.jpg';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      id: 1,
      title: 'Advanced Web Development',
      organization: 'Tech Institute',
      date: 'June 2023',
      credentialId: 'WD-2023-001',
      image: phot,
      skills: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Frontend Design',
      organization: 'Creative Academy',
      date: 'May 2023',
      credentialId: 'FD-2023-002',
      image: 'cert2.jpg',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    // Add more certificates as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="certificates" className="certificates section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificate-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>←</button>

          <div className="certificate-slider">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`certificate-card ${index === currentSlide ? 'active' : ''}`}
                style={{
                  transform: `translateX(-50%) translateX(${(index - currentSlide) * 100}%)`,
                  zIndex: index === currentSlide ? 1 : 0
                }}
              >
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className="certificate-info">
                  <h3>{cert.title}</h3>
                  <p className="organization">{cert.organization}</p>
                  <p className="date">{cert.date}</p>
                  <p className="credential">ID: {cert.credentialId}</p>
                  <div className="skills-list">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

