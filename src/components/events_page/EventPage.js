import React from "react";
import "./eventPage.css";
import UpcomingPast from "../upcoming_past/UpcomingPast";
import '../thumbnail/thumbnailLists.css'
import Thumbnail from "../thumbnail/Thumbnail";

function EventPage({ title, padding, bgColor, comingsoon, data }) {
  return (
    <div className="eventPage-container container">
      <h1>{title}</h1>
      <div className="top-sec">
        <UpcomingPast padding={padding} bgColor={bgColor} />
        {comingsoon && (
          <button className="filter-toggle"><i class="bi bi-funnel-fill"></i>Filter By City</button>
        )}
      </div>
      <main className="eventPage-content">
        {comingsoon ? (
          <p>{comingsoon}</p>
        ) : (
          <div className="thumbnail-lists">
            {data.map((item) => {
                return <Thumbnail title={item.title} text={item.date} thumbnail={item.thumbnail} />
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default EventPage;
