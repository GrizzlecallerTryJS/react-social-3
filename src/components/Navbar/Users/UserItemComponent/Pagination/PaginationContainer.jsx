import {
  setCurrentPageAC,
  setTotalPagesAC,
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
  };
};

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);

export default PaginationContainer;
