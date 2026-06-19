function About() {
  return (
    <section
      id="about"
      style={{
        background: "#0b1437",
        color: "white",
        padding: "100px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h4
          style={{
            color: "#3b82f6",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          ABOUT ME
        </h4>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "25px",
          }}
        >
          Building Modern Cloud Infrastructure
        </h1>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "1.9",
            fontSize: "18px",
            maxWidth: "700px",
            marginBottom: "50px",
          }}
        >
          I am a Cloud Engineer and DevOps enthusiast with
          hands-on experience in Azure Cloud, Linux Administration,
          Backup Management, Monitoring, Infrastructure Automation,
          and Production Support.

          My expertise includes Docker, Kubernetes, Terraform,
          Jenkins, GitHub Actions, and CI/CD pipelines. I enjoy
          automating infrastructure, improving system reliability,
          and building scalable cloud-native solutions.
        </p>
<div
  style={{
    display: "flex",
    gap: "30px",
    marginBottom: "50px",
  }}
>
  <div>
    <h2 style={{ color: "#60a5fa" }}>3+</h2>
    <p>Years Experience</p>
  </div>

  <div>
    <h2 style={{ color: "#60a5fa" }}>15+</h2>
    <p>Projects Completed</p>
  </div>

  <div>
    <h2 style={{ color: "#60a5fa" }}>Azure</h2>
    <p>Cloud Platform</p>
  </div>
</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#13214d",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3 style={{ color: "#60a5fa" }}>☁ Cloud</h3>
            <p style={{ color: "#94a3b8" }}>
              Azure Infrastructure, Virtual Machines,
              Networking, Storage and Cloud Management.
            </p>
          </div>

          <div
            style={{
              background: "#13214d",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3 style={{ color: "#60a5fa" }}>⚙ DevOps</h3>
            <p style={{ color: "#94a3b8" }}>
              Docker, Kubernetes, Terraform,
              Jenkins, GitHub Actions and CI/CD.
            </p>
          </div>

          <div
            style={{
              background: "#13214d",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3 style={{ color: "#60a5fa" }}>🚀 Automation</h3>
            <p style={{ color: "#94a3b8" }}>
              Python scripting, infrastructure automation,
              monitoring and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;