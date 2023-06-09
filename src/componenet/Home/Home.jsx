import React from "react";
import video from "../../Assets/Clip.mp4";
import { IoSearch } from "react-icons/io5";
import './Home.css'
function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span className="largetext">
              <h1>Discover</h1>
              <h2>amazing startup</h2>
            </span>
            <span className="smalltext">
              Find great startups curated by our experts for investing.
            </span>
          </div>
          <div className="searchDiv">
            <input type="text" name="Search" className="searchbar" placeholder="Startup Name"/>
            <button className="searchicon">
              <IoSearch />
              <span>Search</span>
            </button>
          </div>
        </div>
     
    </div>
  );
}

export default Home;
