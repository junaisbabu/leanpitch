import React from "react";
import EventPage from "../events_page/EventPage";

function Meetups() {
  return (
    <div className="meetups-container">
      <EventPage title={'Our Meetups'} padding={'0 15px'} comingsoon={'Awesome meetups will be here soon!'} bgColor={'white'} />
    </div>
  );
}

export default Meetups;
