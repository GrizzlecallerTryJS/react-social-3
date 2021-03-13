import React from "react";
import style from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={style.lds_grid}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Preloader;
