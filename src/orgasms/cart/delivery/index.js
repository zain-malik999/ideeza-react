import React from "react";
import { Label } from "atoms";
import { TextField, SelectField, CheckboxFields, TwoLabels } from "molecules";
import Proptype from "prop-types";
function DeliveryDetail(props) {
  const {
    mainClass,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    options,
    placeholder,
    main,
    row,
    checkValue,
    checkClass,
    cost,
    inner,
    innerClass,
  } = props;
  return (
    <div className={mainClass}>
      <div className="md:w-4/5 lg:w-1/2">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-3 gap-y-3 md:gap-y-0 items-center mb-5">
          <SelectField
            value={value1}
            labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1 w-full"
            options={options}
            placeholder={placeholder}
            // mainClasses="grid grid-cols-2 items-center"
            className="bg-white text-xs py-0 h-3 px-2 pr-4 rounded-sm border border-gray-125 border-solid"
          />
          <TwoLabels
            mainClass="flex items-center space-x-2"
            value={value2}
            value2={value3}
            labelClass="text-gray-300 text-sm font-sans tracking-tight"
            labelClass2="text-gray-300 text-sm font-sans tracking-tight underline"
          />
        </div>
        <div className={main}>
          <CheckboxFields
            size="md"
            color="white"
            value={checkValue}
            labelClass={checkClass}
          />
          <div className={row}>
            <TextField
              mainClass="flex flex-col"
              inputClasses="w-full bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              labelvalue={value4}
              type="text"
            />
            <TextField
              mainClass="flex flex-col"
              inputClasses="w-full bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              labelvalue={value5}
              type="text"
            />
            <TextField
              mainClass="flex flex-col"
              inputClasses="w-full bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              labelvalue={value6}
              type="number"
            />
            <TextField
              mainClass="flex flex-col"
              inputClasses="w-full bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              labelvalue={value7}
              type="email"
            />
            <SelectField
              value={value8}
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              options={options}
              mainClasses="flex flex-col"
              className="bg-white text-xs py-0 h-3 px-2 pr-4 rounded-md border border-gray-125 border-solid"
            />
            <SelectField
              value={value9}
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              options={options}
              mainClasses="flex flex-col"
              className="bg-white text-xs py-0 h-3 px-2 pr-4 rounded-md border border-gray-125 border-solid"
            />
            <TextField
              mainClass="flex flex-col"
              inputClasses="w-full bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              labelvalue={value10}
              type="address"
            />
            <TextField
              mainClass="flex flex-col"
              inputClasses="w-full bg-white p-0 text-sm tracking-tight font-sans border border-gray-125"
              labelClasses="text-gray-300 text-sm font-sans tracking-tight pb-1"
              labelvalue={value11}
              type="number"
            />
          </div>
        </div>
        <Label
          value={
            <div className="flex space-x-2">
              {cost}
              <span className={innerClass}>{inner}</span>
            </div>
          }
          classes={{
            root: `flex justify-end text-base tracking-tight text-gray-300 py-3 font-sans`,
          }}
        />
      </div>
    </div>
  );
}
DeliveryDetail.defaultProps = {
  mainClass:
    "bg-gray-150 flex items-center md:justify-center rounded-lg flex-col pt-16 pb-4 px-5",
  checkClass: "text-gray-890 text-sm tracking-tight font-sans",
  row: "grid md:grid-cols-2 items-center md:gap-x-4 gap-y-4",
  main: "space-y-4 pb-6 pt-4 border-t border-solid border-gray-280 border-b",
  innerClass: "text-current pl-2 font-semibold",
};
DeliveryDetail.prototype = {
  options: Proptype.array,
};
export default DeliveryDetail;
