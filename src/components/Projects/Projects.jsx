import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      image: 'project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/example/project',
      features: [
        'User authentication',
        'Real-time inventory updates',
        'Payment integration',
        'Admin dashboard'
      ]
    },
    // Add more projects
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects section">
      {/* Rest of the component... */}
    </section>
  );
};

export default Projects;