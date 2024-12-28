import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Best Developer Award',
      organization: 'Tech Company',
      year: '2023',
      description: 'Recognized for outstanding contributions to project development and team leadership.',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Innovation Excellence',
      organization: 'Industry Conference',
      year: '2022',
      description: 'Awarded for developing an innovative solution that improved system efficiency by 40%.',
      icon: '💡'
    },
    // Add more achievements as needed
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