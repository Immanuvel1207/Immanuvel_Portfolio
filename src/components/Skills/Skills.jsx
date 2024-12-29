import { useState } from 'react';
import './Skills.css';
import angular from '../../assets/images/icons/angular.svg';
import bootstrap from '../../assets/images/icons/bootstrap.png';
import c from '../../assets/images/icons/c-programming-language-seeklogo.svg';
import cpp from '../../assets/images/icons/c++.svg';
import css from '../../assets/images/icons/css.svg';
import flutter from '../../assets/images/icons/Flutter.svg';
import git from '../../assets/images/icons/Git.svg';
import github from '../../assets/images/icons/GitHub Colored.svg';
import html from '../../assets/images/icons/html.svg';
import java from '../../assets/images/icons/java.svg';
import javascript from '../../assets/images/icons/javascript.svg';
import matlab from '../../assets/images/icons/Matlab.svg';
import mongodb from '../../assets/images/icons/mongodb.svg';
import mysql from '../../assets/images/icons/mysql.svg';
import nodejs from '../../assets/images/icons/Node JS.svg';
import oracle from '../../assets/images/icons/oracle.svg';
import python from '../../assets/images/icons/python.svg';
import typescript from '../../assets/images/icons/typescript.svg';

const Skills = () => {

  const skills = {
    skillset: [
      { name: 'HTML', level: 90, image: html },
      { name: 'CSS', level: 85, image: css },
      { name: 'JavaScript', level: 85, image: javascript },
      { name: 'TypeScript', level: 80, image: typescript },
      { name: 'Python', level: 70, image: python },
      { name: 'Java', level: 75, image: java },
      { name: 'C', level: 65, image: c },
      { name: 'C++', level: 65, image: cpp },
      { name: 'Node.js', level: 75, image: nodejs },
      { name: 'MongoDB', level: 70, image: mongodb },
      { name: 'MySQL', level: 75, image: mysql },
      { name: 'Oracle', level: 70, image: oracle },
      { name: 'Angular', level: 60, image: angular },
      { name: 'Flutter', level: 55, image: flutter },
      { name: 'Matlab', level: 50, image: matlab },
      { name: 'Git', level: 85, image: git },
      { name: 'GitHub', level: 80, image: github },
      { name: 'Bootstrap', level: 75, image: bootstrap },
    ],
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        
          <>
            {/* <div className="skills-content">
              {skills.skillset.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div> */}

            <div className="skills-grid">
              {skills.skillset.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div>
                    <img src={skill.image} alt={`${skill.name} logo`} />
                  </div>
                  <span className="skill-card-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </>

      </div>
    </section>
  );
};

export default Skills;
