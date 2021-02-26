import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/defaultAvatar.jpg";
import wideImage from "../../../assets/images/wideImage.jpg";

const ProfileInfo = () => {
  return (
    <div className={style.main}>
      <div className={style.wideImage}>
        <img src={wideImage} alt="wide_image" />
      </div>
      <div className={style.avatar_and_info_block}>
        <div className={style.avatar_image}>
          <img src={defaultAvatar} alt="avatar_image" />
        </div>
        <div className={style.profile_info}>Ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
