import React from "react";
import Playlists from "./Playlists";
import { PMSpeaksSeriesData } from "../../data/pm_speaks_series_data/PMSpeaksSeriesData";

function PMSpeaksSeries() {
  return (
    <div className="pmSpeaksSeries-container">
      <Playlists data={PMSpeaksSeriesData} heading={"PM Speaks Series"} />
    </div>
  );
}

export default PMSpeaksSeries;
