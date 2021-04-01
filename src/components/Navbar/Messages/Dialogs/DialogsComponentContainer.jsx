import DialogsComponent from "./DialogsComponent";
import {
  onMessageChange,
  sendMessage,
} from "../../../../redux/messagePageReducer";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    state: state.messagePageReducer,
  };
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
    onMessageChange: (text) => {
      dispatch(onMessageChangeAC(text));
    },
  };
};*/

const acObject = {
  sendMessage,
  onMessageChange,
};

export default compose(connect(mapStateToProps, acObject))(DialogsComponent);
