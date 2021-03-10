import React from "react";
import style from "./PaginationItem.module.css";
import axios from "axios";

const PaginationItem = (props) => {
  debugger;
  let select = props.select;

  let setCurrentPage = () => {
    props.setCurrentPage(props.item);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${select}`)
      .then((response) => {});
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
