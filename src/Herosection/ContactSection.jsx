import React from "react";

const ContactSection = () => {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        .contact-heading {
          text-align: center;
          font-size: 40px;
          font-weight: 700;
          color: #0E5C58;
          margin-top: 40px;
          margin-bottom: 20px;
        }

        a {
          text-decoration: none !important; /* UNDERLINE REMOVED */
        }

        .contact-wrapper {
          display: flex;
          justify-content: center;
          gap: 50px;
          padding: 40px 40px;
          background: #fffaf3;
          flex-wrap: wrap;
        }

        .map-box iframe {
          width: 550px;
          height: 400px;
          border: none;
          border-radius: 10px;
        }

        .details-box {
          max-width: 420px;
        }

        .title {
          font-size: 32px;
          font-weight: bold;
          color: #F97D63;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 20px;
          line-height: 1.6;
          color: #444;
          margin-bottom: 30px;
        }

        .subtitle span {
          color: #eec3a8ff;
          font-weight: bold;
        }

        /* WhatsApp Button */
        .whatsapp-btn {
          background: #0E5C58;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 10px;
          color: white;
          font-size: 18px;
          cursor: pointer;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          margin-bottom: 30px;
          transition: 0.3s;
        }

        .whatsapp-btn:hover {
          background: #eec3a8ff;
          transform: translateY(-3px);
        }

        .whatsapp-btn:focus,
        .whatsapp-btn:active {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

        @media (max-width: 900px) {
          .map-box iframe {
            width: 100%;
            height: 320px;
          }
        }
      `}</style>

      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-wrapper">

        {/* LEFT MAP */}
      <div className="map-box">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.6520886835253!2d75.80904377541414!3d26.864799263940893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67caad4191b%3A0xbe8ee198be2529da!2sRajasthan%20International%20Centre!5e0!3m2!1sen!2sin!4v1700290000000!5m2!1sen!2sin"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        {/* RIGHT DETAILS */}
        <div className="details-box">
          <h2 className="title">RAJASTHAN INTERNATIONAL CENTRE</h2>

          <p className="subtitle">
            18th & 19th November 2025 at <span>RIC, Jaipur</span>
          </p>

        <a href="mailto:wecarejaipur@gmail.com">
  <button className="whatsapp-btn">
    <span>📩</span> Mail Us!
  </button>
</a>

        </div>

      </div>
    </>
  );
};

export default ContactSection;
