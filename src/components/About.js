import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <p>I am a passionate web developer with a background in computer science.</p>
            <h3>Education</h3>
            <ul>
                <li>Bachelor's in Computer Science from KL University</li>
                <li>Master's in Software Engineering</li>
            </ul>
            <h3>Professional Experience</h3>
            <ul>
                <li>Front-End Developer at Tech Company</li>
                <li>Web Developer Intern at Startup</li>
            </ul>
        </section>
    );
}

export default About;
