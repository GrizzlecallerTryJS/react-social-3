import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  setCurrentPage,
  setUsers,
  setFollowingInProgress,
  getUsersThunkCreator,
  setCurrentPageOnClick,
  setFollowStatusThunkCreator,
} from "../../../redux/usersPageReducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPageReducer.users,
    totalPages: state.usersPageReducer.totalPages,
    currentPage: state.usersPageReducer.currentPage,
    pageSize: state.usersPageReducer.pageSize,
    followingInProgress: state.usersPageReducer.followingInProgress,
  };
};

/*let mapDispatchToProps = (dispatch) => {
  return {
    followButton: (id) => {
      dispatch(followButtonAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalPages: (totalUsersCount, pageSize) => {
      dispatch(setTotalPagesAC(totalUsersCount, pageSize));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};*/

//Объект с actionCreator

let acObject = {
  setUsers,
  setCurrentPage,
  setFollowingInProgress,
  getUsersThunkCreator,
  setCurrentPageOnClick,
  setFollowStatusThunkCreator,
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, acObject),
  withAuthRedirect
)(Users);
