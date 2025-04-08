import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Projects.css';
import chatbotImage from '../../assets/images/projects/chatbotImage.png';
import employeeManagementImage from '../../assets/images/projects/employee-management.png';
import movieBookingImage from '../../assets/images/projects/movie-booking.png';
import sapCalculatorImage from '../../assets/images/projects/sap-calculator.png';
import expenseTrackerImage from '../../assets/images/projects/expense-tracker.png';
import recommendationSystemImage from '../../assets/images/projects/recommendation-system.png';
import grocery from '../../assets/images/projects/grocery.png';
import signin from '../../assets/images/projects/signin.png';
import task from '../../assets/images/projects/task.png';
import nanjappanstores from '../../assets/images/projects/nanjappanstores.png';



const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Multilingual Chatbot for Museum Ticket Booking',
      description: 'A chatbot to simplify museum ticket booking with multilingual support.',
      image: chatbotImage,
      technologies: ['Node.js', 'Telegram API', 'MongoDB'],
      demoLink: 'https://t.me/smart_muse_bot',
      iddemo : true,
    },
    {
      id: 2,
      title: 'Employee Management System',
      description: 'A system to manage employee details efficiently.',
      image: employeeManagementImage,
      technologies: ['React', 'Express.js', 'MongoDB'],
      demoLink: 'https://employee-management-system-x7bb.onrender.com/',
      info: 'Use admin admin for exploring',
      iddemo : true,

    },
    {
      id: 3,
      title: 'Grocery orders management system',
      description: 'A fully functional website where customers can order and checkout their orders.',
      image: grocery,
      technologies: ['React', 'MongoDB', 'Express'],
      demoLink: 'https://grocery-one-bay.vercel.app/',
      iddemo : true,

       
    },
    {
      id: 4,
      title: 'Movie Ticket Booking System Using Angular',
      description: 'A ticket booking platform with Angular for the front-end.',
      image: movieBookingImage,
      technologies: ['Angular', 'Express.js', 'MongoDB'],
      demoLink: '#',
      iddemo : false,

       
    },
    
    
    {
      id: 5,
      title: 'Expense Tracker Using Python',
      description: 'A Python application to track daily expenses.',
      image: expenseTrackerImage,
      technologies: ['Python'],
      demoLink: '#',
      iddemo : false,

       
    },
    {
      id: 6,
      title: 'Intelligent Movie Recommendation System Using Machine Learning',
      description: 'A recommendation system using machine learning to suggest movies.',
      image: recommendationSystemImage,
      technologies: ['Python', 'Scikit-Learn', 'Pandas'],
      demoLink: '#',
      iddemo : false,

       
    },
    
    {
      id: 7,
      title: 'SAP Point Calculator',
      description: 'A tool to calculate SAP points efficiently.',
      image: sapCalculatorImage,
      technologies: ['HTML', 'CSS','Node.js'],
      demoLink: '#',
      iddemo : false,
    },
    {
      id: 8,
      title: "SIGN'24",
      description: 'A website for KEC IT departments intra department competition.',
      image: signin,
      technologies: ['HTML', 'CSS','JS'],
      demoLink: 'https://karthikeyan-2004.github.io/SignIn2k24/',
      iddemo : true,

       
    },
    {
      id: 9,
      title: 'Task monitoring system',
      description: 'Task management website with individual dashboard for visualization of status of tasks.',
      image: task,
      technologies: ['React', 'MongoDB', 'Express'],
      demoLink: 'https://android-task-monitoring-system.onrender.com/',
      iddemo : true,

       
    },
    {
      id: 10,
      title: 'Diwali Chit Management',
      description: 'A flutter app for managing the diwali chit funds of 650+ customers.',
      image: nanjappanstores,
      technologies: ['Flutter', 'MongoDB', 'Express'],
      demoLink: '#',
      iddemo : false,

       
    },
    // {
    //   id: 10,
    //   title: 'Diwali Chit Management',
    //   description: 'A flutter app for managing the diwali chit funds of 650+ customers.',
    //   image: nanjappanstores,
    //   technologies: ['Flutter', 'MongoDB', 'Express'],
    //   demoLink: '#',
    //    
    // },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const getItemsPerPage = () => {
    if (window.innerWidth <= 480) return 1; // 1 project per page on small screens
    if (window.innerWidth <= 768) return 2; // 2 projects per page on tablets
    return 3; // Default for larger screens
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const offset = currentPage * itemsPerPage;
  const currentProjects = projects.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-showcase" style={{gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`, 
                                                justifyContent: 'center'}}>
        {currentProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                style={{ 
                  width: itemsPerPage === 1 ? '80%' : itemsPerPage === 2 ? '90%' : '100%', 
                  height: itemsPerPage === 1 ? '60%' : itemsPerPage === 2 ? '220px' : '200px'
                }}
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
                {project.iddemo && <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>}
                  <p style={{marginTop:'10px'}}>{project.info}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </section>
  );
};

export default Projects;
