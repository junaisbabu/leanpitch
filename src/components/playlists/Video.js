import React from "react";
import Playlists from "./Playlists";
import { videoData } from "../../data/video_data/videoData";

function Video() {
  return (
    <div className="video-container">
      <Playlists data={videoData} heading={"Videos"} />
    </div>
  );
}

export default Video;
