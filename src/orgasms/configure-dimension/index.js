import React from "react";
import { Label, Button } from "atoms";
import { TextField, SelectField } from "molecules";

function ConfigureDimension() {
  return (
    <div className="pt-6">
      <Label
        value={
          <>
            <div className="leading-tight">
              Edit QFN Square Package Overall Dimensions{" "}
            </div>
            <div className="ml-auto text-gray-900 font-normal w-full lg:w-auto text-right">
              1 / 10
            </div>{" "}
          </>
        }
        className="text-current lg:flex justify-between items-center font-semibold font-sans md:text-lg text-md tracking-tight border-b border-gray-750 border-opacity-50 pb-2 mb-2"
      />
      <div className="bg-white rounded shadow-full p-4 pr-2">
        <div className="grid grid-cols-3 items-center md:gap-x-3 gap-x-2 border-b py-2">
          <Label
            value="Body Span Range (E)"
            className="text-gray-600 tracking-tight"
          />
          <TextField
            labelvalue="Min"
            labelClasses="tracking-normal text-gray-600 w-9"
            mainClass="flex items-center md:space-x-4 space-x-2"
            inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
            placeholder="0"
          />
          <TextField
            labelvalue="Max"
            labelClasses="tracking-normal text-gray-600 w-9"
            mainClass="flex items-center md:space-x-4 space-x-2"
            inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
            placeholder="0"
          />
        </div>
        <div className="grid grid-cols-3 items-center md:gap-x-3 gap-x-2 border-b py-2">
          <Label
            value="Body Span Range (D)"
            className="text-gray-600 tracking-tight"
          />
          <TextField
            labelvalue="Min"
            labelClasses="tracking-normal text-gray-600 w-9"
            mainClass="flex items-center md:space-x-4 space-x-2"
            inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
            placeholder="0"
          />
          <TextField
            labelvalue="Max"
            labelClasses="tracking-normal text-gray-600 w-9"
            mainClass="flex items-center md:space-x-4 space-x-2"
            inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
            placeholder="0"
          />
        </div>
        <div className="grid grid-cols-3 items-center md:gap-x-3 gap-x-2 border-b py-2">
          <Label value="Height (H)" className="text-gray-600 tracking-tight" />
          <TextField
            labelvalue="Max"
            labelClasses="tracking-normal text-gray-600 w-9"
            mainClass="flex items-center md:space-x-4 space-x-2"
            inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
            placeholder="0"
          />
        </div>
        <div className="grid grid-cols-3 items-center md:gap-x-3 gap-x-2 border-b py-2">
          <Label
            value="Standoff Height (A1)"
            className="text-gray-600 tracking-tight"
          />
          <TextField
            labelvalue="Min"
            labelClasses="tracking-normal text-gray-600 w-9"
            mainClass="flex items-center md:space-x-4 space-x-2"
            inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
            placeholder="0"
          />
        </div>
        <div className="grid grid-cols-3 items-center md:gap-x-3 gap-x-2 border-b py-2">
          <Label
            value="Chamfered Corner (H)"
            className="text-gray-600 tracking-tight"
          />
          <TextField
            // labelvalue="Min"
            labelClasses="tracking-normal text-gray-600 w-9"
            mainClass="flex items-center md:space-x-4 space-x-2"
            inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
            placeholder="0"
          />
        </div>
        <div className="grid grid-cols-3 items-center md:gap-x-3 gap-x-2 py-2">
          <Label
            value="Pin 1 location"
            className="text-gray-600 tracking-tight"
          />
          <SelectField
            mainClasses="flex items-center"
            containerClass="py-0 px-0 text-sm h-8 border rounded-none border-gray-725"
            labelClasses="tracking-normal text-gray-600 w-14"
            value=""
            placeholder="mA"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full pt-6">
        <Button
          value="Back"
          className="bg-white border-opacity-50 border border-solid border-gray-325 w-28 transform-none text-gray-600 text-sm font-sans tracking-tight"
        />
        <Button
          value="Next Step"
          className="bg-white border-opacity-50 border border-solid border-gray-325 w-28 transform-none text-gray-600 text-sm font-sans tracking-tight"
        />
        <Button
          value="Finish"
          className="bg-current w-28 transform-none text-white text-sm font-sans tracking-tight"
        />
      </div>
    </div>
  );
}

export default ConfigureDimension;
