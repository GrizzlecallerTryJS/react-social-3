import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = () => {
  return (
    <div className={style.name}>
      <div>
        <NavLink to="/messages/dima">Dima</NavLink>
      </div>
      <div>
        <NavLink to="/messages/yana">Yana</NavLink>
      </div>
      <div>
        <NavLink to="/messages/marina">Marina</NavLink>
      </div>
      <div>
        <NavLink to="/messages/sasha">Sasha</NavLink>
      </div>
    </div>
  );
};

export default Users;
