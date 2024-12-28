import './Papers.css';

const Papers = () => {
  const papers = [
    {
      id: 1,
      title: 'Machine Learning in Web Development',
      conference: 'International Web Conference 2023',
      date: 'September 2023',
      venue: 'Virtual Conference',
      abstract: 'This paper explores the integration of machine learning algorithms in modern web applications...',
      findings: [
        'Improved performance metrics',
        'Enhanced user experience',
        'Reduced computational overhead'
      ],
      awards: ['Best Paper Award'],
      pdfLink: 'paper1.pdf',
      slidesLink: 'slides1.pdf'
    },
    // Add more papers as needed
  ];

  return (
    <section id="papers" className="papers section">
      <div className="container">
        <h2 className="section-title">Research Papers & Presentations</h2>
        
        <div className="papers-grid">
          {papers.map(paper => (
            <div key={paper.id} className="paper-card">
              <h3 className="paper-title">{paper.title}</h3>
              <div className="paper-meta">
                <p className="conference">{paper.conference}</p>
                <p className="date-venue">{paper.date} | {paper.venue}</p>
              </div>
              
              <div className="paper-content">
                <h4>Abstract</h4>
                <p className="abstract">{paper.abstract}</p>
                
                <h4>Key Findings</h4>
                <ul className="findings-list">
                  {paper.findings.map((finding, index) => (
                    <li key={index}>{finding}</li>
                  ))}
                </ul>
                
                {paper.awards.length > 0 && (
                  <div className="awards">
                    <h4>Awards</h4>
                    <ul className="awards-list">
                      {paper.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="paper-links">
                <a href={paper.pdfLink} className="paper-btn" target="_blank" rel="noopener noreferrer">
                  View Paper
                </a>
                <a href={paper.slidesLink} className="paper-btn" target="_blank" rel="noopener noreferrer">
                  View Slides
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Papers;