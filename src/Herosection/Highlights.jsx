import React, { useState } from "react";

const Highlights = () => {
  // ✅ Define Hover State
  const [isHover, setIsHover] = useState(false);

  // ✅ Define Button Styles
  const styles = {
    heroBtn: {
      padding: "12px 24px",
      background: "#F97D63", // default orange
      color: "white",
      borderRadius: "8px",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s",
    },
    heroBtnHover: {
      background: "#0E5C58", // hover blue
      color: "white",
      transform: "scale(1.05)",
    },
  };

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        .highlights-wrapper {
          padding: 40px;
          background: #ebc5b4ff;
          text-align: center;
        }

        .section-title {
          font-size: 42px;
          color: #0E5C58;
          margin-bottom: 30px;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          justify-content: center;
        }

        .highlight-card {
          background: #fdf2d4;
          padding: 20px;
          border-radius: 12px;
          text-align: left;
        }

        .card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 10px;
        }

        .card-title {
          font-size: 26px;
          color: #0a0300ff;
          margin-top: 15px;
        }

        .free-entry {
          font-weight: bold;
          margin-top: 10px;
        }

        .bottom-buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        @media (max-width: 600px) {
          .bottom-buttons {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

      {/* HTML START */}
      <div className="highlights-wrapper">
        <h1 className="section-title">Highlights</h1>

        <div className="cards-container">
          {/* Dance */}
          <div className="highlight-card">
            <img src="/assets/hero1.jpeg" alt="dance" className="card-img" />
            <h2 className="card-title">Dance</h2>
            <p>
              Celebrating wellness through the power of dance, featuring expressive performances where children use rhythm, movement, and creativity to promote mental health awareness and emotional strength.
            </p>
          </div>

          {/* Dialogue */}
          <div className="highlight-card">
            <img src="/assets/hero2.jpeg" alt="dialogue" className="card-img" />
            <h2 className="card-title">Dialogue</h2>
            <p>
             Highlighting our commitment to nurturing young minds, this initiative brings forward children’s voices on emotional well-being echoing the simple yet powerful message, “It’s okay to feel, and it’s brave to share.
            </p>
          </div>

          {/* Discovery */}
          <div className="highlight-card">
            <img src="/assets/hero3.jpeg" alt="discovery" className="card-img" />
            <h2 className="card-title">Discovery</h2>
            <p>
              A journey of discovery toward emotional awareness, where children explore their inner world and remind us gently that “understanding ourselves is the beginning of true strength.
            </p>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="bottom-buttons">
          <button
            style={isHover ? { ...styles.heroBtn, ...styles.heroBtnHover } : styles.heroBtn}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Highlights;
