import React from "react";
import { Redirect } from "react-router-dom";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsComponent from "./My_Posts_Module/MyPostsComponent";

class Profile extends React.Component {
  componentDidMount() {
    let userID;

    if (this.props.match.params.userID) {
      userID = this.props.match.params.userID;
    } else {
      userID = 2;
    }

    this.props.setUserProfile(userID);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    return (
      <div className={style.content}>
        <div className={style.profileInfo}>
          <ProfileInfo profileInfo={this.props.profile} />
        </div>
        <div className={style.myPosts}>
          <MyPostsComponent
            newPostText={this.props.newPostText}
            addPost={this.props.addPost}
            onPostChange={this.props.onPostChange}
            posts={this.props.posts}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
