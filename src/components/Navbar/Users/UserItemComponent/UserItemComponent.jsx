import React from "react";
import defaultAvatar from "../../../../assets/images/defaultAvatar.jpg";
import UserItem from "./UserItem/UserItem";

let UserItemComponent = (props) => {
  return props.users.map((u) => {
    return (
      <div>
        <UserItem
          photosSmall={u.photos.small ? u.photos.small : defaultAvatar}
          name={u.name}
          status={u.status}
          setFollowStatus={props.setFollowStatus}
          key={u.id}
          id={u.id}
          followingInProgress={props.followingInProgress}
          followed={u.followed}
        />
      </div>
    );
  });
};

export default UserItemComponent;
