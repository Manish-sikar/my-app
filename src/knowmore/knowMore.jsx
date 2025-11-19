import React from "react";

const KnowMore = () => {
  return (
    <>
      <style>
        {`
        .know-wrapper {
          width: 100%;
          background: #f7f1eeff;
          padding: 60px 20px;
        }

        .know-title {
          text-align: center;
          color: #0E5C58;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 40px;
        }

        .content-box {
          max-width: 1100px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          line-height: 1.7;
          font-size: 17px;
          color: #333;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #0E5C58;
          margin-top: 25px;
        }

        .logo {
          width: 120px;
          height: auto;
          margin: 20px 0;
        }

        @media(max-width: 768px){
          .know-title {
            font-size: 28px;
          }
          .content-box {
            padding: 20px;
          }
        }
      `}
      </style>

      <div className="know-wrapper">
        <h2 className="know-title">About the Initiative</h2>

        <div className="content-box">

          {/* SAANJHI Section */}
          <h3 className="section-title">About Saanjhi</h3>
          <img src="/assets/Saanjhi (2).png" alt="Saanjhi" className="logo" />

          <p>
            <strong>Saanjhi</strong> Aims to create a nurturing environment where children can openly communicate their feelings and strengthen emotional resilience through therapeutic and artistic interventions. Throughout its journey, the festival has featured diverse experiences such as pet therapy, music therapy, cultural therapy, sports therapy, and several interactive modules designed to help children understand, release, and channel their emotions constructively.
          </p>

          <p>
            Through regular workshops, awareness sessions, mentorship programs, and cultural activities, 
            Saanjhi creates a platform where individuals can grow, learn, and uplift each other. 
            The goal of Saanjhi is to strengthen mental well-being among young people by fostering awareness, encouraging dialogue, and equipping students, teachers, and parents with tools to navigate emotional challenges with confidence.
          </p>

          <p>
            This initiative is supported by Petronet LNG, National Health Mission (Rajasthan), and 
            We Care—making it a strong collaborative effort focused on holistic community development.
          </p>


          {/* PETRONET LNG SECTION */}
          <h3 className="section-title">About Petronet LNG</h3>
          <img src="/assets/Lng.png" alt="Petronet LNG" className="logo" />

          <p>
            Petronet LNG Limited is one of India’s fastest-growing world-class companies in the energy sector. 
            The company has established India's first LNG receiving and regasification terminal at Dahej, 
            Gujarat with a current nominal capacity of 17.5 MMTPA, and another terminal at Kochi, Kerala 
            with a capacity of 5 MMTPA.
          </p>

          <p>
            Formed on April 2, 1998, Petronet LNG is a Joint Venture Company with 50% shareholding 
            from India's leading Oil & Gas PSUs—ONGC, IOCL, GAIL, and BPCL. The remaining 50% is held 
            by the public, FIIs, FPIs, and mutual funds.
          </p>

          <p>
            The company plays a key role in the development of infrastructure for the import, storage, 
            and regasification of Liquefied Natural Gas, contributing significantly to India’s energy 
            security and growth.
          </p>


          {/* WE CARE SECTION */}
          <h3 className="section-title">About We Care</h3>
          <img src="/assets/Wecare.png" alt="We Care" className="logo" />

          <p>
            We Care focuses on women empowerment, youth development health sanitation art Mental Health well-being and culture. 
            These areas play a crucial role in building resilient and socially connected communities.
          </p>

          <p>
            The youth programs involve school and college students through workshops, exhibitions, 
            film screenings, book sessions, and mentorships by experts, historians, and leaders. 
            These activities shape young minds and encourage personal development.
          </p>

          <p>
            The women-centric initiatives are designed for improving health, hygiene, mental well-being, 
            and personal growth. Sessions by specialists and experts help guide women toward a more 
            confident and empowered life.
          </p>

          <p>
            We Care also promotes Indian art, culture, and languages through musical concerts, 
            performances, talk shows, and exhibitions—celebrating India’s heritage with pride.
          </p>

        </div>
      </div>
    </>
  );
};

export default KnowMore;
