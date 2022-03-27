import React from "react";
import { CheckboxCustom, Label } from "atoms";

function CheckboxLabel(props) {
  const { value, labelClass, mainClass, checkboxClass, id } = props;
  return (
    <div className={`flex ${mainClass}`}>
      <CheckboxCustom className={`check ${checkboxClass}`} id={id} />
      <Label value={value} classes={{ root: `${labelClass}` }} />
    </div>
  );
}
CheckboxLabel.defaultProps = {
  mainClass: "items-center",
  value: "Checkbox",
  labelClass: "text-gray-300 font-sans text-base pl-4 tracking-tight",
  checkboxClass: "w-7 h-7 rounded-sm",
};
export default CheckboxLabel;
