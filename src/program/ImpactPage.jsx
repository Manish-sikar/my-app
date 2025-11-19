import React from "react";

const ImpactPage = () => {
  return (
    <>
      <style>{`
        .impact-container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        /* Top Image Box (Border Removed) */
        .impact-image-box {
          border: none;
          border-radius: 0;
          padding: 0;
          text-align: center;
          background: transparent;
        }

        .impact-image-box img {
          width: 100%;
          max-height: 260px;
          object-fit: contain;
          border: none;
        }

        /* Heading */
        .impact-heading {
          text-align: center;
          margin-top: 40px;
          font-size: 36px;
          font-weight: 700;
          color: #A62323;
          text-transform: uppercase;
        }

        /* Cards Section */
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .impact-card {
          border: 3px solid #C62828;
          border-radius: 12px;
          padding: 25px 20px;
          background: #fff;
          text-align: center;
          transition: 0.3s;
        }

        .impact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .impact-title {
          font-size: 26px;
          font-weight: 700;
          color: #C62828;
          margin-bottom: 12px;
        }

        .impact-number {
          font-size: 42px;
          font-weight: 900;
          color: #000;
        }

        .impact-text {
          margin-top: 8px;
          font-size: 17px;
          color: #333;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
          .impact-heading {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="impact-container">
        <h2 className="impact-heading">Our Festival Impact</h2>

        <div className="impact-image-box">
          <img src="/public/assets/Screenshot 2025-11-19 173948.png "alt="Our Footprints" />
        </div>

      
      </div>
    </>
  );
};

export default ImpactPage;
