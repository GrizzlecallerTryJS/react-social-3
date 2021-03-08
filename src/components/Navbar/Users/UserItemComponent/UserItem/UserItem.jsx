import React from "react";
import style from "../UserItemComponent.module.css";

const UserItem = (props) => {
  return (
    <div className={style.main}>
      <div className={style.avatarPic}>
        <img src={props.photosSmall} alt="avatarPic" />
      </div>
      <div className={style.about}>
        <div>{props.name}</div>
        <div>{props.status}</div>
        <div>
          <button onClick={props.followButton}>
            {props.followStatus ? "unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
