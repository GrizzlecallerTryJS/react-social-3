import React from "react";
/*import style from "./UsersComponent.module.css";
import { NavLink } from "react-router-dom";*/
import UsersList from "./UsersList/UsersList";
import UsersItemComponent from "./UsersItemComponent/UsersItemComponent";

const UsersComponent = () => {
  return UsersList.map((i) => {
    return <UsersItemComponent id={i.id} name={i.name} key={i.id} />;
  });
};

export default UsersComponent;
