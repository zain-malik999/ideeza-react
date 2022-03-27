import React from "react";
import { Label, Avatar } from "atoms";
function AvatarLabel(props) {
  const {
    mainClass,
    avatarClasses,
    labelClasses,
    label2Classes,
    label2Value,
    labelValue,
    titleLabel,
    avatarSrc,
    titleLabelClasses,
  } = props;
  return (
    <div>
      <Label value={titleLabel} classes={titleLabelClasses} />
      <div className={mainClass}>
        <Avatar classes={avatarClasses} src={avatarSrc} />
        <div>
          <Label classes={labelClasses} value={labelValue} />
          <Label classes={label2Classes} value={label2Value} />
        </div>
      </div>
    </div>
  );
}
AvatarLabel.defaultProps = {
  titleLabelClasses: { root: "text-2xl font-meri font-semibold mb-2" },
  mainClass: "flex items-center",
  avatarClasses: { root: "w-9 h-9 mr-2" },
  labelClasses: { root: "text-ideeza-100 font-sans text-lg" },
};
export default AvatarLabel;
