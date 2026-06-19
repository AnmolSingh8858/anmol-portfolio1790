function Contact() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      id="contact"
      style={{
        background: "#08122f",
        color: "white",
        padding: isMobile ? "60px 20px" : "100px 80px",
        textAlign: "center",
      }}
    >
      <h4
        style={{
          color: "#3b82f6",
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        CONTACT
      </h4>

      <h1
        style={{
          fontSize: isMobile ? "32px" : "42px",
          marginBottom: "20px",
        }}
      >
        Let's Work Together
      </h1>

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          margin: "0 auto 50px",
          lineHeight: "1.8",
        }}
      >
        Interested in Cloud Infrastructure,
        DevOps Automation or Azure projects?
        Let's connect and discuss how we can
        build reliable and scalable solutions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(3,1fr)",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#13214d",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid #1e3a8a",
          }}
        >
          <h2>📧</h2>
          <h3>Email</h3>
          <p style={{ color: "#94a3b8" }}>
            anmol.cloudops@gmail.com
          </p>
        </div>

        <div
          style={{
            background: "#13214d",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid #1e3a8a",
          }}
        >
          <h2>💼</h2>
          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/anmol-singh-0279b8229"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#60a5fa",
              textDecoration: "none",
            }}
          >
            View Profile
          </a>
        </div>

        <div
          style={{
            background: "#13214d",
            padding: "35px",
            borderRadius: "18px",
            border: "1px solid #1e3a8a",
          }}
        >
          <h2>🚀</h2>
          <h3>Availability</h3>

          <p style={{ color: "#94a3b8" }}>
            Open to Cloud & DevOps Opportunities
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "60px",
          paddingTop: "30px",
          borderTop: "1px solid #1e3a8a",
        }}
      >
        <p
          style={{
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          © 2026 Anmol Singh | Cloud Engineer | DevOps Engineer
        </p>
      </div>
    </section>
  );
}

export default Contact;
