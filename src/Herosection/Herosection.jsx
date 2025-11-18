import React from "react";

const styles = {
  heroContainer: {
    width: "100%",
    height: "100vh",
    backgroundImage: 'url("/assets/hero.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "250px",
    paddingLeft: "5%",
    paddingRight: "5%",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,0.55)",
    backgroundBlendMode: "lighten",
    position: "relative",
  },

  heroContent: {
    textAlign: "center",
    color: "#0E5C58",
    maxWidth: "650px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    margin: 0,
    lineHeight: 1.3,
  },

  subtitle: {
    fontSize: "20px",
    marginTop: "18px",
    lineHeight: 1.5,
    fontWeight: "500",
  },

  // ⭐ Left Corner Logo
  logo: {
    position: "absolute",
    left: "40px",
    top: "40px",
    width: "180px",
    height: "auto",
  },
};

const Herosection = () => {
  const isMobile = window.innerWidth <= 768;

  const responsiveStyles = {
    heroContainer: {
      ...styles.heroContainer,
      paddingTop: isMobile ? "110px" : "150px",
    },

    title: {
      ...styles.title,
      fontSize: isMobile ? "30px" : "42px",
    },

    subtitle: {
      ...styles.subtitle,
      fontSize: isMobile ? "16px" : "20px",
    },

    logo: {
      ...styles.logo,
      left: isMobile ? "15px" : "40px",
      top: isMobile ? "15px" : "40px",
      width: isMobile ? "120px" : "180px",
    },
  };

  return (
    <div style={responsiveStyles.heroContainer}>

      {/* ⭐ Left Corner Logo */}
      <img 
        src="/assets/Saanjhi (2).png"
        alt="Saanjhi Logo"
        style={responsiveStyles.logo}
      />

      <div style={styles.heroContent}>
        <h1 style={responsiveStyles.title}>
          A CSR initiative by Petronet LNG <br />
          with NHM Rajasthan & We Care
        </h1>

        <p style={responsiveStyles.subtitle}>
          A CSR initiative of Petronet LNG in association with the National
          Health Mission (Rajasthan) and We Care.
        </p>
      </div>
    </div>
  );
};

export default Herosection;
