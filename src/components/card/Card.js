import React from "react";
import "./card.css";

function Card({ logo, title, date, color }) {
  return (
    <div className="card" style={{backgroundColor: color}}>
      <div className="card-body training-card-body">
        <img className="card-image-top" src={logo} />
        <h5 className="card-title">{title}</h5>
        <div className="card-text">
          <span >Upcoming Training</span>
          <span >{date}</span>
        </div>

        <button className="btn">Register</button>
      </div>
    </div>
  );
}

export default Card;
