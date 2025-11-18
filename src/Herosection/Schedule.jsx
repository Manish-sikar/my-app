import React from "react";

const Schedule = () => {
  const leftData = [
    {
      time: "08:30 – 08:45 AM",
      title: "Reporting Time",
      desc: "Students report at the Registration Desk at the RIC Centre, outside Mini Audi 2.",
    },
    {
      time: "08:45 – 09:00 AM",
      title: "Inaugural Session Seating",
      desc: "Students settle down inside the auditorium. The heads of each school will ensure that students are seated quietly.",
    },
    {
      time: "09:00 – 09:02 AM",
      title: "Opening Remarks",
      desc: "Opening Remarks by Renu Ma’am",
    },
    {
      time: "09:02 – 09:05 AM",
      title: "About Saanjhi",
      desc: "Apra Kuchhal shares about Saanjhi – The Mental Health Festival",
    },
    {
      time: "09:05 – 09:10 AM",
      title: "Lamp Lighting & Prayer",
      desc: "Lamp lighting, accompanied by a prayer by students of IIS School",
    },
    {
      time: "09:10 – 09:20 AM",
      title: "Stage Performance",
      desc: "Skit by students of Palace School",
    },
    {
      time: "09:20 – 09:50 AM",
      title: "Panel Discussion",
      desc: "Panel Discussion - Opening remarks by Sandeep Sethi Sir",
    },
    {
      time: "10:00 – 11:00 AM",
      title: "Motivational Talk",
      desc: 'Talk by Mr. Ashwin Sanghi – “Power of Failure"',
    },
    {
      time: "11:15 – 12:15 PM",
      title: "Stress & Anxiety Management",
      desc: "Session on “Tools to Manage Stress & Anxiety” by Ms. Riri Trivedi",
    },
    {
      time: "12:20 PM",
      title: "Concluding Remarks",
      desc: "Concluding Remarks",
    },
    {
      time: "12:30 PM",
      title: "Departure",
      desc: "Departure of students",
    },
  ];

  const rightData = [
    {
      time: "08:30 – 08:45 AM",
      title: "Reporting Time",
      desc: "Students report at the Registration Desk at the RIC Centre, outside Mini Audi 2.",
    },
    {
      time: "08:45 – 09:00 AM",
      title: "Auditorium Settling",
      desc: "Students settle down inside the auditorium. The heads of each school will ensure that students are seated quietly.",
    },
    {
      time: "09:00 – 09:02 AM",
      title: "Opening Remarks",
      desc: "Opening Remarks by Renu Ma’am",
    },
    {
      time: "09:02 – 09:05 AM",
      title: "About Saanjhi",
      desc: "Apra Kuchhal shares about Saanjhi – The Mental Health Festival",
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
      desc: "Dance performance by students of Palace School",
    },
    {
      time: "09:30 – 10:30 AM",
      title: "Special Performance",
      desc: "Performance by Black Prince",
    },
    {
      time: "10:30 – 10:40 AM",
      title: "Lamp Lighting",
      desc: "Lamp lighting",
    },
    {
      time: "10:40 – 10:45 AM",
      title: "Song Performance",
      desc: "Song by IIS School",
    },
    {
      time: "10:45 – 11:30 AM",
      title: "Musical Talk",
      desc: "Talk by Pandit Vishwa Mohan Bhatt on “The Creation of a Tune - Samanvay”, followed by a short demonstration",
    },
    {
      time: "11:30 – 11:40 AM",
      title: "Stage Performance",
      desc: "Performance",
    },
    {
      time: "11:50 AM – 12:00 Noon",
      title: "Song Performance",
      desc: "Song by IIS School",
    },
    {
      time: "12:30 PM",
      title: "Departure",
      desc: "Departure of Students",
    },
  ];

  return (
    <>
      <style>{`
        .schedule-heading {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          letter-spacing: 1px;
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
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .event-box {
          padding: 20px;
          border-radius: 12px;
          background: white;
          border-left: 6px solid #F97D63;
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

          .column, .center-strip {
            width: 90%;
          }

          .center-strip {
            writing-mode: horizontal-tb;
            transform: none;
            font-size: 28px;
            padding: 10px;
          }
        }
      `}</style>

      <h2 className="schedule-heading">EVENT SCHEDULE 18 To 19 November</h2>

      <div className="schedule-wrapper">

        <div className="column">
          {leftData.map((item, index) => (
            <div className="event-box" key={index}>
              <div className="event-time">{item.time}</div>
              <div className="event-title">{item.title}</div>
              <div className="event-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="center-strip">EVENT SCHEDULE</div>

        <div className="column">
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
