import React from "react";

const ProgramsPage = () => {
  return (
    <>
      <style>
        {`
        /* ---------------- Banner ---------------- */
        .program-banner {
          width: 100%;
          height: 330px;
          background-image: url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .program-banner::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
        }

        .program-banner h1 {
          position: relative;
          z-index: 2;
          padding: 18px 38px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 46px;
          font-weight: 700;
          border-radius: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border: 1px solid rgba(255,255,255,0.3);
          transition: 0.3s ease;
        }

        .program-banner h1:hover {
          transform: scale(1.06);
          background: rgba(255, 255, 255, 0.25);
        }

        /* ----------- Section ----------- */
        .program-section {
          max-width: 1250px;
          margin: auto;
          padding: 70px 20px;
        }

        /* ----------- Grid ----------- */
        .program-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        @media (max-width: 992px) {
          .program-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .program-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ----------- Card ----------- */
        .program-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 6px 25px rgba(0,0,0,0.1);
          border: 1px solid #e6e6e6;
          transition: 0.35s ease;
        }

        .program-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.15);
        }

        /* ----------- Image ----------- */
        .program-card img {
          width: 100%;
          border-radius: 14px;
          background: #f7f7f7;
          padding: 10px;
          object-fit: contain;
          aspect-ratio: 16 / 10;
          transition: 0.3s;
        }

        .program-card:hover img {
          transform: scale(1.04);
        }

        /* ----------- Text ----------- */
        .program-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: #0E5C58;
          margin-top: 16px;
        }

        .program-card p {
          font-size: 15px;
          margin-top: 10px;
          color: #555;
          line-height: 1.65;
        }
        `}
      </style>

      {/* ---------- Banner Section ---------- */}
      <div className="program-banner">
        <h1>Coming Soon</h1>
      </div>

      {/* ---------- Cards Section ---------- */}
      <div className="program-section">
        <div className="program-grid">

          <div className="program-card">
            <img src="/assets/Pt. Vishwa Mohan Bhatt (1).png" alt="Pt Vishwa Mohan Bhatt Ji" />
            <h3>Ms. Riri Trivedi</h3>
            <p>
              Performed in more than 80 countries, representing India globally.
             
            </p>
          </div>

          <div className="program-card">
            <img src="/assets/Pt. Vishwa Mohan Bhatt (2).png" alt="Musical Heritage" />
            <h3>Musical Heritage</h3>
            <p>
              His lifelong dedication has enriched India’s cultural heritage.
            </p>
          </div>

          <div className="program-card">
            <img src="/assets/Pt. Vishwa Mohan Bhatt.png" alt="Global Recognition" />
            <h3>Global Recognition</h3>
            <p>
               Grammy Award–winning music maestro and creator of the Mohan Veena.
            </p>
          </div>

          <div className="program-card">
            <img src="/assets/Untitled design (8).png" alt="Legacy" />
            <h3>Legacy for Future Generations</h3>
            <p>
              Inspiring young musicians to innovate and preserve classical arts.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProgramsPage;
