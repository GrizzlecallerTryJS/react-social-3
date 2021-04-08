import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsComponent from "./My_Posts_Module/MyPostsComponent";

class Profile extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = this.props.profile.userId;
    }

    /*if (this.props.match.params.userID) {
      userID = this.props.match.params.userID;
    } else {
      userID = 8184;
    }*/

    this.props.setUserProfile(userID);
    this.props.getUserProfileStatusText(userID);
  }

  render() {
    return (
      <div className={style.content}>
        <div className={style.profileInfo}>
          <ProfileInfo
            profileInfo={this.props.profile}
            profileStatusText={this.props.profileStatusText}
            setUserProfileStatusText={this.props.setUserProfileStatusText}
          />
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
