function Achievements() {
  const isMobile = window.innerWidth < 768;

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
        padding: isMobile ? "60px 20px" : "100px 80px",
      }}
    >
      <h4
        style={{
          color: "#3b82f6",
          letterSpacing: "2px",
          marginBottom: "10px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        ACHIEVEMENTS
      </h4>

      <h1
        style={{
          fontSize: isMobile ? "32px" : "48px",
          marginBottom: "20px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        Key Achievements
      </h1>

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          lineHeight: "1.8",
          marginBottom: "50px",
          textAlign: isMobile ? "center" : "left",
          marginLeft: isMobile ? "auto" : "0",
          marginRight: isMobile ? "auto" : "0",
        }}
      >
        Highlights from my journey in Cloud Engineering,
        DevOps, Infrastructure Automation and Production Support.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {achievements.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#13214d",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "30px",
              border: "1px solid #1e40af",
              transition: "0.3s",
              cursor: "pointer",
              textAlign: isMobile ? "center" : "left",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(37,99,235,0.25)";
              }
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
                fontSize: isMobile ? "34px" : "42px",
                marginBottom: "15px",
              }}
            >
              {item.number}
            </h1>

            <h3
              style={{
                marginBottom: "15px",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
                fontSize: isMobile ? "14px" : "16px",
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
