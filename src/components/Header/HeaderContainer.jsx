import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthMe } from "../../redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthMe();
  }

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
  setAuthMe,
};

export default compose(connect(mapStateToProps, acObject))(HeaderContainer);
