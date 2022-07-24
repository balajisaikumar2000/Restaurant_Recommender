import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";

import classes from "./Home.module.css";
import img from "../assets/head_bg.png";
import img2 from "../assets/cutlery.png";
function Home() {
  // var name = useRef(null);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    // console.log("search:-", searchTerm);
    // console.log("from:=", value);
  };
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
          <div className={classes.searchInner}>
            <div className={classes.inpt}>
              <input
                type={"text"}
                className={classes.inputField}
                name="restaurantName"
                // ref={name}
                required
                value={value}
                onChange={onChange}
              />
            </div>
            <div className={classes.dropdown}>
              {data
                .filter((item) => {
                  const searchTerm = value.toString().toLowerCase();
                  const fullName = item.full_name.toString().toLowerCase();

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item.full_name)}
                    className={classes.dropdownRow}
                    key={item.full_name}
                  >
                    {item.full_name}
                  </div>
                ))}
            </div>
          </div>

          <div className={classes.new}>
            <Link
              to="/restaurants"
              state={{ value: value }}
              className={classes.searchBlock}
              style={{ display: "inline-block" }}
            >
              <div onClick={() => onSearch(value)}>
                <img src={img2} alt="none" className={classes.mobiImg} />
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
