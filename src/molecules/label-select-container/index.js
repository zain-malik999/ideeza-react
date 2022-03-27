import React from "react";
import { Label, Select } from "atoms";
function Label_Select_Container(props) {
  const {
    mainClass,
    labelClasses,
    labelValue,
    mainClassSelect,
    selectClasses,
  } = props;
  return (
    <div className={mainClass}>
      <Label value={labelValue} classes={labelClasses} />
      <Select className={mainClassSelect} classes={selectClasses} />
    </div>
  );
}
Label_Select_Container.defaultProps = {
  mainClass: "flex items-center border border-gray-100 p-1 ml-2 rounded w-32",
  labelClasses: { root: "w-full" },
  selectClasses: { root: "border-none bg-white" },
  mainClassSelect: "w-full",
};
export default Label_Select_Container;
