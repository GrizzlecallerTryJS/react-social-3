import React from "react";
import MyPostsComponent from "./MyPostsComponent";
import { addPostAC, onPostChangeAC } from "../../../redux/profilePageReducer";

import {connect} from "react-redux";

/*const MyPostsComponentContainer = () => {
  return (
    <ContextProvider.Consumer>
      {(state) => {
        debugger;
        let store = state.getState().profilePageReducer;

        let addPost = () => {
          state.dispatch(addPostAC());
        };

        let onPostChange = (text) => {
          state.dispatch(onPostChangeAC(text));
        };

        return (
          <MyPostsComponent
            state={store}
            addPost={addPost}
            onPostChange={onPostChange}
          />
        );
      }}
    </ContextProvider.Consumer>
  );
};*/

let mapStateToProps = (state) => {
  return (
      {
        state: state.profilePageReducer,
      }
  )
}

let mapDispatchToProps = (dispatch) => {
  return (
      {
        addPost: () => {dispatch(addPostAC())},
        onPostChange: (text) => {dispatch(onPostChangeAC(text))}
      }
  )
}

let MyPostsComponentContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsComponent)

export default MyPostsComponentContainer;
