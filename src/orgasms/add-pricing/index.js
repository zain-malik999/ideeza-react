import React from "react";
import { TextField } from "molecules";
import { Button } from "atoms";
import { AiOutlineClose } from "react-icons/ai";
function AddPricing(props) {
  const {
    mainClass,
    row,
    inputClass,
    placeholder1,
    placeholder2,
    iconClass,
  } = props;
  return (
    <div className={mainClass}>
      <div className="px-3 pt-3 space-y-2">
        <div className="flex items-center border-b pb-2">
          <div className={row}>
            <TextField
              mainClass="flex items-center space-x-4"
              inputClasses={`text-gray-900 w-full ${inputClass}`}
              labelClasses="text-gray-600 flex items-center text-sm font-sans"
              labelvalue="Quantity"
              placeholder={placeholder1}
            />
            <TextField
              mainClass="flex items-center space-x-4"
              inputClasses={`text-gray-900 w-full ${inputClass}`}
              labelClasses="text-gray-600 flex items-center text-sm font-sans"
              labelvalue="Price"
              isIcon
              position="end"
              icon={<img src="/assets/images/$.png" className="mr-2.5" />}
              placeholder={placeholder2}
            />
          </div>
          <div className={`w-5 ml-2 text-center ${iconClass}`}>
            <AiOutlineClose className="text-lg cursor-pointer text-gray-900 opacity-0" />
          </div>
        </div>
        <div className="flex items-center border-b pb-2">
          <div className={row}>
            <TextField
              mainClass="flex items-center space-x-4"
              inputClasses={`text-gray-600 tracking-tight w-full ${inputClass}`}
              labelClasses="text-gray-600 flex items-center text-sm font-sans"
              labelvalue="Quantity"
              placeholder="Quantity"
            />
            <TextField
              mainClass="flex items-center space-x-4"
              inputClasses={`text-gray-600 tracking-tight w-full ${inputClass}`}
              labelClasses="text-gray-600 flex items-center text-sm font-sans"
              labelvalue="Price"
              placeholder="Amount"
            />
          </div>
          <div className={`w-5 ml-2 text-center ${iconClass}`}>
            <AiOutlineClose className="text-lg cursor-pointer text-gray-900" />
          </div>
        </div>
      </div>
      <Button
        value="+ Add new"
        classes={{
          root: `text-current bg-gray-150 w-full border-t border-solid border-gray-160 rounded-none py-3 text-sm tracking-tight font-sans transform-none font-semibold`,
        }}
      />
    </div>
  );
}
AddPricing.defaultProps = {
  mainClass: "shadow-full bg-white mt-2 rounded overflow-hidden",
  row: "grid grid-cols-2 md:gap-x-7 gap-x-3 w-full",
  inputClass:
    "w-46 pr-3 p-0 h-8 text-sm tracking-tight rounded-none font-sans border border-solid border-gray-725 text-black-300",
};
export default AddPricing;
