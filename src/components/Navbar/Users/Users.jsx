import React from "react";
import UserItemComponentContainer from "./UserItemComponent/UserItemComponentContainer";
import style from "./Users.module.css";
import PaginationContainer from "./UserItemComponent/Pagination/PaginationContainer";

const Users = () => {
  return (
    <div className={style.main}>
      <div className={style.pagination}>
        <PaginationContainer />
      </div>
      <div className={style.users}>
        <UserItemComponentContainer />
      </div>
    </div>
  );
};

export default Users;
