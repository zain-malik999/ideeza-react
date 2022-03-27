import React from "react";
import { Label, Avatar, Button } from "atoms";
import { AiFillCloseCircle } from "react-icons/ai";
function Working_request(props) {
  const {
    mainClass,
    namevalue,
    avatarClass,
    label1Class,
    label2Class,
    btnClass,
    icon,
    iconEnd,
    iconStart,
    Compvalue,
    statusValue,
    btnvalue,
    statusClass,
    clickHandler,
    size,
    services,
    click,
  } = props;
  return (
    <div className={`flex items-center justify-between ${mainClass}`}>
      <div>
        <div className="flex items-center">
          <Avatar className={`${avatarClass}`} />
          <div className="flex-col pl-2">
            <Label value={namevalue} className={`${label1Class}`} />
            <Label value={Compvalue} className={`${label2Class}`} />
          </div>
        </div>
      </div>
      <Label value={statusValue} className={`${statusClass}`} />
      {services}
      <div className="flex items-center justify-between">
        <Button
          onClick={clickHandler}
          value={btnvalue}
          iconEnd={iconEnd}
          iconStart={iconStart}
          onClick={click}
          classes={{ root: `${btnClass}` }}
        />
        <AiFillCloseCircle
          className={`text-red-600 cursor-pointer ${icon}`}
          size={size}
        />
      </div>
    </div>
  );
}
Working_request.defaultProps = {
  statusClass: "`text-ideeza-100 font-medium text-xl",
  avatarClass: "w-8 h-8",
  label1Class: "font-medium text-gray-300 text-sm leading-tight",
  label2Class: "text-gray-900 font-normal text-xs",
  btnClass: "bg-green-100 text-white py-1 capitalize w-32",
  size: "20",
};
export default Working_request;
