import React from "react";
import style from "./Users.module.css";
import PaginationComponent from "./UserItemComponent/Pagination/PaginationComponent";
import axios from "axios";
import UserItemComponent from "./UserItemComponent/UserItemComponent";
import Preloader from "../../../assets/preloader/Preloader";

class Users extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`,
        {
          withCredentials: true,
          headers: {
            "API-KEY": "c3ab2b38-91ca-4335-a97b-5c1d92e21288",
          },
        }
      )
      .then((response) => {
        this.props.setIsFetching(false);
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
    this.props.setIsFetching(true);
    this.props.setCurrentPage(newCurrentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}`,
        {
          withCredentials: true,
          headers: {
            "API-KEY": "c3ab2b38-91ca-4335-a97b-5c1d92e21288",
          },
        }
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  setFollowStatus = (id, status) => {
    if (status) {
      axios
        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
          withCredentials: true,
          headers: {
            "API-KEY": "c3ab2b38-91ca-4335-a97b-5c1d92e21288",
          },
        })
        .then((response) => {
          if (response.data.resultCode === 0) {
            this.props.setFollowStatus(id, false);
          }
        });
    } else {
      axios
        .post(
          `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
          {},
          {
            withCredentials: true,
            headers: {
              "API-KEY": "c3ab2b38-91ca-4335-a97b-5c1d92e21288",
            },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) {
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
