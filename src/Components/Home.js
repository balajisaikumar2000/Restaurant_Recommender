import React from "react";
import "./Home.css";

import img from "../assets/head_bg.png";
function Home() {
  return (
    <div className="homeDiv">
      <div className="navBar">
        <img src={img} alt="none" width />
        <h1>Food Court</h1>
      </div>
      <div className="content">
        <h3>Search The Cities for Restaurants</h3>
        <input type={"text"} />
      </div>
    </div>
  );
}
export default Home;
