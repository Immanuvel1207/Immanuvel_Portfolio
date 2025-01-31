import React, { useState } from 'react';
import './Papers.css';
import inception from './images/inception.png';

const Papers = () => {
  const [expandedPaper, setExpandedPaper] = useState(null);

  const papers = [
    {
      id: 1,
      title: 'Movie Recommendation System',
      institution: `Bannari Amman Institute of Technology And <br>Kongu Engineering College`,
      abstract: 'This paper presents a movie recommendation system that leverages collaborative filtering techniques to suggest movies to users based on their preferences and ratings. By analyzing user data, the system recommends movies that align with the user’s interests, improving user engagement and satisfaction. The proposed model is implemented using machine learning algorithms to ensure accurate and relevant suggestions.',
      certificateImage: 'certificate1.jpg',
    },
    {
      id: 2,
      title: 'Health Monitoring System using 8051',
      institution: 'Coimbatore Institute of Technology And <br> Madras Institute of Technology',
      abstract: 'This paper discusses the design and development of a health monitoring system based on the 8051 microcontroller. The system monitors key health parameters such as heart rate, temperature, and blood pressure in real-time. The collected data is displayed on an LCD screen, and alerts are triggered when any parameter falls outside the predefined thresholds, ensuring timely medical intervention.',
      certificateImage: 'certificate2.jpg',
    },
    {
      id: 3,
      title: 'Quantum Computing',
      institution: 'Anna University Coimbatore',
      abstract: 'Quantum computing is an emerging field that promises to revolutionize information processing by using quantum bits (qubits). This paper explores the principles of quantum mechanics and their application to computational models. It discusses quantum algorithms such as Shor’s and Grover’s algorithms and the potential of quantum computers to solve complex problems more efficiently than classical computers.',
      certificateImage: 'certificate4.jpg',
    },
    {
      id: 4,
      title: 'Brain Tumor Detection',
      institution: 'Sri Krishna College of Engineering and Technology',
      abstract: 'Early detection of brain tumors is crucial for effective treatment and patient survival. This paper proposes a system that uses machine learning algorithms to detect brain tumors in MRI images. The system utilizes image processing techniques for feature extraction and applies classification models to accurately differentiate between benign and malignant tumors, aiding radiologists in diagnosis.',
      certificateImage: 'certificate5.jpg',
    },
    {
      id: 5,
      title: 'SmartBot for Museum Ticket Booking',
      institution: 'KEC',
      abstract: 'The SmartBot for museum ticket booking is a chatbot application designed in Telegram to simplify the ticket booking process. The bot interacts with users, offering museum options, session times, and seat availability. It provides real-time updates, assists with ticket reservation, and streamlines the entire booking process. The system is integrated with a backend database for managing bookings and user details.',
      certificateImage: 'certif icate7.jpg',
    },
    {
      id: 6,
      title: 'Face Liveliness Detection',
      institution: 'KEC',
      abstract: 'Face liveliness detection is an essential component of facial recognition systems to prevent spoofing attacks. This paper presents a system that detects facial liveliness by analyzing various cues such as eye movement, facial expression, and head pose. The proposed approach uses deep learning techniques to distinguish between live faces and photos/videos, enhancing the security of face recognition systems.',
      certificateImage: inception,
    },
  ];

  const toggleExpand = (id) => {
    setExpandedPaper(expandedPaper === id ? null : id);
  };

  return (
    <section id="papers" className="papers section">
      <div className="container">
        <h2 className="section-title">Research Papers & Presentations</h2>

        <div className="papers-grid">
          {papers.map((paper) => (
            <div key={paper.id} className="paper-card">
              <div className="paper-header" onClick={() => toggleExpand(paper.id)}>
                <h3 className="paper-title">{paper.title}</h3>
                <span className="toggle-icon">{expandedPaper === paper.id ? '↟' : '↡'}</span>
              </div>

              {expandedPaper === paper.id && (
                <div className="paper-details">
                  <div className="paper-meta">
                    <p className="institution" dangerouslySetInnerHTML={{ __html: paper.institution }}></p>
                  </div>

                  <div className="paper-content">
                    <h4>Abstract</h4>
                    <p className="abstract">{paper.abstract}</p>

                    {paper.certificateImage && (
                      <div className="certificate">
                        <h4>Certificate</h4>
                        <img style={{height: '300px',width: '400px;'}}  src={paper.certificateImage} alt="Certificate" className="certificate-img" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Papers;
