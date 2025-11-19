import React from "react";

const Schedule = () => {
  const leftData = [
    { time: "08:30 – 08:45 AM", title: "Reporting Time" },
    { time: "08:45 – 09:00 AM", title: "Registration & Tea" },
    {
      time: "09:00 – 09:02 AM",
      title: "Introductory Remarks",
      desc: "Opening Remarks by Ms. Rainu Singh",
    },
    {
      time: "09:02 – 09:05 AM",
      title: "Opening Remarks",
      desc: "Ms. Apra Kuchhal share about Saanjhi – The Mental Health Festival",
    },
    {
      time: "09:05 – 09:10 AM",
      title: "Lamp Lighting & Prayer",
      desc: "Lamp lighting by Mr. Gajendra Singh, Pt. Vishwa Mohan Bhatt, Ms. Apra Kuchhal, Mr. Sandeep Sethi, Ms. Rainu Singh.",
    },
    {
      time: "09:10 – 09:20 AM",
      title: "Stage Performance",
      desc: "Registration on mental health and well-being for students of IIS School, Sitapura",
    },
    {
      time: "09:20 – 09:50 AM",
      title: "Panel Discussion",
      desc: "Panel Discussion - Opening remarks by Mr. Sandeep Sethi",
    },
    {
      time: "10:00 – 11:00 AM",
      title: "Motivational Talk",
      desc: "Talk by Mr. Ashwin Sanghi – “Power of Failure”",
    },
    {
      time: "11:15 – 12:15 PM",
      title: "Stress & Anxiety Management",
      desc: "Session on “Tools to Manage Stress & Anxiety” by Ms. Riri Trivedi",
    },
    { time: "12:20 PM", title: "Concluding Remarks", desc: "Concluding Remarks" },
    { time: "12:30 PM", title: "Departure", desc: "Departure of students" },
  ];

  const rightData = [
    { time: "08:30 – 08:45 AM", title: "Reporting Time" },
    { time: "08:45 – 09:00 AM", title: "Registration & Tea" },
    {
      time: "09:00 – 09:02 AM",
      title: "Introductory Remarks",
      desc: "Opening Remarks by Ms. Rainu Singh",
    },
    {
      time: "09:02 – 09:05 AM",
      title: "Opening Remarks",
      desc: "Ms. Apra Kuchhal shares about Saanjhi – The Mental Health Festival",
    },
    {
      time: "09:05 – 09:10 AM",
      title: "Song Performance",
      desc: "Song by students of Bhavan’s School",
    },
    {
      time: "09:10 – 09:20 AM",
      title: "Orchestra Performance",
      desc: "Orchestra performance by Palace School",
    },
    {
      time: "09:20 – 09:27 AM",
      title: "Dance Performance",
      desc: "Dance performance by students of Palace School (Tagore Wing)",
    },
    {
      time: "09:30 – 10:30 AM",
      title: "Special Performance",
      desc: "Performance by Black Prince",
    },
    {
      time: "10:30 – 10:40 AM",
      title: "Lamp Lighting",
      desc: "Lamp lighting by Mr. Gajendra Singh, Pt. Vishwa Mohan Bhatt, Ms. Apra Kuchhal, Mr. Sandeep Sethi, Ms. Rainu Singh.",
    },
    {
      time: "10:40 – 10:45 AM",
      title: "Song Performance",
      desc: "Song by IIS School",
    },
    {
      time: "10:45 – 11:30 AM",
      title: "Musical Talk",
      desc: "Talk by Pandit Vishwa Mohan Bhatt on “The Creation of a Tune - Samanvay”, followed by a demonstration",
    },
    {
      time: "11:30 – 11:40 AM",
      title: "Stage Performance",
      desc: "Registration on mental health and well-being for students of IIS School, Sitapura",
    },
    {
      time: "11:50 AM – 12:00 Noon",
      title: "Song Performance",
      desc: "Song by IIS, Shipra Path",
    },
    { time: "12:30 PM", title: "Departure", desc: "Departure of Students" },
  ];

  return (
    <>
      <style>{`
        .schedule-heading {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          margin-top: 40px;
          color: #0E5C58;
        }

        .schedule-wrapper {
          background: #FDECE7;
          padding: 60px 0;
          display: flex;
          justify-content: center;
          gap: 30px;
        }

        .column {
          width: 32%;
        }

        .day-heading {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #F97D63;
        }

        .event-box {
          padding: 20px;
          border-radius: 12px;
          background: white;
          border-left: 6px solid #F97D63;
          margin-bottom: 20px;
        }

        .event-time {
          font-weight: bold;
          color: #F97D63;
        }

        .event-title {
          font-size: 20px;
          font-weight: 700;
          margin-top: 10px;
          color: #333;
        }

        .event-desc {
          margin-top: 6px;
          font-size: 15px;
          color: #444;
        }

        /* Center strip */
        .center-strip {
          width: 10%;
          background: #F97D63;
          padding: 20px;
          border-radius: 20px;
          color: white;
          text-align: center;
          font-size: 38px;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .schedule-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .column {
            width: 90%;
          }

          .center-strip {
            width: 90%;
            writing-mode: horizontal-tb;
            transform: none;
            font-size: 26px;
            padding: 10px;
          }
        }
      `}</style>

      <h2 className="schedule-heading">Schedule – 18th & 19th November 2025 </h2>

      <div className="schedule-wrapper">

        {/* LEFT SIDE */}
        <div className="column">
          <h3 className="day-heading">18th November</h3>

          {leftData.map((item, index) => (
            <div className="event-box" key={index}>
              <div className="event-time">{item.time}</div>
              <div className="event-title">{item.title}</div>
              <div className="event-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* CENTER STRIP */}
        <div className="center-strip">EVENT SCHEDULE</div>

        {/* RIGHT SIDE */}
        <div className="column">
          <h3 className="day-heading">19th November</h3>

          {rightData.map((item, index) => (
            <div className="event-box" key={index}>
              <div className="event-time">{item.time}</div>
              <div className="event-title">{item.title}</div>
              <div className="event-desc">{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Schedule;
