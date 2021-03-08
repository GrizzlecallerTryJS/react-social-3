import { connect } from "react-redux";
import UserItemComponent from "./UserItemComponent";
import { followButtonAC, setUsersAC } from "../../../../redux/usersPageReducer";

let mapStateToProps = (state) => {
  return {
    state: state.usersPageReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followButtonAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UserItemComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItemComponent);

export default UserItemComponentContainer;
