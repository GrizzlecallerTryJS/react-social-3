import React from "react";
import { connect } from "react-redux";
import UserItemComponent from "./UserItemComponent";
import { followButtonAC } from "../../../../redux/usersPageReducer";

let mapStateToProps = (state) => {
  return {
    state: state.usersPageReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followButtonAC: (id) => {
      dispatch(followButtonAC(id));
    },
  };
};

const UserItemComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItemComponent);

export default UserItemComponentContainer;
