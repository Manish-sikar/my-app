import React from "react";

const Herosection = () => {
  return (
    <>
      <style>{`
        .hero-container {
          width: 100%;
          height: 100vh; /* always full viewport height */
          position: relative;
          overflow: hidden;
        }

        /* FULL BANNER IMAGE */
        .hero-bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;   /* full cover */
          object-position: center; 
        }

        /* Text overlay (optional) */
        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 5%;
          color: #0E5C58;
        }

        .hero-title {
          font-size: 42px;
          font-weight: 800;
          line-height: 1.3;
        }

        .hero-subtitle {
          font-size: 20px;
          margin-top: 18px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-container {
            height: 100vh; /* full height on mobile */
          }

          .hero-title {
            font-size: 26px;
          }

          .hero-subtitle {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="hero-container">

        <img
          src="/assets/image123.jpg"
          alt="Hero Background"
          className="hero.jpeg"
        />

        {/* Optional Text Overlay */}
        {/* <div className="hero-content">
          <h1 className="hero-title">
            A CSR initiative by Petronet LNG <br />
            with NHM Rajasthan & We Care
          </h1>
          <p className="hero-subtitle">
            A CSR initiative of Petronet LNG in association with the National Health Mission (Rajasthan) and We Care.
          </p>
        </div> */}

      </div>
    </>
  );
};

export default Herosection;
