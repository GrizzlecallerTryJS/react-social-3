import React from "react";
import PaginationItem from "./PaginationItem/PaginationItem";

let PaginationComponent = (props) => {
  return props.totalPages.map((p) => {
    return (
      <PaginationItem
        item={p}
        key={p}
        select={props.currentPage}
        setCurrentPage={props.setCurrentPage}
        setUsers={props.setUsers}
      />
    );
  });
};

export default PaginationComponent;
