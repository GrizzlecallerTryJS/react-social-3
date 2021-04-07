import { setAuthLogin } from "./../../redux/authReducer";
import { connect } from "react-redux";
import Login from "./Login";

let mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    error: state.authReducer.error,
  };
};

let acObject = {
  setAuthLogin,
};

export default connect(mapStateToProps, acObject)(Login);
