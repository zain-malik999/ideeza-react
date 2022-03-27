import React, { useState } from "react";
import { TextField, SelectField, InputType } from "molecules";
import { Label } from "atoms";
import ColorPicker from "rc-color-picker";

function Step1() {
  const [pins, setPins] = useState(0);
  const handlePins = (e) =>
    setPins(parseInt(e?.target.value !== "" ? e?.target.value : 0));
  return (
    <div className="flex mb-10 items-center w-full pt-4 flex-col">
      <div className="w-full code-height overflow-y-auto p-4 pt-5 shadow-lg rounded-md flex flex-col bg-white">
        <TextField
          mainClass="grid grid-cols-2 items-center border-b py-2"
          labelvalue="Block Name"
          labelClasses="text-gray-600 tracking-tight text-md font-sans"
          inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
          placeholder="0"
        />
        <SelectField
          mainClasses="grid grid-cols-2 items-center border-b py-2"
          value="Status"
          labelClasses="text-gray-600 tracking-tight text-md font-sans"
          containerClass="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
          placeholder="Status"
        />
        <div className="grid grid-cols-2 items-center border-b py-2">
          <Label
            value="Color"
            className="text-gray-600 tracking-tight text-md font-sans"
          />
          <ColorPicker />
        </div>
        <SelectField
          mainClasses="grid grid-cols-2 items-center border-b py-2"
          value="Catagory"
          labelClasses="text-gray-600 tracking-tight text-md font-sans"
          containerClass="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
          placeholder="Category"
        />
        <TextField
          mainClass="grid grid-cols-2 items-center border-b py-2"
          labelvalue="Input Pin"
          labelClasses="text-gray-600 tracking-tight text-md font-sans"
          inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
          placeholder="10"
          change={handlePins}
        />
        <div className="flex mt-8 flex-col w-full">
          {new Array(pins).fill("").map((v, k) => {
            return <InputType key={v} current={k + 1} length={pins} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Step1;
