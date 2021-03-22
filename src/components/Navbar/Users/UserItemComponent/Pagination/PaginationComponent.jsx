import React from "react";
import PaginationItem from "./PaginationItem/PaginationItem";

let PaginationComponent = (props) => {
  return props.totalPages.map((p) => {
    let propsFor_PaginationItem = {
      item: p,
      key: p,
      select: props.currentPage,
      setCurrentPage: props.setCurrentPage,
      setUsers: props.setUsers,
      setCurrentPageOnClick: props.setCurrentPageOnClick,
    };
    return <PaginationItem {...propsFor_PaginationItem} />;
  });
};

export default PaginationComponent;
