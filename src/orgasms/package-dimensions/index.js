import React from "react";
import { TextField, SelectField } from "molecules";
import { Label } from "atoms";

function PackageDimensions(props) {
  const {
    mainClass,
    row,
    inputClass,
    classI,
    valueI,
    valueII,
    valueIII,
    valueIV,
    valueV,
    valueVI,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    placeholder1,
    placeholder2,
    placeholder3,
    placeholder4,
    placeholder5,
    placeholder6,
    placeholder7,
    placeholder8,
  } = props;
  return (
    <div className={mainClass}>
      <div className={`border-b ${row}`}>
        <Label value={valueII} classes={{ root: `${classI}` }} />
        <div className="flex col-span-3 space-x-5">
          <TextField
            mainClass="flex items-center space-x-4"
            inputClasses={`text-gray-900 ${inputClass}`}
            labelClasses="text-gray-600 flex items-center text-xs font-sans"
            labelvalue={value1}
            placeholder={placeholder1}
          />
          <TextField
            mainClass="flex items-center space-x-4"
            inputClasses={`text-gray-900 ${inputClass}`}
            labelClasses="text-gray-600 flex items-center text-xs font-sans"
            labelvalue={value2}
            placeholder={placeholder2}
          />
        </div>
      </div>
      <div className={`border-b ${row}`}>
        <Label value={valueI} classes={{ root: `${classI}` }} />
        <div className="flex col-span-3 space-x-5">
          <TextField
            mainClass="flex items-center space-x-4"
            inputClasses={`text-gray-900 ${inputClass}`}
            labelClasses="text-gray-600 flex items-center text-xs font-sans"
            labelvalue={value3}
            placeholder={placeholder3}
          />
          <TextField
            mainClass="flex items-center space-x-4"
            inputClasses={`text-gray-900 ${inputClass}`}
            labelClasses="text-gray-600 flex items-center text-xs font-sans"
            labelvalue={value4}
            placeholder={placeholder4}
          />
        </div>
      </div>
      <div className={`border-b ${row}`}>
        <Label value={valueIII} classes={{ root: `${classI}` }} />
        <TextField
          mainClass="flex items-center space-x-4"
          inputClasses={`text-gray-900 -ml-1 ${inputClass}`}
          labelClasses="text-gray-600 flex items-center text-xs font-sans"
          labelvalue={value5}
          placeholder={placeholder5}
        />
      </div>
      <div className={`border-b ${row}`}>
        <Label value={valueIV} classes={{ root: `${classI}` }} />
        <TextField
          mainClass="flex items-center space-x-4"
          inputClasses={`text-gray-900 -ml-1 ${inputClass}`}
          labelClasses="text-gray-600 flex items-center text-xs font-sans"
          labelvalue={value6}
          placeholder={placeholder6}
        />
      </div>
      <div className={`border-b ${row}`}>
        <Label value={valueV} classes={{ root: `${classI}` }} />
        <TextField
          mainClass="flex items-center space-x-4"
          inputClasses={`text-gray-900 ml-4 ${inputClass}`}
          labelClasses="text-gray-600 flex items-center text-xs font-sans"
          placeholder={placeholder7}
        />
      </div>
      <div className={`${row}`}>
        <Label value={valueVI} classes={{ root: `${classI}` }} />
        <SelectField
          mainClasses="flex w-36 items-center space-x-4"
          labelClasses="text-gray-600 flex items-center text-xs font-sans"
          placeholder={placeholder8}
          className={`text-gray-900 ml-4 pl-3 flex items-center ${inputClass}`}
        />
      </div>
    </div>
  );
}
PackageDimensions.defaultProps = {
  mainClass: "shadow py-4 pl-4 space-y-2 pr-2 rounded bg-white",
  row: "flex items-center grid grid-cols-5 pb-2",
  inputClass:
    "w-32 p-0 h-8 text-xs rounded-none font-sans border border-solid border-gray-725 text-gray-300",
  classI: "text-sm font-thin font-sans col-span-2 text-gray-600",
};
export default PackageDimensions;
