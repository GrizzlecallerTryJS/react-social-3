import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUser, setIsAuth } from "../../redux/authReducer";
import { authMe } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authMe().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUser(data.data);
      }
    });
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
  setAuthUser,
  setIsAuth,
};

export default connect(mapStateToProps, acObject)(HeaderContainer);
