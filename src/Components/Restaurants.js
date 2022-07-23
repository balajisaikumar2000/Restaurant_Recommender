import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cheerio from "cheerio";
import axios from "axios";

import classes from "./Restaurants.module.css";
import img from "../assets/head_bg.png";

function Restaurants() {
  const [conHtml, setConHtml] = useState("");
  useEffect(()=>{
    rawData();
  },[])

  const rawData = () => {
    return axios
      .get(
        "https://www.tripadvisor.in/Restaurants-g297628-Bengaluru_Bangalore_District_Karnataka.html"
      )
      .then((res) => {
        return res.data;
      });
  };
  const data = rawData();
  var restaurantsNames = [];
  var totalReviews = [];
  var Ratings = [];
  var cuisines = [];
  var feedbacks = [];

  data.then(function (result) {
    const $ = cheerio.load(result);
    $(".YtrWs .RfBGI").each(function () {
      restaurantsNames.push($(this).text().trim());
    });
    // console.log(restaurantsNames.slice(0, 11));

    $(".YtrWs .IiChw").each(function () {
      totalReviews.push($(this).text().trim());
    });
    // console.log(totalReviews.slice(0, 11));

    $(".YtrWs .LBKCf svg").each(function () {
      Ratings.push($(this).attr("aria-label"));
    });
    // console.log(Ratings.slice(0, 11));

    $(".YtrWs .bAdrM").each(function () {
      cuisines.push($(this).find(".ABgbd").html());
    });
    // console.log(cuisines.slice(0, 11));

    $(".YtrWs .fnrKq").each(function () {
      feedbacks.push($(this).text().trim());
    });
    // console.log(feedbacks.slice(0, 11));
  });
  const name = new Array(restaurantsNames);

  // for (let i = 0; i < restaurantsNames.length; i++) {
  //   console.log(restaurantsNames[i]);
  // }
  var rr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={classes.restaurantsHome}>
      <div className={classes.navBar}>
        <Link to="/" className={classes.imgLink}>
          <img src={img} alt="none" width />
        </Link>
        <Link to="/" className={classes.title}>
          <h1>Food Court</h1>
        </Link>
      </div>
      <div className={classes.restaurantsList}>
        <h1 className={classes.name}>Hey This is Restaurants List</h1>
        <div className={classes.listItems}>
          {console.log(restaurantsNames)}
          {restaurantsNames.map(function (val, idx) {
            return (
              <div key={idx} className={classes.dataItem}>
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Restaurants;
