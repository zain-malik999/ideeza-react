import React from "react";
import { Label, Button } from "atoms";

function LabelButton(props) {
  const {
    mainClass,
    btnValue,
    value,
    btnClass,
    labelClass,
    iconStart,
    iconEnd,
    onClick,
  } = props;
  return (
    <div className={`flex items-center ${mainClass}`}>
      <Label value={value} classes={{ root: `${labelClass}` }} />
      <Button
        value={btnValue}
        iconStart={iconStart}
        endIcon={iconEnd}
        onClick={onClick}
        classes={{ root: `tracking-tight capitalize ${btnClass}` }}
      />
    </div>
  );
}
LabelButton.defaultProps = {
  mainClass: "justify-between",
  value: "Article preview",
  labelClass:
    "text-ideeza-100 text-base font-sans tracking-tight font-semibold",
  btnValue: "Back Step",
  btnClass: "bg-ideeza-100 p-2 px-4 text-white",
};
export default LabelButton;
