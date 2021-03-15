import React from "react";
import style from "./Users.module.css";
import PaginationComponent from "./UserItemComponent/Pagination/PaginationComponent";
import UserItemComponent from "./UserItemComponent/UserItemComponent";
import Preloader from "../../../assets/preloader/Preloader";
import {
  getUsers,
  setFollowStatusFalse,
  setFollowStatusTrue,
} from "../../../api/api";

class Users extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    getUsers(this.props.currentPage).then((data) => {
      this.props.setIsFetching(false);
      this.setTotalPages(data.totalCount);
      this.setUsers(data.items);
    });
  }

  setTotalPages = (totalUsersCount, pageSize = this.props.pageSize) => {
    this.props.setTotalPages(totalUsersCount, pageSize);
  };
  setUsers = (users) => {
    this.props.setUsers(users);
  };

  setCurrentPageOnClick = (newCurrentPage) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(newCurrentPage);

    getUsers(newCurrentPage).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  setFollowStatus = (id, status) => {
    if (status) {
      setFollowStatusFalse(id).then((data) => {
        if (data.resultCode === 0) {
          this.props.setFollowStatus(id, false);
        }
      });
    } else {
      setFollowStatusTrue(id).then((data) => {
        if (data.resultCode === 0) {
          this.props.setFollowStatus(id, true);
        }
      });
    }
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
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
              users={this.props.users}
              setFollowStatus={this.setFollowStatus}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
