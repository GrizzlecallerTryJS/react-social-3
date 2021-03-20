import React from "react";
import style from "./Users.module.css";
import PaginationComponent from "./UserItemComponent/Pagination/PaginationComponent";
import UserItemComponent from "./UserItemComponent/UserItemComponent";
import Preloader from "../../../assets/preloader/Preloader";

class Users extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

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
              setCurrentPageOnClick={this.props.setCurrentPageOnClick}
            />
          </div>
          <div className={style.users}>
            <UserItemComponent
              users={this.props.users}
              setFollowStatus={this.props.setFollowStatusThunkCreator}
              followingInProgress={this.props.followingInProgress}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
