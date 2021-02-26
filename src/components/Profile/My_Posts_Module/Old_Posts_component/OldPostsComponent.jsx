import React from "react";
import style from "./OldPostsComponent.module.css";
import defaultImage from "./../../../../assets/images/defaultImage.png";

const OldPostsComponent = (props) => {
  return (
    <div className={style.main}>
      <div className={style.item}>
        <img src={defaultImage} alt="defaultImage" />
      </div>
      <div className={style.message}>{props.message}</div>
    </div>
  );
};

export default OldPostsComponent;
