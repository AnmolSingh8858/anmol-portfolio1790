function Achievements() {
  const achievements = [
    {
      number: "15+",
      title: "Projects Delivered",
      desc: "Worked on cloud, DevOps, automation and production support projects.",
    },
    {
      number: "5",
      title: "Professional Certifications",
      desc: "Microsoft Azure and Oracle Cloud certifications.",
    },
    {
      number: "3+",
      title: "Years Experience",
      desc: "Cloud Engineering, DevOps and Infrastructure Operations.",
    },
    {
      number: "24/7",
      title: "Production Support",
      desc: "Monitoring, troubleshooting and maintaining business-critical systems.",
    },
    {
      number: "Azure",
      title: "Cloud Platform",
      desc: "Hands-on experience with Azure infrastructure and services.",
    },
    {
      number: "CI/CD",
      title: "Automation",
      desc: "Implemented automated deployment and operational workflows.",
    },
  ];

  return (
    <section
      id="achievements"
      style={{
        background: "#08122f",
        color: "white",
        padding: "100px 80px",
      }}
    >
      <h4
        style={{
          color: "#3b82f6",
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        ACHIEVEMENTS
      </h4>

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Key Achievements
      </h1>

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          lineHeight: "1.8",
          marginBottom: "60px",
        }}
      >
        Highlights from my journey in Cloud Engineering,
        DevOps, Infrastructure Automation and Production Support.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {achievements.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#13214d",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #1e40af",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(37,99,235,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h1
              style={{
                color: "#60a5fa",
                fontSize: "42px",
                marginBottom: "15px",
              }}
            >
              {item.number}
            </h1>

            <h3
              style={{
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;