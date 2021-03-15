import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsComponent from "./My_Posts_Module/MyPostsComponent";
import { getUserProfile } from "../../api/api";

class Profile extends React.Component {
  componentDidMount() {
    let userID;

    if (this.props.match.params.userID) {
      userID = this.props.match.params.userID;
    } else {
      userID = 2;
    }

    getUserProfile(userID).then((data) => {
      this.props.setProfile(data);
    });
  }

  render() {
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
