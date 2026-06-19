import azure from "../assets/azure.png";
import terraform from "../assets/terraform.png";
import jenkins from "../assets/jenkins.png";
import kubernetes from "../assets/kubernetes.png";
import docker from "../assets/docker.png";
import python from "../assets/python.png";

import { FaGithub } from "react-icons/fa";
function Projects() {
  const projects = [
  {
    title: "Azure Production Infrastructure",
    logo: azure,
    tech: "Azure • VM • Backup • Monitoring",
    desc: "Designed and managed Azure production infrastructure including virtual machines, backup strategy, monitoring and disaster recovery.",
  },
  {
    title: "Terraform Infrastructure Automation",
    logo: terraform,
    tech: "Terraform • Azure • IaC",
    desc: "Automated cloud infrastructure provisioning using reusable Terraform modules and Infrastructure as Code practices.",
  },
  {
    title: "Jenkins CI/CD Pipeline",
    logo: jenkins,
    tech: "Jenkins • GitHub • CI/CD",
    desc: "Built automated build, test and deployment pipelines to improve software delivery and operational efficiency.",
  },
  {
    title: "Kubernetes Deployment",
    logo: kubernetes,
    tech: "Kubernetes • Docker",
    desc: "Deployed containerized applications on Kubernetes clusters with scalability, load balancing and high availability.",
  },
  {
    title: "Dockerized Applications",
    logo: docker,
    tech: "Docker • Linux",
    desc: "Containerized web applications and optimized deployment workflows using Docker and Linux environments.",
  },
  {
    title: "Python Automation",
    logo: python,
    tech: "Python • Automation",
    desc: "Developed automation scripts for monitoring, backups, server administration and infrastructure operations.",
  },

  ];

  return (
    <section
      id="projects"
      style={{
        background: "#0b1437",
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
        MY PROJECTS
      </h4>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        Featured Projects
      </h1>

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          marginBottom: "60px",
          lineHeight: "1.8",
        }}
      >
        Real-world cloud, DevOps and automation projects
        demonstrating my experience with Azure, Terraform,
        Kubernetes, Jenkins and Python.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#13214d",
              cursor: "pointer",
              transition: "0.3s",
              padding: "30px",
              borderRadius: "18px",
              transition: "0.3s",
              border: "1px solid #1e3a8a",
              
            }}
            onMouseEnter={(e) => {
  e.currentTarget.style.transform =
    "translateY(-10px)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform =
    "translateY(0px)";
}}
          >
            <img
  src={project.logo}
  alt={project.title}
  style={{
    width: "70px",
    height: "70px",
    objectFit: "contain",
    marginBottom: "20px",
    background: "white",
    padding: "8px",
    borderRadius: "12px",
  }}
/>
            <h3
              style={{
                color: "#60a5fa",
                marginBottom: "15px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                marginBottom: "15px",
                fontSize: "14px",
              }}
            >
              {project.tech}
            </p>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              {project.desc}
            </p>

            <button
  style={{
    background: "#2563eb",
    border: "none",
    color: "white",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600",
  }}
>
  <FaGithub />
  GitHub
</button>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;