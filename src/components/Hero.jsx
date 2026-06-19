import profile from "../assets/image.png";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingLeft: isMobile ? "20px" : "40px",
        paddingRight: isMobile ? "20px" : "40px",
        paddingBottom: "80px",
        background: "#08122f",
        color: "white",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          gap: isMobile ? "30px" : "60px",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: isMobile ? "100%" : "60%",
            maxWidth: "700px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h3
            style={{
              color: "#3b82f6",
              fontSize: isMobile ? "22px" : "28px",
              marginBottom: "15px",
            }}
          >
            Hello, I'm
          </h3>

          <h1
            style={{
              fontSize: isMobile ? "42px" : "64px",
              fontWeight: "900",
              marginBottom: "15px",
              lineHeight: "1.1",
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
              fontSize: isMobile ? "26px" : "34px",
              fontWeight: "700",
              color: "#60a5fa",
              minHeight: "50px",
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
              fontSize: isMobile ? "18px" : "20px",
              lineHeight: "1.8",
              marginBottom: "35px",
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
              justifyContent: isMobile ? "center" : "flex-start",
              marginBottom: "35px",
            }}
          >
            <a
              href="mailto:anmol.cloudops@gmail.com"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "14px 24px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
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
                padding: "14px 24px",
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
                padding: "14px 24px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Resume
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div
            style={{
              display: "flex",
              gap: "18px",
              justifyContent: isMobile ? "center" : "flex-start",
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
                link: "https://github.com/AnmolSingh8858",
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
                  fontSize: "22px",
                  textDecoration: "none",
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
              gap: "15px",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
              marginBottom: "30px",
            }}
          >
            {[
              ["15+", "Projects"],
              ["3+", "Years Exp."],
              ["5", "Certifications"],
            ].map((item) => (
              <div
                key={item[1]}
                style={{
                  background: "#13214d",
                  padding: "18px",
                  borderRadius: "15px",
                  minWidth: isMobile ? "100px" : "140px",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    color: "#60a5fa",
                    margin: 0,
                  }}
                >
                  {item[0]}
                </h2>

                <p>{item[1]}</p>
              </div>
            ))}
          </div>

          {/* SKILLS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {[
              "Azure",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Jenkins",
              "Linux",
              "Python",
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

        {/* IMAGE */}
        <div
          style={{
            width: isMobile ? "100%" : "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={profile}
            alt="Anmol Singh"
            style={{
              width: isMobile ? "240px" : "420px",
              height: isMobile ? "240px" : "420px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "8px solid #2563eb",
              boxShadow:
                "0 0 80px rgba(37,99,235,0.6)",
              background: "#fff",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;