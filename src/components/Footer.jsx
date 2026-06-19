import { FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#050d24",
        color: "white",
        padding: "60px 40px",
        textAlign: "center",
        borderTop: "1px solid rgba(96,165,250,0.2)",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "15px",
          background:
            "linear-gradient(90deg,#ffffff,#60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Anmol Singh
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Cloud & DevOps Engineer
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "30px",
        }}
      >
        <a
          href="mailto:anmol.cloudops@gmail.com"
          style={{
            color: "#60a5fa",
            fontSize: "28px",
          }}
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/anmol-singh-0279b8229"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#60a5fa",
            fontSize: "28px",
          }}
        >
          <FaLinkedin />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#60a5fa",
            fontSize: "28px",
          }}
        >
          <FaFilePdf />
        </a>
      </div>

      <p
        style={{
          color: "#64748b",
        }}
      >
        Built with React + Vite
      </p>

      <p
        style={{
          color: "#64748b",
          marginTop: "10px",
        }}
      >
        © 2026 Anmol Singh. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;