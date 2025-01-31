import { useState, useEffect } from 'react';
import './Certificates.css';

// Import all images
import ArtificialIntelligence from './images/aif.jpg';
import BITPAPER from './images/BITPAPER-1.jpg';
import codechefpy from './images/codechefpy.jpg';
import deepLearning from './images/deeplearning.jpg';
import NVIDIA from './images/Immanuvel_Certificate _ NVIDIA-1.jpg';
import Ideathon from './images/immanuvelideathon-1.jpg';
import Rinex from './images/ir.jpg';
import AIfoundation from './images/iai.jpg';
import NLP from './images/Naturallanguageprocessing-1.jpg';
import signin_coding from './images/signin_coding.jpg';
import signin_quiz from './images/signin_quiz.jpg';
import teamllead from './images/Teamlead-43-1.jpg';
import infosysdbms from './images/infosysdbms.png';
import mlonramp from './images/mlonramp.png';
import monramp from './images/monramp.png';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    { id: 1, title: 'AI Foundation Certificate', organization: 'AI Academy', date: '2023', image: ArtificialIntelligence },
    { id: 2, title: 'Paper Presentation in Bannari Amman Institute of Technology', organization: 'Tech Community', date: '2023', image: BITPAPER },
    { id: 3, title: 'CodeChef Python Certificate', organization: 'CodeChef', date: '2023', image: codechefpy },
    { id: 4, title: 'Infosys Deep Learning Certificate', organization: 'AI Institute', date: '2023', image: deepLearning },
    { id: 5, title: 'NVIDIA Deep Learning Certification', organization: 'NVIDIA', date: '2023', image: NVIDIA },
    { id: 6, title: 'Ideathon runner up', organization: 'Hackathon Event', date: '2023', image: Ideathon },
    { id: 7, title: 'Rinex Web Development Internship', organization: 'Rinex Academy', date: '2023', image: Rinex },
    { id: 8, title: 'Infosys Introduction to AI Certification', organization: 'AI Institute', date: '2023', image: AIfoundation },
    { id: 9, title: 'Infosysy Natural Language Processing Certification', organization: 'ML Academy', date: '2023', image: NLP },
    { id: 10, title: 'SignIn Coding runner', organization: 'SignIn', date: '2023', image: signin_coding },
    { id: 11, title: 'SignIn Quiz winner', organization: 'SignIn', date: '2023', image: signin_quiz },
    { id: 12, title: 'SIH-23 Team Lead Certification', organization: 'Leadership Program', date: '2023', image: teamllead },
    { id: 13, title: 'Infosys DBMS Certification', organization: 'Infosys', date: '2023', image: infosysdbms },
    { id: 14, title: 'Machine Learning Onramp Certification', organization: 'Matlab', date: '2024', image: mlonramp },
    { id: 15, title: 'Matlab Onramp Certification', organization: 'Matlab', date: '2024', image: monramp }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
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