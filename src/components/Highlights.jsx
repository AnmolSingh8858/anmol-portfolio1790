import { motion } from "framer-motion";

function Highlights() {
  const isMobile = window.innerWidth < 768;

  const highlights = [
    "Managed Azure Production Infrastructure",
    "Supported Business-Critical Applications",
    "Implemented Kubernetes Deployments",
    "Automated CI/CD Workflows using Jenkins",
    "Performed Backup & Disaster Recovery Operations",
    "Managed Linux Servers and Monitoring",
    "Built GenAI Applications using OpenAI",
    "Earned 5 Industry Certifications",
  ];

  return (
    <section
      id="highlights"
      style={{
        background: "#0b1437",
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
        PROFESSIONAL HIGHLIGHTS
      </h4>

      <h1
        style={{
          fontSize: isMobile ? "32px" : "48px",
          marginBottom: "20px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        What I Bring To The Table
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
        Key strengths and accomplishments gained through
        Cloud Engineering, DevOps practices, infrastructure
        automation and production support.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit,minmax(400px,1fr))",
          gap: "20px",
        }}
      >
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={!isMobile ? {
              scale: 1.02,
              x: 10,
            } : {}}
            style={{
              background: "#13214d",
              border: "1px solid #1e40af",
              borderRadius: "18px",
              padding: isMobile ? "18px" : "22px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: isMobile ? "35px" : "40px",
                height: isMobile ? "35px" : "40px",
                minWidth: isMobile ? "35px" : "40px",
                borderRadius: "50%",
                background: "#2563eb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: isMobile ? "16px" : "18px",
              }}
            >
              ✓
            </div>

            <h3
              style={{
                margin: 0,
                fontWeight: "500",
                fontSize: isMobile ? "16px" : "20px",
                lineHeight: "1.5",
              }}
            >
              {item}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
