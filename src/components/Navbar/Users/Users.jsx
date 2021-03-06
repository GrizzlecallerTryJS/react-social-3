import React from "react";
import UserItemComponentContainer from "./UserItemComponent/UserItemComponentContainer";
import style from "./Users.module.css";

const Users = () => {
  return (
    <div className={style.main}>
      <UserItemComponentContainer />
    </div>
  );
};

export default Users;
