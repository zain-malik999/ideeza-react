import React from "react";
import { AvatarLabels } from "molecules";
function AvatarLabelInput(props) {
  const {
    titleClasses,
    subtitleClasses,
    mainClass,
    date,
    msg,
    avaterClasses,
  } = props;
  return (
    <>
      <AvatarLabels
        mainClasses={`flex items-end ${mainClass}`}
        title={date}
        titleClasses={{ root: `${titleClasses}` }}
        subtitle={msg}
        subtitleClasses={{ root: `${subtitleClasses}` }}
        avaterClasses={{ root: `${avaterClasses}` }}
      />
    </>
  );
}
AvatarLabelInput.defaultProps = {
  titleClasses: "text-gray-600 text-right font-sans tracking-tight",
  avaterClasses: "h-16 w-16",
  subtitleClasses: "text-center text-gray-100 w-16",
  mainClass: "mt-5",
};
export default AvatarLabelInput;
