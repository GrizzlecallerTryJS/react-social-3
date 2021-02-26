import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";

let items = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Yana" },
  { id: 3, name: "Marina" },
  { id: 4, name: "Sasha" },
];

let DialogItem = (props) => {
  let path = `/messages/${props.id}`;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Users = () => {
  return items.map((i) => {
    return <DialogItem id={i.id} name={i.name} key={i.id} />;
  });
};

export default Users;
