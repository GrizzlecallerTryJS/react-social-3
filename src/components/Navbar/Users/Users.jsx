import React from "react";
import style from "./Users.module.css";
import PaginationComponent from "./UserItemComponent/Pagination/PaginationComponent";
import axios from "axios";
import UserItemComponent from "./UserItemComponent/UserItemComponent";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`
      )
      .then((response) => {
        this.setTotalPages(response.data.totalCount);
        this.setUsers(response.data.items);
      });
  }

  setTotalPages = (totalUsersCount, pageSize = this.props.pageSize) => {
    this.props.setTotalPages(totalUsersCount, pageSize);
  };
  setUsers = (users) => {
    this.props.setUsers(users);
  };

  setCurrentPageOnClick = (newCurrentPage) => {
    debugger;
    this.props.setCurrentPage(newCurrentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <div className={style.main}>
        <div className={style.pagination}>
          <PaginationComponent
            totalPages={this.props.totalPages}
            setCurrentPage={this.props.setCurrentPage}
            setUsers={this.props.setUsers}
            currentPage={this.props.currentPage}
            setCurrentPageOnClick={this.setCurrentPageOnClick}
          />
        </div>
        <div className={style.users}>
          <UserItemComponent
            followButton={this.props.followButton}
            users={this.props.users}
          />
        </div>
      </div>
    );
  }
}

export default Users;
