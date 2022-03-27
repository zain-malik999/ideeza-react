import React from "react";
import { Icon_Label, Upload } from "..";

function UploadButton(props) {
  const {
    value,
    labelValue,
    mainClass,
    lableClass,
    iconMainClass,
    iconComponent,
    labelClass,
    iconContanerClass,
    fileClass,
    icon,
    btnClass,
  } = props;
  return (
    <>
      <div className={mainClass}>
        <Upload
          value={value}
          icon=""
          mainClass={btnClass}
          labelClass={`${labelClass} `}
          icon={icon}
        />
        <div className={fileClass}>
          <Icon_Label
            mainClass={`${iconMainClass}`}
            labelValue={labelValue}
            tooltipProps={{ open: false }}
            lableClass={{ root: `${lableClass}` }}
            iconComponent={iconComponent}
            iconContanerClass={iconContanerClass}
          />
        </div>
      </div>
    </>
  );
}
UploadButton.defaultProps = {
  mainClass: "",
  btnClass:
    "border border-current cursor-pointer rounded px-2 w-32 flex items-center justify-center",
  fileClass: "grid grid-cols-2 w-2/5 pt-2",
  titleClass: "pb-2 tracking-tight text-gray-300",
  labelClass: "text-gray-300 p-1 text-base font-sans tracking-tight",
  iconMainClass: "flex flex-row-reverse justify-between w-full items-center",
  lableClass: "text-gray-300 text-base tracking-tight",
  iconContanerClass: "text-ideeza-100",
};
export default UploadButton;
