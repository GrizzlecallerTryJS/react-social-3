import React from "react";
import style from "./OldPostsComponent.module.css";

const OldPostsComponent = (props) => {
  return (
    <div className={style.main}>
      <div className={style.item}>
        <img
          src="https://yorktonrentals.com/wp-content/uploads/2017/06/usericon.png"
          alt="defaultImage"
        />
      </div>
      <div className={style.message}>{props.message}</div>
    </div>
  );
};

export default OldPostsComponent;
