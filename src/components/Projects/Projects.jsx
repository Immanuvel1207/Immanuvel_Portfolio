import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/example/project',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive and dynamic portfolio website to showcase projects and skills.',
      image: 'project2.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      demoLink: 'https://portfolio.example.com',
      githubLink: 'https://github.com/example/portfolio',
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'A feature-rich blogging platform with markdown support.',
      image: 'project3.jpg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://blog.example.com',
      githubLink: 'https://github.com/example/blog',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-showcase">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3>{project.title}</h3>
              </div>
              {/* Back Side */}
              <div className="card-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
