import { setAuthLogin } from "../../redux/authReducer";
import { connect } from "react-redux";
import Login from "./Login";

let mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    serverError: state.authReducer.serverError,
  };
};

let acObject = {
  setAuthLogin,
};

export default connect(mapStateToProps, acObject)(Login);
