import React from "react";
import UserItemComponentContainer from "./UserItemComponent/UserItemComponentContainer";
import style from "./Users.module.css";
import PaginationContainer from "./UserItemComponent/Pagination/PaginationContainer";
import PaginationComponent from "./UserItemComponent/Pagination/PaginationComponent";
import axios from "axios";

/*const Users = (props) => {
  return (
    <div className={style.main}>
      <div className={style.pagination}>
        <PaginationComponent
          setTotalPages={props.setTotalPages}
          setCurrentPage={props.setCurrentPage}
          setUsers={props.setUsers}
          currentPage={props.currentPage}
          totalUsersCount={props.totalUsersCount}
          totalPages={props.totalPages}
          users={props.users}
        />
      </div>
      <div className={style.users}>
        <UserItemComponentContainer />
      </div>
    </div>
  );
};*/

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

  render() {
    return (
      <div className={style.main}>
        <div className={style.pagination}>
          <PaginationComponent
            totalPages={this.props.totalPages}
            setCurrentPage={this.props.setCurrentPage}
            setUsers={this.props.setUsers}
            currentPage={this.props.currentPage}
          />
        </div>
        <div className={style.users}>
          <UserItemComponentContainer />
        </div>
      </div>
    );
  }
}

export default Users;
