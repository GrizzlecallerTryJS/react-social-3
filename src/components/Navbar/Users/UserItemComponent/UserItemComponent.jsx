import React from "react";
import style from "./UserItemComponent.module.css";
import defaultAvatar from "../../../../assets/images/defaultAvatar.jpg";
import axios from "axios";

const UserItemComponent = (props) => {
  if (props.state.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        setUsers(response.data.items);
      });
  }

  let followButton = (id) => {
    props.follow(id);
  };

  let setUsers = (users) => {
    props.setUsers(users);
  };

  return props.state.users.map((u) => {
    return (
      <UserItem
        photosSmall={u.photos.small ? u.photos.small : defaultAvatar}
        name={u.name}
        status={u.status}
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

export default UserItemComponent;
