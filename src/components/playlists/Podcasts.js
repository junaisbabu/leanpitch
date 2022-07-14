import React from "react";
import Playlists from "./Playlists";
import { podcastsData } from "../../data/podcasts_data/podcastsData";

function Podcasts() {
  return (
    <div className="podcasts-container">
      <Playlists data={podcastsData} heading={"Podcasts"} />
    </div>
  );
}

export default Podcasts;
