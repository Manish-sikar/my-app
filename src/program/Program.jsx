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
            <img src="/assets/Untitled design (8).png" alt="Legacy" />
            {/* <h3>Legacy for Future Generations</h3> */}
            <p>
              Ashwin Sanghi is one of India’s most celebrated authors, known for his gripping thrillers and mytho-fiction that blend deep research with razor-sharp storytelling. His bestselling Bharat Series has earned him a devoted readership and a reputation for turning history into irresistible page-turners. With an uncanny ability to weave ancient wisdom into modern narratives, he keeps audiences thinking long after the last page. At Saanjhi, he brings an inspiring session on The Power of Failure, offering insights that are as honest as they are transformative.
            </p>
          </div>
          <div className="program-card">
            <img src="/assets/Pt. Vishwa Mohan Bhatt (2).png" alt="Musical Heritage" />
            {/* <h3>Musical Heritage</h3> */}
            <p>
              Mandeep Ramana fondly known as Black Prince,is a rising star whose unique style and deep love for folk music have made him a favourite among today’s youth. Born in Ganganagar, Rajasthan, he sings in both Punjabi and Rajasthani, but it is Rajasthani folk that has truly shaped his identity. For him, singing in his mother tongue is not just an art form, but an emotion and an inseparable part of who he is.
            </p>
          </div>
          <div className="program-card">
            <img src="/assets/Pt. Vishwa Mohan Bhatt (1).png" alt="Pt Vishwa Mohan Bhatt Ji" />
            {/* <h3>Ms. Riri Trivedi</h3> */}
            <p>
              Riri Trivedi is a powerful voice in the mental health space, known for her compassionate approach and deep commitment to emotional well-being. As a psychologist and wellbeing educator, she works closely with young people, helping them understand their emotions, build resilience, and navigate life’s unseen struggles. Her sessions are warm, insightful, and grounded in real, lived experiences. At Saanjhi, Riri brings an open, uplifting conversation that encourages students to pause, heal, and rediscover their inner strength.

            </p>
          </div>



          <div className="program-card">
            <img src="/assets/Pt. Vishwa Mohan Bhatt.png" alt="Global Recognition" />
            {/* <h3>Global Recognition</h3> */}
            <p>
              Padma Bhushan recipent Pandit Vishwa Mohan Bhatt is a Grammy-winning musical legend, celebrated worldwide for creating the Mohan Veena, a remarkable fusion instrument that unites Indian ragas with Western resonance. Renowned for his soulful, meditative slide guitar style, he has redefined the global soundscape of Indian classical music. A distinguished disciple of Pandit Ravi Shankar, he has carried India’s musical heritage to the world with unmatched finesse. His presence at Saanjhi brings an aura of timeless artistry and serene brilliance.
            </p>
          </div>



        </div>
      </div>
    </>
  );
};

export default ProgramsPage;
