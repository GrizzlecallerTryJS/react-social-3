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

let mapStateToProps = (state) => {
  return {
    users: state.usersPageReducer.users,
    totalPages: state.usersPageReducer.totalPages,
    currentPage: state.usersPageReducer.currentPage,
    pageSize: state.usersPageReducer.pageSize,
    /*forReload: state.usersPageReducer.forReload,*/
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

export default connect(mapStateToProps, acObject)(Users);
