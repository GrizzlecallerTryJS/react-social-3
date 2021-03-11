import React from "react";
import axios from "axios";
import PaginationItem from "./PaginationItem/PaginationItem";

class PaginationComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}`
      )
      .then((response) => {
        this.setTotalPages(response.data.totalCount);
      });
  }

  setTotalPages = (totalUsersCount, pageSize = this.props.state.pageSize) => {
    this.props.setTotalPages(totalUsersCount, pageSize);
  };

  render() {
    return this.props.state.totalPages.map((p) => {
      return (
        <PaginationItem
          item={p}
          key={p}
          select={this.props.state.currentPage}
          setCurrentPage={this.props.setCurrentPage}
          setUsers={this.props.setUsers}
        />
      );
    });
  }
}

export default PaginationComponent;
