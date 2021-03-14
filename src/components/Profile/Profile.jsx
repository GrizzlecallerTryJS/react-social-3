import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import axios from "axios";
import MyPostsComponent from "./My_Posts_Module/MyPostsComponent";

class Profile extends React.Component {
  componentDidMount() {
    debugger;
    let userID;

    if (this.props.match.params.userID) {
      userID = this.props.match.params.userID;
    } else {
      userID = 2;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((response) => {
        this.props.setProfile(response.data);
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
