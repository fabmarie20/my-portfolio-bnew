// Education Page Component
// Displays my academic background including program name, school, and years attended.

export default function Education() {
  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h1>Education</h1>

      <div style={{ marginTop: "24px" }}>
        <h2>Centennial College</h2>
        <p><strong>Program:</strong> Computer Programming</p>
        <p><strong>Years:</strong> 2024 – Present</p>
        <p>
          Studying programming fundamentals, web development, databases, and software engineering.
          Building hands-on experience through labs and personal projects.
        </p>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h2>Holy Cross International college</h2>
        <p><strong>Credential:</strong> High School Diploma</p>
        <p><strong>Year Completed:</strong> 2019</p>
        <p>
          Completed coursework in mathematics, science, and technology, providing a strong foundation
          for further studies in software development.
        </p>
      </div>
    </section>
  );
}
