import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Sign-In Project Presentation - 1st Prize',
      organization: 'KEC',
      year: '2024',
      description: 'Awarded 1st place for excellence in project presentation.',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Inception Day (Paper Presentation) - 1nd Prize',
      organization: 'KEC',
      year: '2024',
      description: 'Secured 1st place in the Inception day paper presentation competition.',
      icon: '📜'
    },
    {
      id: 3,
      title: 'Academic Excellence Award',
      organization: 'KEC',
      year: '2024',
      description: 'Recognized for outstanding academic performance.',
      icon: '🎓'
    },
    {
      id: 4,
      title: 'Ideathon (Project Presentation) - 2nd Prize',
      organization: 'KEC',
      year: '2024',
      description: 'Secured 2nd place in the Ideathon project presentation competition.',
      icon: '💡'
    },
    {
      id: 5,
      title: 'Sign-In Coding Competition - 2nd Prize',
      organization: 'KEC',
      year: '2023',
      description: 'Achieved 2nd place in a competitive coding event.',
      icon: '💻'
    },
    {
      id: 6,
      title: 'Ideathon (Project Presentation) - 2nd Prize',
      organization: 'KEC',
      year: '2023',
      description: 'Secured 2nd place in the Ideathon project presentation competition.',
      icon: '🚀'
    },

  ];

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-timeline">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className={`achievement-card ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-org">{achievement.organization}</p>
                <p className="achievement-year">{achievement.year}</p>
                <p className="achievement-desc">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
