import React from "react";
import { Label, Button } from "atoms";
import { SelectField } from "..";
function HeaderSeeAllProject(props) {
  const {
    mainClass,
    titelelValue,
    mainClasses,
    titleClasses,
    buttonClass,
    buttonValue,
    selectLabel,
    startIcon,
  } = props;
  return (
    <div className={mainClass}>
      <Label value={titelelValue} classes={titleClasses} />
      <SelectField
        mainClasses={mainClasses}
        labelClasses="text-md mr-2 font-semibold"
        value={selectLabel}
      />
      <Button value={buttonValue} iconStart={startIcon} classes={buttonClass} />
    </div>
  );
}
HeaderSeeAllProject.defaultProps = {
  mainClasses: "flex md:flex-row flex-col items-center",
  mainClass:
    " flex md:flex-row   flex-col  items-center justify-between border-b-2 border-ideeza-100  pb-3",
  titleClasses: {
    root:
      "text-xl tracking-tight font-semibold md:mb-0 mb-2 font-sans text-ideeza-100",
  },
  buttonClass: {
    root: "bg-ideeza-100 mt-2 md:mt-0 px-6 py-2",
    label: "text-white text-md font-medium",
  },
};
export default HeaderSeeAllProject;
