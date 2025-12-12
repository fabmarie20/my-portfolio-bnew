export default function About() {
  return ( // About Page Component
// Includes my name, photo, biography, and resume link

    <section>
      <h1>About Me</h1>

      {/* Profile Image */}
      <img 
        src="/images/me.jpg" 
        alt="Headshot of Your Name"
        style={{ width: "180px", borderRadius: "10px", marginBottom: "16px" }}
      />

      {/* About Text */}
      <p>
        My name is <strong>Your Name</strong>. I am a Computer Programming student at 
        Centennial College with a strong passion for building web applications, learning 
        new technologies, and creating user-friendly digital experiences.
      </p>

      <p>
        In my free time, I enjoy cooking, e-shopping, listening to music, watching series especially c-dramas, k-dramas and medieval love stories. 
        I am constantly improving my skills and 
        working on new projects to expand my portfolio.
      </p>

      {/* Resume Download Link */}
      <p>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Download my Resume (PDF)
        </a>
      </p>
    </section>
  );
}
