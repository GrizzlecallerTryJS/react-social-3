import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import { setAuthUser, setIsAuth } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUser(response.data.data);
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
