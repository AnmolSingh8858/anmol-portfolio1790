function CTA() {
  return (
    <section
      style={{
        background: "#0b1437",
        color: "white",
        padding: "120px 80px",
        textAlign: "center",
      }}
    >
      <h4
        style={{
          color: "#3b82f6",
          letterSpacing: "2px",
          marginBottom: "15px",
        }}
      >
        LET'S CONNECT
      </h4>

      <h1
        style={{
          fontSize: "52px",
          marginBottom: "25px",
        }}
      >
        Ready To Build Reliable
        <br />
        Cloud Infrastructure?
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "20px",
          lineHeight: "1.8",
          maxWidth: "800px",
          margin: "0 auto 40px",
        }}
      >
        Let's discuss Cloud Infrastructure,
        DevOps Automation, Kubernetes,
        Azure Solutions and Generative AI
        projects.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="mailto:anmol.cloudops@gmail.com"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "16px 35px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Contact Me
        </a>

        <a
          href="https://www.linkedin.com/in/anmol-singh-0279b8229"
          target="_blank"
          rel="noreferrer"
          style={{
            border: "2px solid #2563eb",
            color: "white",
            padding: "16px 35px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}

export default CTA;