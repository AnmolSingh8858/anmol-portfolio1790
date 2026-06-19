import az104 from "../assets/AZ-104.PNG";
import dp203 from "../assets/DP-203.png";
import az400 from "../assets/AZ-400.png";
import oracleAi from "../assets/oracle-ai.png";
import oracleDevops from "../assets/oracle-devops.PNG";

function Certifications() {
  const certifications = [
    {
      title: "Azure Administrator Associate",
      code: "AZ-104",
      provider: "Microsoft",
      image: az104,
    },
    {
      title: "Azure Data Engineer Associate",
      code: "DP-203",
      provider: "Microsoft",
      image: dp203,
    },
    {
      title: "DevOps Engineer Expert",
      code: "AZ-400",
      provider: "Microsoft",
      image: az400,
    },
    {
      title: "Oracle Generative AI Professional",
      code: "OCI Generative AI",
      provider: "Oracle",
      image: oracleAi,
    },
    {
      title: "Oracle DevOps Professional",
      code: "OCI DevOps",
      provider: "Oracle",
      image: oracleDevops,
    },
  ];

  return (
    <section
      id="certifications"
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
        CERTIFICATIONS
      </h4>

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Professional Certifications
      </h1>

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          lineHeight: "1.8",
          marginBottom: "60px",
        }}
      >
        Industry-recognized certifications in Cloud Computing,
        DevOps Engineering, Data Engineering and Generative AI.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {certifications.map((cert) => (
          <div
            key={cert.title}
            style={{
              background: "#13214d",
              borderRadius: "20px",
              padding: "30px",
              textAlign: "center",
              border: "1px solid #1e40af",
              transition: "all 0.3s ease",
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
            <img
  src={cert.image}
  alt={cert.title}
  style={{
    width:
      cert.title === "Oracle DevOps Professional"
        ? "180px"
        : "120px",

    height:
      cert.title === "Oracle DevOps Professional"
        ? "180px"
        : "120px",
    objectFit: "contain",
    marginBottom: "20px",
  }}
/>

            <h3
              style={{
                color: "#ffffff",
                marginBottom: "10px",
                minHeight: "60px",
              }}
            >
              {cert.title}
            </h3>

            <p
              style={{
                color: "#60a5fa",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              {cert.code}
            </p>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              {cert.provider}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;