import React from "react";
import { Label } from "atoms";

function DetailsPart(props) {
  const {
    mainClass,
    row,
    value1,
    class1,
    value2,
    class2,
    value3,
    value4,
    value5,
    value6,
  } = props;
  return (
    <div className={mainClass}>
      <div className={`border-b ${row}`}>
        <Label value={value1} classes={{ root: `${class1}` }} />
        <Label value={value2} classes={{ root: `${class2}` }} />
      </div>
      <div className={`border-b ${row}`}>
        <Label value={value3} classes={{ root: `${class1}` }} />
        <Label value={value4} classes={{ root: `${class2}` }} />
      </div>
      <div className={`${row}`}>
        <Label value={value5} classes={{ root: `${class1}` }} />
        <Label value={value6} classes={{ root: `${class2}` }} />
      </div>
    </div>
  );
}
DetailsPart.defaultProps = {
  mainClass: "space-y-2",
  row: "grid grid-cols-4 pb-2",
  class1: "text-gray-300 font-thin text-xs",
  class2: "col-span-3 text-gray-900 text-xs",
};
export default DetailsPart;
