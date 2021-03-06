import DialogsComponent from "./DialogsComponent";
import {
  onMessageChangeAC,
  sendMessageAC,
} from "../../../../redux/messagePageReducer";
import { connect } from "react-redux";

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

const DialogsComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsComponent);

export default DialogsComponentContainer;
