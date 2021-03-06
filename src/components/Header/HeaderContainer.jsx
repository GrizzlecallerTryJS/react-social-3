import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthLogout } from "../../redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    isAuth: state.authReducer.isAuth,
  };
};

let acObject = {
  setAuthLogout,
};

export default compose(connect(mapStateToProps, acObject))(HeaderContainer);
