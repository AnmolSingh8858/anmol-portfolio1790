import { motion } from "framer-motion";

import azure from "../assets/azure.png";
import terraform from "../assets/terraform.png";
import docker from "../assets/docker.png";
import kubernetes from "../assets/kubernetes.png";
import jenkins from "../assets/jenkins.png";
import python from "../assets/python.png";

function TechStack() {
  const techs = [
    {
      name: "Azure",
      logo: azure,
      desc: "Cloud Platform",
    },
    {
      name: "Terraform",
      logo: terraform,
      desc: "Infrastructure as Code",
    },
    {
      name: "Docker",
      logo: docker,
      desc: "Containerization",
    },
    {
      name: "Kubernetes",
      logo: kubernetes,
      desc: "Container Orchestration",
    },
    {
      name: "Jenkins",
      logo: jenkins,
      desc: "CI/CD Automation",
    },
    {
      name: "Python",
      logo: python,
      desc: "Automation & Scripting",
    },
  ];

  return (
    <section
      style={{
        background: "#08122f",
        color: "white",
        padding: "100px 80px",
      }}
    >
      {/* HEADING */}
      <h4
        style={{
          color: "#3b82f6",
          letterSpacing: "3px",
          marginBottom: "10px",
        }}
      >
        TECH STACK
      </h4>

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Technologies I Work With
      </h1>

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          lineHeight: "1.8",
          marginBottom: "50px",
        }}
      >
        Cloud, DevOps, Infrastructure Automation,
        Containerization and CI/CD technologies used
        throughout my professional journey.
      </p>

      {/* PREMIUM STATS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {[
          { value: "12+", label: "Technologies" },
          { value: "5+", label: "Certifications" },
          { value: "15+", label: "Projects" },
        ].map((item) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={item.label}
            style={{
              background: "#13214d",
              border: "1px solid #1e3a8a",
              borderRadius: "16px",
              padding: "18px 28px",
              minWidth: "180px",
              boxShadow:
                "0 0 20px rgba(37,99,235,0.15)",
            }}
          >
            <h2
              style={{
                color: "#60a5fa",
                margin: 0,
                marginBottom: "8px",
              }}
            >
              {item.value}
            </h2>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
              }}
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* TECH CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            style={{
              background: "#13214d",
              borderRadius: "18px",
              padding: "22px",
              textAlign: "center",
              border: "1px solid #1e3a8a",
              cursor: "pointer",
              boxShadow:
                "0 0 20px rgba(37,99,235,0.12)",
            }}
          >
            <motion.img
              whileHover={{
                rotate: 5,
                scale: 1.1,
              }}
              src={tech.logo}
              alt={tech.name}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                marginBottom: "15px",

                // removes ugly white feeling
                filter:
                  "drop-shadow(0 0 10px rgba(96,165,250,0.4))",
              }}
            />

            <h3
              style={{
                marginBottom: "8px",
                color: "#ffffff",
              }}
            >
              {tech.name}
            </h3>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                margin: 0,
              }}
            >
              {tech.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;