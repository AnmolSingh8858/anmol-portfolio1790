function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "20px 80px",
        background: "rgba(8,18,47,0.85)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(96,165,250,0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      {/* LOGO */}
      <h2
        style={{
          color: "#ffffff",
          fontWeight: "800",
          margin: 0,
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#60a5fa";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#ffffff";
        }}
      >
        Anmol Singh
      </h2>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          gap: "35px",
        }}
      >
        {[
          ["About", "#about"],
          ["Skills", "#skills"],
          ["Experience", "#experience"],
          ["Projects", "#projects"],
          ["Contact", "#contact"],
        ].map(([title, link]) => (
          <a
            key={title}
            href={link}
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#60a5fa";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#cbd5e1";
              e.target.style.transform = "translateY(0px)";
            }}
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;