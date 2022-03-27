import React from "react";
import { Label, Avatar } from "atoms";
import { RiCloseLine } from "react-icons/ri";
function Contributor(props) {
  const {
    nameValue,
    aboutValue,
    iconValue,
    nameClass,
    aboutClass,
    iconValueClass,
    avatarClass,
    src,
  } = props;
  return (
    <div className="flex items-center justify-between py-3 border-t border-b border-gray-750 md:w-5/6">
      <div className="flex items-center">
        <Avatar src={src} className={`${avatarClass}`} />
        <div className="flex-col pl-4">
          <Label
            value={nameValue}
            classes={{ root: `text-gray-600 leading-4 font-eina ${nameClass}` }}
          />
          <Label
            value={aboutValue}
            classes={{ root: `text-gray-900 font-eina ${aboutClass}` }}
          />
        </div>
      </div>
      <div className="flex items-center">
        <Label
          value={iconValue}
          classes={{ root: `font-sans ${iconValueClass}` }}
        />
        <RiCloseLine className="text-red-200 font-semibold ml-1" size="22" />
      </div>
    </div>
  );
}
Contributor.defaultProps = {
  nameClass: "text-gray-600 font-normal text-base",
  aboutClass: "text-gray-500 font-normal text-sm",
  iconValueClass: "text-ideeza-100 text-base",
  avatarClass: "w-11 h-11",
};
export default Contributor;
