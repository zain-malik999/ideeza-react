import React from "react";
import { AvatarLabel } from "molecules";
function MessagesFavourites(props) {
  const {
    mainClass,
    mainAvatar,
    avatarClass,
    src,
    value1,
    value2,
    value3,
    class1,
  } = props;
  return (
    <div className={mainClass}>
      <AvatarLabel
        mainClass={mainAvatar}
        avatarSrc={src}
        labelValue={value1}
        labelClasses={class1}
        avatarClasses={avatarClass}
      />
      <AvatarLabel
        mainClass={mainAvatar}
        avatarSrc={src}
        labelValue={value2}
        labelClasses={class1}
        avatarClasses={avatarClass}
      />
      <AvatarLabel
        mainClass={mainAvatar}
        avatarSrc={src}
        labelValue={value3}
        labelClasses={class1}
        avatarClasses={avatarClass}
      />
      <AvatarLabel
        mainClass={mainAvatar}
        avatarSrc={src}
        labelValue={value3}
        labelClasses={class1}
        avatarClasses={avatarClass}
      />
    </div>
  );
}
MessagesFavourites.defaultProps = {
  mainClass: "",
  mainAvatar: "flex flex-col items-center",
  avatarClass: { root: "w-12 h-12" },
  class1: { root: "text-blue-800 tracking-tight font-sans text-sm pt-1" },
};
export default MessagesFavourites;
