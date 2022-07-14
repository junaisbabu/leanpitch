import React from "react";
import "./thumbnail.css";

function Thumbnail({ thumbnail, title, text }) {
  return (
    <div className="thumbnail-container">
      <div className="card" style={{ backgroundImage: `url(${thumbnail})` }}>
        <div className="card-body thumbnail-card-body">
          <h5 className="card-title">{title}</h5>
          <span className="card-text">{text}</span>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
