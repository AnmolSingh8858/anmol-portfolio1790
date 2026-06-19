import profile from "../assets/image.png";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
  id="home"
  style={{
    minHeight: "100vh",
    paddingTop: "70px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "80px",
    background: "#08122f",
    color: "white",
    position: "relative",
     overflow: "hidden",
  }}
>
      <div
  style={{
    display: "flex",
    gap: "60px",
    alignItems: "flex-start",
    justifyContent: "space-between",
    maxWidth: "1300px",
    width: "100%",
  }}
>
        {/* LEFT SIDE */}
       <div
  style={{
    width: "60%",
    maxWidth: "700px",
  }}
        >
          <h3
            style={{
              color: "#3b82f6",
              fontSize: "28px",
              marginBottom: "15px",
            }}
          >
            Hello, I'm
          </h3>

          <h1
            style={{
              fontSize: "64px",
              whiteSpace: "nowrap",
              fontWeight: "900",
              marginBottom: "15px",
              lineHeight: "1",
              background:
                "linear-gradient(90deg,#ffffff,#60a5fa,#2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ANMOL SINGH
          </h1>

          <div
            style={{
              fontSize: "34px",
              fontWeight: "700",
              color: "#60a5fa",
              minHeight: "60px",
              marginBottom: "25px",
            }}
          >
            <TypeAnimation
              sequence={[
                "Cloud Engineer",
                2000,
                "DevOps Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              lineHeight: "1.8",
              marginBottom: "35px",
              maxWidth: "700px",
            }}
          >
            Cloud Engineer with experience in Azure Cloud,
            Linux Administration, Infrastructure Automation,
            CI/CD Pipelines and Production Support.
            <br />
            <br />
            Passionate about building scalable cloud-native
            solutions using Docker, Kubernetes, Terraform,
            Jenkins and Generative AI.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <a
              href="mailto:anmol.cloudops@gmail.com"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Get In Touch
            </a>

            <a
              href="https://www.linkedin.com/in/anmol-singh-0279b8229"
              target="_blank"
              rel="noreferrer"
              style={{
                border: "2px solid #2563eb",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                border: "2px solid #475569",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Download Resume
            </a>
          </div>
          {/* SOCIAL ICONS */}
<div
  style={{
    display: "flex",
    gap: "18px",
    marginTop: "10px",
    marginBottom: "35px",
  }}
>
  {[
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/anmol-singh-0279b8229",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:anmol.cloudops@gmail.com",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/YOUR_GITHUB_USERNAME",
    },
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noreferrer"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "#13214d",
        border: "1px solid rgba(96,165,250,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#60a5fa",
        fontSize: "24px",
        textDecoration: "none",
        boxShadow: "0 0 15px rgba(37,99,235,0.2)",
      }}
    >
      {item.icon}
    </a>
  ))}
</div>

          {/* STATS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "35px",
            }}
          >
            <div
              style={{
                background: "#13214d",
                padding: "20px",
                borderRadius: "15px",
                minWidth: "140px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#60a5fa", margin: 0 }}>15+</h2>
              <p>Projects</p>
            </div>

            <div
              style={{
                background: "#13214d",
                padding: "20px",
                borderRadius: "15px",
                minWidth: "140px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#60a5fa", margin: 0 }}>3+</h2>
              <p>Years Exp.</p>
            </div>

            <div
              style={{
                background: "#13214d",
                padding: "20px",
                borderRadius: "15px",
                minWidth: "140px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#60a5fa", margin: 0 }}>5</h2>
              <p>Certifications</p>
            </div>
          </div>

          {/* SKILLS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {[
              "☁ Azure",
              "🐳 Docker",
              "☸ Kubernetes",
              "🏗 Terraform",
              "⚙ Jenkins",
              "🐧 Linux",
              "🐍 Python",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#13214d",
                  padding: "10px 18px",
                  borderRadius: "25px",
                  fontSize: "14px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
       <div
  style={{
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "-70px",
    marginTop: "80px",
  }}
>
          <img
  src={profile}
  alt="Anmol Singh"
  style={{
    width: "420px",
    height: "420px",
    objectFit: "contain",
    borderRadius: "50%",
    border: "10px solid #2563eb",
    boxShadow: "0 0 80px rgba(37,99,235,0.6)",
    background: "#ffffff",
    padding: "10px",
    
  }}
/>
        </div>
      </div>
    </section>
  );
}

export default Hero;