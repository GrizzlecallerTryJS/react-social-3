import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/defaultAvatar.jpg";
import wideImage from "../../../assets/images/wideImage.jpg";

const ProfileInfo = (props) => {
  return (
    <div className={style.main}>
      <div className={style.wideImage}>
        <img src={wideImage} alt="wide_image" />
      </div>
      <div className={style.avatar_and_info_block}>
        <div className={style.avatar_image}>
          {props.profileInfo.photos.large ? (
            <img src={props.profileInfo.photos.large} alt="avatar_image" />
          ) : (
            <img src={defaultAvatar} alt="default_avatar_image" />
          )}
        </div>
        <div className={style.profile_info}>Ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
