import React from "react";
import "./playlists.css";
import "../thumbnail/thumbnailLists.css";
import Thumbnail from "../thumbnail/Thumbnail";

function Playlists(props) {
  return (
    <div className="playlists-container container">
      <h1>{props.heading}</h1>
      <div className="thumbnail-lists">
        {props.data.map((data) => {
          return (
            <Thumbnail
              thumbnail={data.thumbnail}
              title={data.title}
              text={data.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Playlists;
