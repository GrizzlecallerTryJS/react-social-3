import React from "react";
import style from "./PaginationItem.module.css";
import axios from "axios";

const PaginationItem = (props) => {
  let select = props.select;

  let setCurrentPage = () => {
    props.setCurrentPage(props.item);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${props.item}`
      )
      .then((response) => {
        props.setUsers(response.data.items);
      });
  };

  return (
    <span
      onClick={setCurrentPage}
      className={props.item === select && style.item}
    >
      {props.item}
    </span>
  );
};

export default PaginationItem;
