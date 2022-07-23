import React, { useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import img from "../assets/head_bg.png";
import img2 from "../assets/cutlery.png";
function Home() {
  const name = useRef(null);

  // const nameHandler = (event) => {
  //   event.preventDefault();
  //   console.log(name.current.value);
  //   name.current.value = "";
  // };
  return (
    <div className={classes.homeDiv}>
      <div className={classes.navBar}>
        <Link to="/" className={classes.imgLink}>
          <img src={img} alt="none" />
        </Link>
        <Link to="/" className={classes.title}>
          <h1 className={classes.foodTitle}>Food Court</h1>
        </Link>
      </div>
      <div className={classes.content}>
        <h3 className={classes.para}>Search The Cities for Restaurants</h3>
        <div className={classes.search}>
          <input
            type={"text"}
            className={classes.inputField}
            name="restaurantName"
            ref={name}
            required
          />
          <div className={classes.new}>
            <Link
              to="/restaurants"
              className={classes.searchBlock}
              style={{ display: "inline-block" }}
            >
              <div>
                <img src={img2} alt="none" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

/* <button className={classes.searchName}> */
