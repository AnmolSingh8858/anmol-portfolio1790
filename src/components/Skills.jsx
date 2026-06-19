function Skills() {
  const skills = [
    { icon: "☁", name: "Azure", value: 90 },
    { icon: "🐳", name: "Docker", value: 85 },
    { icon: "☸", name: "Kubernetes", value: 80 },
    { icon: "🏗", name: "Terraform", value: 80 },
    { icon: "⚙", name: "Jenkins", value: 85 },
    { icon: "🐧", name: "Linux", value: 90 },
  ];

  return (
    <section
      id="skills"
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
        MY SKILLS
      </h4>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        Technologies I Work With
      </h1>

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          marginBottom: "50px",
          lineHeight: "1.8",
        }}
      >
        Experienced with cloud infrastructure,
        containerization, automation, monitoring
        and modern DevOps tools.
      </p>

      {skills.map((skill) => (
        <div
          key={skill.name}
          style={{
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span>
              {skill.icon} {skill.name}
            </span>

            <span>{skill.value}%</span>
          </div>

          <div
            style={{
              height: "12px",
              background: "#13214d",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: `${skill.value}%`,
                height: "100%",
                background:
                  "linear-gradient(90deg,#2563eb,#60a5fa)",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      ))}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "25px",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            background: "#13214d",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>☁ Cloud</h3>
          <p>Azure, Virtual Machines, Networking</p>
        </div>

        <div
          style={{
            background: "#13214d",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>⚙ DevOps</h3>
          <p>Docker, Kubernetes, Jenkins, Terraform</p>
        </div>

        <div
          style={{
            background: "#13214d",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🐍 Automation</h3>
          <p>Python Scripting & Infrastructure Automation</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;