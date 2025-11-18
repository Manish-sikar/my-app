import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const container = {
    width: "100%",
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const title = {
    fontSize: "30px",
    color: "#0E5C58",
    fontWeight: "600",
    marginTop: "20px",
    lineHeight: "1.4",
  };

  const associationText = {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "15px",
  };

  const logosRow = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap",
  };

  // ⭐ Updated to be wide & short
  const realWide = {
    width: "200px",     // bigger width
    height: "auto",
    objectFit: "contain",
  };

  const smallWide = {
    width: "140px",     // wider for small logos
    height: "auto",
    objectFit: "contain",
  };

  const button = {
    marginTop: "40px",
    padding: "15px 40px",
    border: "2px solid #080400ff",
    background: "transparent",
    color: "#070400ff",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  };

  const buttonHover = {
    background: "#F97D63",
    color: "white",
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div style={container}>
      
      {/* Saanjhi Logo */}
      <img src="/assets/Saanjhi (2).png" alt="Saanjhi" style={realWide} />

      {/* Heading */}
      <h1 style={title}>A CSR INITIATIVE OF</h1>

      {/* Petronet LNG Logo */}
      <img src="/assets/Lng.png" alt="Petronet LNG" style={realWide} />

      {/* Association Text */}
      <h2 style={associationText}>in association with</h2>

      {/* Bottom Logos */}
      <div style={logosRow}>
        <img src="/assets/National.png" alt="National Health Mission" style={smallWide} />
        <img src="/assets/Wecare.png" alt="We Care" style={smallWide} />
      </div>

      <Link to="/knowMore" style={{ textDecoration: "none" }}>
        <button
          style={hover ? { ...button, ...buttonHover } : button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          KNOW MORE
        </button>
      </Link>
    </div>
  );
};

export default AboutSection;
