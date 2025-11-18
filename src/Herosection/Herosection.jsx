import React from "react";

const styles = {
  heroContainer: {
    width: "100%",
    height: "100vh",
    backgroundImage: 'url("/assets/Hero.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "250px",
    paddingLeft: "5%",
    paddingRight: "5%",
    boxSizing: "border-box",
  },

  heroContent: {
    textAlign: "center",
    color: "dark",
    maxWidth: "550px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "800",
    letterSpacing: "2px",
    margin: 0,
  },

  subtitle: {
    fontSize: "20px",
    marginTop: "20px",
    lineHeight: 1.4,
  },

  buttonsWrapper: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "center", // Center button
  },

  button: {
    padding: "12px 28px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  },

  btnPrimary: {
    background: "#F97D63", // Orange
    color: "white",
  },
};

const Herosection = () => {
  const isMobile = window.innerWidth <= 768;

  const responsiveStyles = {
    heroContainer: {
      ...styles.heroContainer,
      paddingTop: isMobile ? "110px" : "140px",
    },

    title: {
      ...styles.title,
      fontSize: isMobile ? "36px" : "48px",
    },

    subtitle: {
      ...styles.subtitle,
      fontSize: isMobile ? "18px" : "20px",
    },
  };

  // Hover state for the button
  const handleHover = (e) => {
    e.target.style.background = "#0E5C58"; // Blue on hover
  };

  const handleOut = (e) => {
    e.target.style.background = "#FF8C42"; // back to Orange
  };

  return (
    <div style={responsiveStyles.heroContainer}>
      <div style={styles.heroContent}>
        <h1 style={responsiveStyles.title}> </h1>

        <p style={responsiveStyles.subtitle}>
     
        </p>

        {/* CENTERED REGISTER BUTTON */}
     
      </div>
    </div>
  );
};

export default Herosection;
