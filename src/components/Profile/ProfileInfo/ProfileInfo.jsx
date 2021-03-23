import React from "react";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/images/defaultAvatar.jpg";
import wideImage from "../../../assets/images/wideImage.jpg";
import ProfileInfoContacts from "./ProfileInfoContacts";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../../assets/preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <Preloader />;
  }

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
        <div className={style.profile_info}>
          <p>{props.profileInfo.fullName}</p>
          <ProfileInfoContacts info={props.profileInfo.contacts} />
          {props.profileInfo.lookingForAJob}
          {props.profileInfo.lookingForAJobDescription}
          <ProfileStatus
            profileStatus={props.profileStatusText}
            setUserProfileStatusText={props.setUserProfileStatusText}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
