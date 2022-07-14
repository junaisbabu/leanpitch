import React, { useRef, useState } from "react";
import Conference from "../conference/Conference";
import Meetups from "../meetups/Meetups";
import Blogs from "../playlists/Blogs";
import PMSpeaksSeries from "../playlists/PMSpeaksSeries";
import Podcasts from "../playlists/Podcasts";
import Video from "../playlists/Video";
import Trainings from "../trainings/Trainings";
import Webinars from "../webinars/Webinars";
import "./banner.css";

const lists = [
  "Trainings",
  "Meetups",
  "Webinars",
  "Conference",
  "Videos",
  "PM Speak Series",
  "Blogs",
  "Podcast",
  "Be A Speaker",
  "Be A Volunteer",
  "About Us",
];

let Background_Image =
  "https://2020.productthinking.io/static/media/carousel_2.91ff5ee5.jpg";
function Banner() {
  const borderRef = useRef();
  const [currentEl, setCurrentEl] = useState();
  const [hoverEl, setHoverEl] = useState();

  const handleListHover = (e) => {
    e.target.style.backgroundColor = "gold";
    e.target.style.color = 'black';
    borderRef.current.style.display = "block";
    setCurrentEl(e.target.textContent);
    setHoverEl(e.target);
  };

  const handleListOut = (e) => {
    hoverEl.style.backgroundColor = "transparent";
    borderRef.current.style.display = "none";
    hoverEl.style.color = 'white';
    
  };

  const handleSectionHover = (e) => {
    hoverEl.style.backgroundColor = "gold";
    borderRef.current.style.display = "block";
    hoverEl.style.color = 'black';

  };

  const handleSectionOut = (e) => {
    hoverEl.style.backgroundColor = "transparent";
    borderRef.current.style.display = "none";
    hoverEl.style.color = 'white';
  };

  return (
    <div
      className="banner-container col-12"
      style={{ backgroundImage: `url(${Background_Image})` }}
    >
      <section className="left-sec col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <ul className="banner-items ">
          {lists.map((list) => {
            return (
              <li
                className="list-item"
                onMouseOver={handleListHover}
                onMouseLeave={handleListOut}
              >
                <h1>{list}</h1>
              </li>
            );
          })}
        </ul>
      </section>
      <section
        className="right-sec col-md-9 col-lg-9"
        onMouseOver={handleSectionHover}
        onMouseLeave={handleSectionOut}
        ref={borderRef}
      >
        {currentEl === "Trainings" && <Trainings />}
        {currentEl === "Webinars" && <Webinars />}
        {currentEl === "Videos" && <Video />}
        {currentEl === "PM Speak Series" && <PMSpeaksSeries />}
        {currentEl === "Blogs" && <Blogs />}
        {currentEl === "Podcast" && <Podcasts />}
        {currentEl === "Conference" && <Conference />}
        {currentEl === "Meetups" && <Meetups />}
      </section>
    </div>
  );
}

export default Banner;
