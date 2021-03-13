import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followButton,
  setCurrentPage,
  setIsFetching,
  setTotalPages,
  setUsers,
} from "../../../redux/usersPageReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPageReducer.users,
    totalPages: state.usersPageReducer.totalPages,
    currentPage: state.usersPageReducer.currentPage,
    totalUsersCount: state.usersPageReducer.totalUsersCount,
    pageSize: state.usersPageReducer.pageSize,
    isFetching: state.usersPageReducer.isFetching,
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
  followButton,
  setUsers,
  setTotalPages,
  setCurrentPage,
  setIsFetching,
};

export default connect(mapStateToProps, acObject)(Users);
