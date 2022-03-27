import React from "react";
import { TwoLabels } from "molecules";
function FaqBody(props) {
  const {
    mainclass,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    class1,
    class2,
  } = props;
  return (
    <div className={mainclass}>
      <TwoLabels
        mainClass="flex flex-col space-y-2"
        value={value1}
        value2={value2}
        labelClass="text-black-100 text-base tracking-tight font-sans font-bold"
        labelClass2="text-gray-825 text-md tracking-tight font-sans"
      />
      <TwoLabels
        mainClass="flex flex-col space-y-2"
        value={value3}
        value2={value4}
        labelClass="text-black-100 text-base tracking-tight font-sans font-bold"
        labelClass2="text-gray-825 text-md tracking-tight font-sans"
      />
      <TwoLabels
        mainClass="flex flex-col space-y-2"
        value={value5}
        value2={value6}
        labelClass="text-black-100 text-base tracking-tight font-sans font-bold"
        labelClass2="text-gray-825 text-md tracking-tight font-sans"
      />
    </div>
  );
}
FaqBody.defaultProps = {
  mainclass: "space-y-10 md:p-8 p-4",
};
export default FaqBody;
