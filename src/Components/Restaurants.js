import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cheerio from "cheerio";
import axios from "axios";
import Loader from "./Loader";
import classes from "./Restaurants.module.css";
import img from "../assets/head_bg.png";
import img2 from "../assets/location.png";

function Restaurants(props) {
  var urls = {
    Mumbai:
      "https://www.tripadvisor.in/Restaurants-g304554-Mumbai_Maharashtra.html",
    Banglore:
      "https://www.tripadvisor.in/Restaurants-g297628-Bengaluru_Bangalore_District_Karnataka.html",
    Kolkata:
      "https://www.tripadvisor.in/Restaurants-g304558-Kolkata_Calcutta_Kolkata_District_West_Bengal.html",
    Chennai:
      "https://www.tripadvisor.in/Restaurants-g304556-Chennai_Madras_Chennai_District_Tamil_Nadu.html",
    Tirupati:
      "https://www.tripadvisor.in/Restaurants-g297587-Tirupati_Chittoor_District_Andhra_Pradesh.html",
  };
  const location = useLocation();
  // console.log("location:-", location.state.value);
  const [loading, setLoading] = useState(true);
  const [conHtml, setConHtml] = useState("");
  var [cityname, setCityName] = useState("");

  useEffect(() => {
    setCityName(location.state.value);
  }, [location.state.value]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  useEffect(() => {
    rawData();
  }, []);
  // console.log("this is from outside:-", cityname);

  const rawData = () => {
    // console.log(
    //   "this is from raw data:-",
    //   urls[`${""}${location.state.value}${""}`]
    // );
    axios.get(urls[`${""}${location.state.value}${""}`]).then((res) => {
      setConHtml(res.data);
    });
  };
  // const data = rawData()
  const data = conHtml;
  var restaurantsNames = [];
  var totalReviews = [];
  var Ratings = [];
  var cuisines = [];
  var feedbacks = [];
  var images = [];
  const $ = cheerio.load(data);
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

  $(".YtrWs .zHxHb").each(function () {
    images.push($(this).html());
  });

  restaurantsNames = restaurantsNames.slice(0, 10);
  totalReviews = totalReviews.slice(0, 10);
  Ratings = Ratings.slice(0, 10);
  cuisines = cuisines.slice(0, 10);
  feedbacks = feedbacks.slice(0, 10);
  var times = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  Ratings = Ratings.map((val) => {
    return val.slice(0, 3);
  });

  return (
    <div className={classes.restaurantsHome}>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className={classes.navBar}>
            <Link to="/" className={classes.imgLink}>
              <img src={img} alt="none" width />
            </Link>
            <Link to="/" className={classes.title}>
              <h1>Food Court</h1>
            </Link>
            <div className={classes.cityTitle}>
              <span className={classes.locationImage}>
                <img src={img2} alt="location img" className={classes.imgg} />
              </span>
              <h1>{cityname}</h1>
            </div>
          </div>
          <div className={classes.second}>
            <div className={classes.restaurantsList}>
              <div className={classes.listItems}>
                {times.map(function (val, idx) {
                  return (
                    <div key={idx} className={classes.dataItem}>
                      <p>
                        <span className={classes.restaurantNames}>
                          {" "}
                          {restaurantsNames[idx]}
                        </span>
                      </p>
                      <hr />
                      <p>
                        <span className={classes.categories}>
                          Total Reviews:{" "}
                        </span>
                        {totalReviews[idx]}
                      </p>
                      <p>
                        {" "}
                        <span className={classes.categories}>Rating: </span>
                        {Ratings[idx]}
                      </p>
                      <p>
                        {" "}
                        <span className={classes.categories}>Cuisines: </span>
                        {cuisines[idx]}
                      </p>
                      <p>
                        <span className={classes.categories}>Feedbacks: </span>
                        {feedbacks[idx]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Restaurants;
// "https://www.tripadvisor.in/Restaurants-g297628-Bengaluru_Bangalore_District_Karnataka.html"
