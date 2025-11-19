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
      desc: "Apra Kuchhal shares about Saanjhi – The Mental Health Festival",
    },
    {
      time: "09:05 – 09:10 AM",
      title: "Lamp Lighting & Prayer",
      desc: "Lamp lighting by Mr. Ashwin Sanghi,Ms. Riri Trivedi, Ms. Rainu Singh, Mr. Sandeep Sethi.Prayer by students of IIS School.",
    },
    {
      time: "09:10 – 09:20 AM",
      title: "Skit Performance ",
      desc: "Skit by students of Palace School",
    },
    {
      time: "09:20 – 10:20 AM",
      title: "Motivational Talk",
      desc: "A talk by Mr. Ashwin Sanghi – “Power of Failure”",
    },
      {
      time: "10:20 – 11:00 AM",
      title: "Panel Discussion",
      desc: "“Stress, Pressure, and Expectations: Finding a Healthy Balance in School Life” Panelist Ms. Prerna Sahani She completed her doctorate in Emotional Intelligence. She is currently the Executive Editor in Dainik Bhaskar and also the vertical head of City Bhaskar pan India,  Ms.Apra Kuchhal- Chairperson We Care & Festival Convenor Ms. Urvashi Warman - Principal, Palace School Dr. Swapna Chandra , Cultural CoordinatorMr. Sandeep Sethi Ms. Rainu Singh StudentsOpening remarks by Mr. Sandeep Sethi",
    },
    {
      time: "11:15 – 12:15 PM",
      title: "Session",
      desc: " A Session on “Tools to Manage Stress & Anxiety” by Ms. Riri Trivedi",
    },
    { time: "12:20 PM", title: "Concluding Remarks", desc: "Concluding Remarks by Ms.Rainu Singh." },
    { time: "12:30 PM", title: "Departure", desc: "Departure of students" },
  ];

  const rightData = [
    { time: "08:30 – 08:45 AM", title: "Registration & Tea", desc: "Students report at the Registration Desk at the RIC Centre, outside Mini Audi 2."},
    { time: "08:45 – 09:00 AM", title: "A Film by NCERT on Mental Health " },
    {
      time: "09:00 – 09:02 AM",
      title: "Introductory Remarks",
      desc: "Opening Remarks by Ms. Rainu Singh.",
    },
    {
      time: "09:02 – 09:05 AM",
      title: "Opening Remarks",
      desc: "Ms. Apra Kuchhal shares about Saanjhi – The Mental Health Festival.",
    },
    
    {
      time: "09:05 – 09:15 AM",
      title: "Orchestra Performance",
      desc: "Orchestra by students of Tagore International School.",
    },
    {
      time: "09:15 – 09:20 AM",
      title: "Dance Performance",
      desc: "Dance performance by Palace School.",
    },
    {
      time: "09:20 – 09:25 AM",
      title: "Mental Health Speech",
      desc: "Speech on Mental Health by Students of IIS School",
    },
    {
      time: "09:25 – 09:30 AM",
      title: "Song Performance",
      desc: "Song by Bhavan’s Munshi Marg ",
    },
    
    {
      time: "09:30 – 09:35 AM",
      title: "Song Performance",
      desc: "Song by IIS School ",
    },

    {
      time: "09:35 AM – 09:40 AM",
      title: "Song Performance",
      desc: "Song by Bhavan’s Pratap Nagar School",
    },
    {
      time: "09:40 – 09:45 AM",
      title: "Lamp Lighting",
      desc: "Lamp Lighting & Prayer Mr.Sandeep Sethi ⁠Mr.Rajnish singhvi Ms.Rainu Singh Ms. Apra Kuchhal Prayer by Ms.Geeta from MGD School",
    },
      {
      time: "09:45 AM – 09:50 AM",
      title: "Song Performance",
      desc: "Song Performance by MGD School.",
    },
    {
      time: "10:00 – 11:00 AM",
      title: "Talk & Performance ",
      desc: "Talk by Pandit Vishwa Mohan Bhatt on “The Creation of a Tune-Samanvay”, followed by performance.",
    },
     {
      time: "11:00 – 11:10 AM",
      title: "Address by T. Shubhmangla",
      desc: "Address by T Shubhmangla,Additional Mission Director of the National Health Mission.",
    },
       {
      time: "11:10 AM – 12:15 PM",
      title: "Song Performance",
      desc: "Sing the Stress Away- Musical Performance by Black Prince.",
    },
       {
      time: "12:20 AM – 12:25 PM",
      title: "Closing Remarks by Ms. Rainu Singh ",
      // desc: "Sing the Stress Away- Musical Performance by Black Prince.",
    },
    { time: "12:30 PM", title: "Departure", desc: "Departure of Students." },
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
