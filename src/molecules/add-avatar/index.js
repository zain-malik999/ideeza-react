import React from "react";
import { Avatar, Label } from "atoms";
import { IconButton } from "@material-ui/core";

function AddAvatar(props) {
  const { avatarClass, value, assign, labelClass, mainClass, click } = props;
  return (
    <div className="">
      <Label value={value} classes={{ root: `${labelClass}` }} />
      <div className={`flex ${mainClass}`}>
        {assign?.map((v, k) => (
          <Avatar
            key={k}
            src={v?.profile_photo}
            alt={`${v?.first_name} ${v?.last_name}`}
            classes={{ root: `${avatarClass}` }}
          >
            {`${v?.first_name} ${v?.last_name}`}
          </Avatar>
        ))}
        <IconButton
          onClick={click}
          className={`bg-ideeza-100 outline-none rounded-full text-lg items-center justify-center flex text-white ${avatarClass}`}
        >
          +
        </IconButton>
      </div>
    </div>
  );
}
AddAvatar.defaultProps = {
  mainClass: "space-x-1",
};
export default React.memo(AddAvatar);
