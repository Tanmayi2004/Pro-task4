import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project One: <br></br> Personal Portfolio Website</h3>
          <p>
            This is a React portfolio website showcasing my skills and experience
            in web development. It allows me to highlight my projects and
            connect with potential clients or employers.
          </p>
        </div>
        <div className="project-item">
          <h3>Project Two:<br></br>To-Do List Application</h3>
          <p>
            This is a to-do list application built with React that helps users
            manage their tasks effectively. It features functionalities
            like adding, editing, and marking tasks as complete, along with a
            user-friendly interface.
          </p>
        </div>
        {/* Add more projects as needed with detailed descriptions */}
      </div>
    </section>
  );
};

export default Projects;
