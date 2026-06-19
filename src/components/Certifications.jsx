import az104 from "../assets/AZ-104.PNG";
import dp203 from "../assets/DP-203.png";
import az400 from "../assets/AZ-400.png";
import oracleAi from "../assets/oracle-ai.png";
import oracleDevops from "../assets/oracle-devops.PNG";

function Certifications() {
  const isMobile = window.innerWidth < 768;

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
        CERTIFICATIONS
      </h4>

      <h1
        style={{
          fontSize: isMobile ? "32px" : "48px",
          marginBottom: "20px",
          textAlign: isMobile ? "center" : "left",
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
          textAlign: isMobile ? "center" : "left",
          marginLeft: isMobile ? "auto" : "0",
          marginRight: isMobile ? "auto" : "0",
        }}
      >
        Industry-recognized certifications in Cloud Computing,
        DevOps Engineering, Data Engineering and Generative AI.
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
        {certifications.map((cert) => (
          <div
            key={cert.title}
            style={{
              background: "#13214d",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "30px",
              textAlign: "center",
              border: "1px solid #1e40af",
              transition: "all 0.3s ease",
              cursor: "pointer",
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
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
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width:
                  cert.title ===
                  "Oracle DevOps Professional"
                    ? isMobile
                      ? "140px"
                      : "180px"
                    : isMobile
                    ? "100px"
                    : "120px",

                height:
                  cert.title ===
                  "Oracle DevOps Professional"
                    ? isMobile
                      ? "140px"
                      : "180px"
                    : isMobile
                    ? "100px"
                    : "120px",

                objectFit: "contain",
                margin: "0 auto 20px",
              }}
            />

            <h3
              style={{
                color: "#ffffff",
                marginBottom: "10px",
                minHeight: isMobile ? "auto" : "60px",
                fontSize: isMobile ? "20px" : "22px",
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
