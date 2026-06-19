import { motion } from "framer-motion";

function Experience() {
  const isMobile = window.innerWidth < 768;

  const experiences = [
    {
      date: "Apr 2025 - Present",
      role: "DevOps Engineer",
      company: "Netseems Ventures Pvt. Ltd.",
      description:
        "Managing Azure cloud infrastructure, Linux servers, monitoring, backups, disaster recovery, production support, troubleshooting and cloud operations.",
    },
    {
      date: "Jan 2024 - Apr 2025",
      role: "Cloud Engineer",
      company: "Netseems Ventures Pvt. Ltd.",
      description:
        "Worked on CI/CD pipelines, Docker containerization, Kubernetes deployments, Terraform automation, GitHub Actions and cloud infrastructure projects.",
    },
    {
      date: "Jul 2023 - Dec 2023",
      role: "Cloud Engineer Training",
      company: "Cloud & DevOps Learning Program",
      description:
        "Learned Azure Cloud, Linux Administration, Networking, Docker, Kubernetes, Terraform, Jenkins and Infrastructure Automation.",
    },
  ];

  return (
    <section
      id="experience"
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
        EXPERIENCE
      </h4>

      <h1
        style={{
          fontSize: isMobile ? "32px" : "42px",
          marginBottom: "60px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        Professional Journey
      </h1>

      <div
        style={{
          position: "relative",
          width: isMobile ? "100%" : "70%",
          margin: "0 auto",
        }}
      >
        {/* Timeline Line */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: "0",
              bottom: "0",
              width: "3px",
              background: "#2563eb",
            }}
          />
        )}

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "30px",
              paddingLeft: isMobile ? "0px" : "70px",
            }}
          >
            {/* Timeline Dot */}
            {!isMobile && (
              <div
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "8px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#60a5fa",
                  boxShadow:
                    "0 0 20px rgba(96,165,250,0.8)",
                }}
              />
            )}

            {/* Experience Card */}
            <div
              style={{
                background: "rgba(19,33,77,0.85)",
                backdropFilter: "blur(10px)",
                padding: isMobile ? "18px" : "25px",
                borderRadius: "18px",
                border:
                  "1px solid rgba(96,165,250,0.2)",
                boxShadow:
                  "0 0 20px rgba(37,99,235,0.15)",
              }}
            >
              <p
                style={{
                  color: "#60a5fa",
                  fontWeight: "600",
                  marginBottom: "10px",
                  fontSize: isMobile ? "14px" : "16px",
                }}
              >
                {exp.date}
              </p>

              <h2
                style={{
                  marginBottom: "5px",
                  fontSize: isMobile ? "22px" : "28px",
                }}
              >
                {exp.role}
              </h2>

              <h4
                style={{
                  color: "#cbd5e1",
                  marginBottom: "15px",
                  fontSize: isMobile ? "16px" : "18px",
                }}
              >
                {exp.company}
              </h4>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.8",
                  fontSize: isMobile ? "15px" : "16px",
                }}
              >
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
