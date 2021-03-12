import { connect } from "react-redux";
import { followButtonAC, setUsersAC } from "../../../../redux/usersPageReducer";
import UserItemComponent from "./UserItemComponent";

let mapStateToProps = (state) => {
  return {
    users: state.usersPageReducer.users,
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
