import React from "react";
import { Label, Avatar } from "atoms";
function AvatarLabels(props) {
  const {
    src,
    avaterClasses,
    mainClassesLabel,
    mainClasses,
    title,
    titleClasses,
    subtitle,
    subtitleClasses,
  } = props;
  return (
    <div className={mainClasses}>
      <Avatar src={src} classes={{ root: `${avaterClasses}` }} />
      <div className={mainClassesLabel}>
        <Label value={title} classes={{ root: `${titleClasses}` }} />
        <Label value={subtitle} classes={{ root: `${subtitleClasses}` }} />
      </div>
    </div>
  );
}
AvatarLabels.defaultProps = {
  mainClasses: "flex mt-4 sm:flex-row items-center",
  titleClasses: "text-xl font-normal",
  subtitleClasses: "text-lg text-gray-800 font-light",
  mainClassesLabel: "pl-2",
  avaterClasses: "h-14 w-14 shadow-md",
};
export default AvatarLabels;
