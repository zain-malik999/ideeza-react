import React from "react";
import { AvatarLabel } from "molecules";
import { Label, Button, Avatar } from "atoms";
function HireBody(props) {
  const {
    mainClass,
    src,
    avatarClass,
    value1,
    value2,
    value3,
    value4,
    value5,
    lableClass1,
    labelClass2,
    labeClass3,
    btnValue,
    btnClass,
  } = props;
  return (
    <div className={mainClass}>
      <Avatar className={avatarClass} src={src} />
      <div className="md:pt-2">
        <Label value={value1} classes={{ root: `${lableClass1}` }} />
        <Label value={value2} classes={{ root: `${labelClass2}` }} />
        <div className="flex items-center mt-1">
          <Label value={value3} classes={{ root: `${labeClass3}` }} />
          <Button value={btnValue} color="current" className={btnClass} />
        </div>
        <Label
          value={value4}
          classes={{ root: `mt-3 ${lableClass1} font-semibold` }}
        />
        <Label value={value5} classes={{ root: `${labelClass2}` }} />
      </div>
    </div>
  );
}
HireBody.defaultProps = {
  mainClass: "flex items-start justify-center py-16 p-3",
  lableClass1: "text-black-100 font-sans text-lg tracking-tight font-thin ",
  labelClass2: "text-gray-670 text-md tracking-tight font-thin font-sans",
  btnClass: "bg-current text-white text-md tracking-tight py-1 px-4 ml-1",
  avatarClass: "md:h-16 h-12 md:w-16 w-12 mr-3",
  labeClass3: "font-semibold font-sans text-md py-1 tracking-tight",
};
export default HireBody;
