import DialogsComponent from "./DialogsComponent";
import {
  onMessageChangeAC,
  sendMessageAC,
} from "../../../../redux/messagePageReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    state: state.messagePageReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
    onMessageChange: (text) => {
      dispatch(onMessageChangeAC(text));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(DialogsComponent);
