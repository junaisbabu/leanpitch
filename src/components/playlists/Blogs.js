import React from "react";
import Playlists from "./Playlists";
import { blogData } from "../../data/blogs_data/blogsData";

function Blogs() {
  return (
    <div className="blogs-container">
      <Playlists data={blogData} heading={"Blogs"} />
    </div>
  );
}

export default Blogs;
