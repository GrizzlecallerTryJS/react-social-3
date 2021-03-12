import React from "react";
import defaultAvatar from "../../../../assets/images/defaultAvatar.jpg";
import UserItem from "./UserItem/UserItem";

let UserItemComponent = (props) => {
  let followButton = (id) => {
    props.followButton(id);
  };

  return props.users.map((u) => {
    return (
      <div>
        <UserItem
          photosSmall={u.photos.small ? u.photos.small : defaultAvatar}
          name={u.name}
          status={u.status}
          followButton={() => followButton(u.id)}
          key={u.id}
          id={u.id}
          followStatus={u.followed}
        />
      </div>
    );
  });
};

export default UserItemComponent;
