import React from "react";
import defaultAvatar from "../../../../assets/images/defaultAvatar.jpg";
import UserItem from "./UserItem/UserItem";

let UserItemComponent = (props) => {
  let setFollowStatus = (id, status) => {
    props.setFollowStatus(id, status);
  };

  return props.users.map((u) => {
    let buttonPresentStatus = () => {
      return u.followed ? "unFollow" : "Follow";
    };
    return (
      <div>
        <UserItem
          photosSmall={u.photos.small ? u.photos.small : defaultAvatar}
          name={u.name}
          status={u.status}
          setFollowStatus={() => setFollowStatus(u.id, u.followed)}
          key={u.id}
          id={u.id}
          buttonPresentStatus={buttonPresentStatus}
          followingInProgress={props.followingInProgress}
        />
      </div>
    );
  });
};

export default UserItemComponent;
