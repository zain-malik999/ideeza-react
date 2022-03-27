import React from "react";
import { Radio, Label } from "atoms";

function RadioLabel(props) {
  const {
    value,
    lableClass,
    mainClass,
    radioClass,
    size,
    color,
    name,
    id,
    onClick,
  } = props;
  return (
    <div className={mainClass}>
      <Radio
        onClick={onClick}
        id={id}
        size={size}
        color={color}
        name={name}
        classes={radioClass}
      />
      <Label value={value} classes={{ root: `${lableClass}` }} />
    </div>
  );
}
RadioLabel.defaultProps = {
  mainClass: "flex items-center -ml-1",
  size: "small",
  color: "current",
};
export default RadioLabel;
