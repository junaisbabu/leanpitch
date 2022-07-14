import React from "react";
import "./upcomingPast.css";

function UpcomingPast({ padding, bgColor }) {
  return (
    <div className="buttonGroupToggle-container">
      <div
        className="btn-group btn-group-toggle"
        style={
          bgColor === "white"
            ? { border: "1px solid black" }
            : { border: "1px solid white" }
        }
      >
        <button
          className={
            bgColor === "white"
              ? "bgColor-white btn active"
              : "bgColor-black btn active"
          }
          style={{ padding }}
        >
          Upcoming
        </button>
        <button
          className="btn"
          style={
            bgColor === "white"
              ? { color: "black", padding }
              : { color: "white", padding }
          }
        >
          Past
        </button>
      </div>
    </div>
  );
}

export default UpcomingPast;
