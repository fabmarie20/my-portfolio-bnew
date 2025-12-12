import React from 'react';

// Services Page Component
// Shows the services I offer such as web development, UI/UX design, or general programming.
// Helps visitors understand what skills I can provide.


const services = [
  {
    title: 'Web Development',
    description:
      'Building responsive web applications using HTML, CSS, JavaScript, and React.',
  },
  {
    title: 'Front-End UI',
    description:
      'Creating clean, user-friendly interfaces with attention to accessibility.',
  },
  {
    title: 'General Programming',
    description:
      'Writing clean, maintainable code in languages such as JavaScript and Java.',
  },
];

const Services = () => {
  return (
    <section>
      <h1>Services</h1>
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
        }}
      >
        {services.map((service) => (
          <article
            key={service.title}
            style={{
              border: '1px solid #ddd',
              padding: '16px',
              borderRadius: '8px',
            }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
