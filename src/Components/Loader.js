import React from "react";
import classes from "./Loader.module.css";
function Loader() {
  return (
    <div classes={classes.loadingHome}>
      <h2 className={classes.loadingName}>Loading.......</h2>
      <div className={classes.buildingBlocks}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loader;
