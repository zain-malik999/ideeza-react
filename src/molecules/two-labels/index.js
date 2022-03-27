import React from "react";
import { Label } from "atoms";

function TwoLabels(props) {
  const { value, value2, labelClass, labelClass2, mainClass } = props;
  return (
    <div className={`${mainClass}`}>
      <Label value={value} classes={{ root: `${labelClass}` }} />
      <Label value={value2} classes={{ root: `${labelClass2}` }} />
    </div>
  );
}

export default TwoLabels;
