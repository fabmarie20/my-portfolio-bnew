import React from 'react';

 // Education Page Component
// Displays my academic background including program name, school, and years attended.

const education = [
  {
    school: 'Centennial College',
    degree: 'Diploma in Computer Programming',
    year: '2024 – Present',
    details:
      'Courses in web development, databases, and object-oriented programming.',
  },
  {
    school: 'Holy Cross International College',
    degree: 'GCE Advanced level',
    year: '2013 – 2018',
    details: 'Graduated with focus on Science',
  },
];

const Education = () => {
  return (
    <section>
      <h1>Education</h1>
      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {education.map((item) => (
          <li key={item.school} style={{ marginBottom: '16px' }}>
            <h2>{item.degree}</h2>
            <p><strong>{item.school}</strong></p>
            <p>{item.year}</p>
            <p>{item.details}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;

    