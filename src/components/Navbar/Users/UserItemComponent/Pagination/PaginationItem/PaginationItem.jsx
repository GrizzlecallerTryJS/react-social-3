import React from "react";
import style from "./PaginationItem.module.css";

const PaginationItem = (props) => {
  let select = props.select;

  let setCurrentPageOnClick = () => {
    props.setCurrentPageOnClick(props.item);
  };
  return (
    <span
      onClick={setCurrentPageOnClick}
      className={props.item === select ? style.item : undefined}
    >
      {props.item}
    </span>
  );
};

export default PaginationItem;
