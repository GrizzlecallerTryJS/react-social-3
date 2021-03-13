import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import axios from "axios";
import MyPostsComponent from "./My_Posts_Module/MyPostsComponent";

/*
const Profile = (props) => {
  return (
    <div className={style.content}>
      <div className={style.profileInfo}>
        <ProfileInfo profileInfo={props.profile} />
      </div>
      <div className={style.myPosts}>
        <MyPostsComponentContainer />
      </div>
    </div>
  );
};
*/

class Profile extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }
  debugger;

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
