import React from "react";
import axios from "axios";

class PaginationComponent extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.setTotalPages(response.data.totalCount);
      });
  }
  setTotalPages = (totalUsersCount, pageSize = this.props.state.pageSize) => {
    this.props.setTotalPages(totalUsersCount, pageSize);
  };

  render() {
    return this.props.state.totalPages.map((p) => {
      return <span>{p}</span>;
    });
  }
}

export default PaginationComponent;
