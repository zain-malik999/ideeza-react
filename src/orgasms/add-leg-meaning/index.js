import React from "react";
import { TextField, SelectField } from "molecules";
import { Label } from "atoms";
import { AiOutlineClose } from "react-icons/ai";
function AddLegMeaning(props) {
  const {
    mainClass,
    mainClass2,
    row,
    class2,
    class3,
    class5,
    value2,
    value3,
  } = props;
  return (
    <div className={mainClass}>
      <div className={mainClass2}>
        <Label
          value={value3}
          classes={{ root: `${class5} pt-1.5 pr-2 opacity-0` }}
        />
        <div className={`md:col-span-2 ${row}`}>
          <SelectField
            mainClasses="flex items-center"
            className={`pl-3 px-1 ${class2}`}
            containerClass="py-0 text-sm w-24 text-gray-300"
            labelClasses="text-gray-900 text-sm font-sans md:w-20"
            value={value2}
            placeholder="mA"
          />
          <TextField
            mainClass="flex items-center"
            inputClasses={class3}
            placeholder="Min"
          />
          <TextField
            mainClass="flex items-center"
            inputClasses={class3}
            placeholder="Min"
          />
          <div className="w-5">
            <AiOutlineClose className="text-xl text-gray-900 pl-1" />
          </div>
        </div>
      </div>
      <div className={mainClass2}>
        <Label value={value3} classes={{ root: `${class5} pt-1.5 pr-2` }} />
        <div className={`md:col-span-2 ${row}`}>
          <SelectField
            mainClasses="flex items-center"
            className={`pl-3 px-1 ${class2}`}
            containerClass="py-0 text-sm w-24 text-gray-300"
            labelClasses="text-gray-900 text-sm font-sans md:w-20"
            value={value2}
            placeholder="mA"
          />
          <TextField
            mainClass="flex items-center"
            inputClasses={class3}
            placeholder="Min"
          />
          <TextField
            mainClass="flex items-center"
            inputClasses={class3}
            placeholder="Min"
          />
          <div className="w-5">
            <AiOutlineClose className="text-xl text-gray-900 pl-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
AddLegMeaning.defaultProps = {
  mainClass: "",
  mainClass2:
    "flex space-y-2 border-b pb-2 justify-between px-2 md:px-4 md:pl-6 items-center",
  row: "items-center flex space-x-1",
  class2: "text-gray-900 text-sm font-sans py-0",
  class3:
    "xl:w-40 p-0 h-8 text-xs tracking-tight rounded-none font-sans border border-solid border-gray-725 text-black-900",
  class5: "text-gray-900 text-sm py-0",
};
export default AddLegMeaning;
