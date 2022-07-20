import React, { useRef } from "react";
import "./Home.css";
import img from "../assets/head_bg.png";
import sear from "../assets/search.png";
function Home() {
  const name = useRef(null);

  const nameHandler = (event) => {
    event.preventDefault();
    console.log(name.current.value);
    name.current.value = "";
  };
  return (
    <div className="homeDiv">
      <div className="navBar">
        <img src={img} alt="none" width />
        <h1>Food Court</h1>
      </div>
      <div className="content">
        <h3>Search The Cities for Restaurants</h3>
        <div className="search">
          <input
            type={"text"}
            className="inputField"
            name="restaurantName"
            ref={name}
            required
          />
          <button onClick={nameHandler}>Click</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
