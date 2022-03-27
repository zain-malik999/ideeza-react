import React, { useRef } from "react";
import { Icon_Label } from "..";
import { BsPaperclip } from "react-icons/bs";

function Upload({ change, icon, value, labelClass, mainClass, className }) {
  const image = useRef(null);
  const focus = () => image.current.click();
  return (
    <div className={className}>
      <input
        id="image"
        ref={image}
        onChange={change}
        type="file"
        className="hidden"
      />
      <Icon_Label
        onClick={focus}
        mainClass={mainClass}
        tooltipProps={{ open: false }}
        labelValue={value}
        iconContanerClass="text-lg"
        lableClass={{ root: `tracking-tight font-sans ${labelClass}` }}
        iconComponent={icon}
      />
    </div>
  );
}
Upload.defaultProps = {
  className: "w-full",
  value: "Select Image",
  mainClass:
    "border py-1 rounded pl-2 pr-1 flex items-center flex-row-reverse justify-between",
  labelClass: "text-gray-300 text-md py-1",
  icon: <BsPaperclip className="text-current text-xl" />,
  // className: "border mt-2 rounded w-32"
};
export default React.memo(Upload);
