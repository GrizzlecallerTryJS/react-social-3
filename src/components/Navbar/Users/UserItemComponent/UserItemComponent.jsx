import React from "react";
import defaultAvatar from "../../../../assets/images/defaultAvatar.jpg";
import axios from "axios";
import UserItem from "./UserItem/UserItem";

class UserItemComponent extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.setUsers(response.data.items);
      });
  }

  followButton = (id) => {
    this.props.follow(id);
  };

  setUsers = (users) => {
    this.props.setUsers(users);
  };

  render() {
    return this.props.state.users.map((u) => {
      return (
        <UserItem
          photosSmall={u.photos.small ? u.photos.small : defaultAvatar}
          name={u.name}
          status={u.status}
          followButton={() => this.followButton(u.id)}
          key={u.id}
          id={u.id}
        />
      );
    });
  }
}

export default UserItemComponent;