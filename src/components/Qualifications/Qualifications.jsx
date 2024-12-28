import { useState } from 'react';
import './Qualifications.css';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  const qualifications = {
    education: [
      {
        title: 'Computer Science Degree',
        institution: 'University Name',
        year: '2018 - 2022',
        description: 'Bachelor of Science in Computer Science',
      },
      {
        title: 'Web Development Bootcamp',
        institution: 'Coding Academy',
        year: '2017',
        description: 'Intensive full-stack development program',
      },
    ],
    experience: [
      {
        title: 'Senior Developer',
        company: 'Tech Company',
        year: '2020 - Present',
        description: 'Leading development team and architecting solutions',
      },
      {
        title: 'Junior Developer',
        company: 'Startup Inc',
        year: '2018 - 2020',
        description: 'Full-stack development and maintenance',
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