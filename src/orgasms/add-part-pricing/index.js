import React from "react";
import { Label } from "atoms";
function AddPartPricing(props) {
  const {
    mainClass,
    row,
    value1,
    value2,
    value3,
    value4,
    class1,
    class2,
    class3,
    class4,
  } = props;
  return (
    <div className={mainClass}>
      <div className={row}>
        <div className="flex">
          <Label value={value1} classes={{ root: `${class1}` }} />
          <Label value={value2} classes={{ root: `${class2}` }} />
        </div>
        <div className="flex">
          <Label value={value3} classes={{ root: `${class3}` }} />
          <Label value={value4} classes={{ root: `${class4}` }} />
        </div>
      </div>
      <div className={row}>
        <div className="flex">
          <Label value={value1} classes={{ root: `${class1}` }} />
          <Label value={value2} classes={{ root: `${class2}` }} />
        </div>
        <div className="flex">
          <Label value={value3} classes={{ root: `${class3}` }} />
          <Label value={value4} classes={{ root: `${class4}` }} />
        </div>
      </div>
    </div>
  );
}
AddPartPricing.defaultProps = {
  mainClass: "space-y-2",
  row: "grid grid-cols-2 pb-2 border-b",
  class1: "text-gray-300 font-thin text-sm",
  class2: "text-gray-900 pl-7 text-sm",
  class3: "text-gray-900 text-sm",
  class4: "text-gray-300 text-sm pl-7",
};
export default AddPartPricing;
