import React from "react";
import style from "./UserItemComponent.module.css";
import defaultAvatar from "../../../../assets/images/defaultAvatar.jpg";

const UserItemComponent = (props) => {
  let users = [
    {
      id: 1,
      firstName: "BEEP",
      lastName: "BOOP",
      avatarPic: defaultAvatar,
      county: "Russia",
      city: "Moscow",
      about: "999",
      followStatus: false,
    },
    {
      id: 2,
      firstName: "QQQ",
      lastName: "WWW",
      avatarPic: defaultAvatar,
      county: "Russia",
      city: "1234",
      about: "999",
      followStatus: true,
    },
    {
      id: 3,
      firstName: "EEE",
      lastName: "SSS",
      avatarPic: defaultAvatar,
      county: "Russia",
      city: "Kherov",
      about: "999",
      followStatus: false,
    },
  ];

  let followButton = (id) => {
    props.follow(id);
  };

  let setUsers = (users) => {
    props.setUsers(users);
  };

  if (props.state.users.length === 0) {
    debugger;
    setUsers(users);
  }

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
        followButton={() => followButton(u.id)}
        key={u.id}
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
