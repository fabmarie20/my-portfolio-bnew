import { Link } from 'react-router-dom';
export default function Home() {
  return ( // Home Page Component
    // Main layout and styling for the home section

// Displays welcome message, mission statement, and navigation buttons.
// This is the first page users see when visiting the portfolio.

    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "700" }}>
        Welcome to My Portfolio
      </h1>

      <p style={{ fontSize: "1.3rem", lineHeight: "1.8", marginBottom: "20px" }}>
        Hi, I’m <strong>Francesca Mpolomena</strong>, a passionate{" "}
        <strong>Web / Software Developer</strong> focused on creating clean,
        user-friendly, and meaningful digital experiences.
      </p>

      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "40px" }}>
        <strong>Mission:</strong> To grow as a developer, learn new technologies,
        and build projects that solve real-world problems while strengthening my
        programming skills.
      </p>  
        

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link
          href="/about"
          style={{
            padding: "14px 28px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            fontSize: "1.1rem",
            border: "1px solid #ddd",
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Learn More About Me
        </Link>

        <Link
          href="/projects"
          style={{
            padding: "14px 28px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            fontSize: "1.1rem",
            border: "1px solid #ddd",
            textDecoration: "none",
            color: "#333",
            fontWeight: "600",
          }}
        >
          View My Projects
        </Link>
      </div>
    </section>
  );
}
