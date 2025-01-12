import { useState } from 'react';
import './Qualifications.css';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  const qualifications = {
    education: [
      {
        title: 'Bachelor of Technology in Information Technology',
        institution: 'Kongu Engineeering College, Perundurai',
        year: '2022 - 2026',
        // description: 'CGPA 9.5 with First Class Distinction and Honors in Data Science',
        description: 'CGPA 9.14',
      },
      {
        title: 'Higher Secondary Second Year',
        institution: 'Shri Maruthi Matric Hr Sec School',
        year: '2022',
        description: '95.33%',
      },
      {
        title: '10th standard',
        institution: 'Shri Maruthi Matric Hr Sec School',
        year: '2020',
        description: '99.6%',
      },
      
    ],
    experience: [
  {
    title: 'Java Internship',
    company: 'InternPe',
    year: '29 July - 25 Aug 2024',
    description: '',
  },
  {
    title: 'Android App Development Implant Training',
    company: 'NXTGEN Instruments',
    year: '11 Feb - 18 Feb 2024',
    description: '',
  },
  {
    title: 'Web Development Internship',
    company: 'Rinex Organization',
    year: 'Sept - Nov 2023',
    description: '',
  },
],

  };

  return (
    <section id="qualifications" className="qualifications section">
      <div className="container">
        <h2 className="section-title">Qualifications</h2>
        
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button 
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </div>
        
        <div className="timeline">
          {qualifications[activeTab].map((item, index) => (
            <div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
              key={index}
            >
              <div className="timeline-content">
                <span className="year">{item.year}</span>
                <h3 className="title">{item.title}</h3>
                <p className="institution">{item.institution || item.company}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;