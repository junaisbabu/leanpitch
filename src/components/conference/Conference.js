import React from "react";
import "./conference.css";
import UpcomingPast from "../upcoming_past/UpcomingPast";

function Conference() {
  return (
    <div className="conference-container">
      <h1>Our Conference</h1>
      <UpcomingPast bgColor={'black'} />
      <article className="para-container">
        <p>
          Conferences are not just about learning from the speakers. It's also
          about meeting new people, learning from attendees, making connections,
          getting to know each other and being part of a community.
        </p>
        <p>
          Having hosted the conference online last year and after close
          consultation with the community, speakers, exhibitors and event
          partners, we have decided to host our next conference in person to
          make it more effective.
        </p>
        <p>We will be back with more information once COVID subsides</p>
      </article>
      <button className="btn notify-me">Notify Me<i class="bi bi-arrow-right"></i></button>
    </div>
  );
}

export default Conference;
