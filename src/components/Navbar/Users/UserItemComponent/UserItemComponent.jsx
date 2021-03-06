import React from "react";
import style from "./UserItemComponent.module.css";

const UserItemComponent = (props) => {
  let followButton = () => {
    props.followButtonAC(props.id);
    debugger;
  };
  return props.state.users.map((u) => {
    return (
      <UserItem
        avatarPic={u.avatarPic}
        firstName={u.firstName}
        lastName={u.lastName}
        county={u.county}
        city={u.city}
        about={u.about}
        followStatus={u.followStatus}
        followButton={followButton}
        key={u.id}
        followButtonAC={props.followButtonAC}
        id={u.id}
      />
    );
  });
};

const UserItem = (props) => {
  return (
    <div className={style.main}>
      <div className={style.avatarPic}>
        <img src={props.avatarPic} alt="avatarPic" />
      </div>
      <div className={style.about}>
        <div>{props.firstName}</div>
        <div>{props.lastName}</div>
        <div>{props.county}</div>
        <div>{props.city}</div>
        <div>{props.about}</div>
        <div>{props.followStatus}</div>
        <div>
          <button onClick={props.followButton}>
            {props.followStatus ? "unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItemComponent;
