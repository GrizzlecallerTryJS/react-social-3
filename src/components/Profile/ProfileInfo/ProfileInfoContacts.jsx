import React from "react";

let ProfileInfoContacts = (props) => {
  return (
    <div>
      <div>{props.info.facebook}</div>
      <div>{props.info.website}</div>
      <div>{props.info.vk}</div>
      <div>{props.info.twitter}</div>
      <div>{props.info.instagram}</div>
      <div>{props.info.youtube}</div>
      <div>{props.info.github}</div>
      <div>{props.info.mainLink}</div>
    </div>
  );
};

export default ProfileInfoContacts;
