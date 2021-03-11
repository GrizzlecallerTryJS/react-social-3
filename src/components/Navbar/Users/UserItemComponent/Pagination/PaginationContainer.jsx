import {
  setCurrentPageAC,
  setTotalPagesAC,
  setUsersAC,
} from "../../../../../redux/usersPageReducer";
import { connect } from "react-redux";
import PaginationComponent from "./PaginationComponent";

let mapStateToProps = (state) => {
  return {
    state: state.usersPageReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setTotalPages: (totalUsersCount, pageSize) => {
      dispatch(setTotalPagesAC(totalUsersCount, pageSize));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);

export default PaginationContainer;
