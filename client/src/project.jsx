import React from 'react';
import './project.css';

// Projects Page Component
// Lists three highlighted projects with images, roles, descriptions, and outcomes.
// Demonstrates my experience and the work I have completed.

const projects = [
  {
    title: 'Student Portal App',
    image: '/images/project1.jpeg',
    role: 'Front-End Developer',
    description:
      'Built a React-based dashboard for students to view courses, grades, and announcements.',
    outcome: 'Improved usability and allowed students to quickly access key information.',
  },
  {
    title: 'To-Do List Web App',
    image: '/images/project2.jpeg',
    role: 'Full-Stack Developer',
    description:
      'Created a full-stack to-do app using Node.js and MongoDB with user authentication.',
    outcome: 'Helped users manage tasks more effectively with categories and due dates.',
  },
  {
    title: 'Personal Portfolio Site',
    image: '/images/project3.jpeg',
    role: 'Designer & Developer',
    description:
      'Designed and developed a responsive personal portfolio to showcase my projects.',
    outcome: 'Provided a professional online presence for potential employers.',
  },
];

const Projects = () => {
  return (
    <section>
      <h1>Projects</h1>
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
        }}
      >
        {projects.map((project) => (
          <article
            key={project.title}
            style={{
              border: '1px solid #ddd',
              padding: '16px',
              borderRadius: '8px',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', borderRadius: '6px', marginBottom: '8px' }}
            />
            <h2>{project.title}</h2>
            <p><strong>Role:</strong> {project.role}</p>
            <p>{project.description}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

    