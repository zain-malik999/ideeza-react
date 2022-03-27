import React, { useState } from "react";
import { TextField, CheckboxLabel } from "molecules";
function Step2() {
  return (
    <div>
      <div className="bg-white rounded shadow-full p-5 my-3">
        <CheckboxLabel
          mainClass="grid grid-cols-2 items-center border-b py-2"
          value="Previous Connector"
          id="Previous"
          labelClass="text-gray-600 tracking-tight text-md font-sans pr-6"
          checkboxClass="w-6 h-6 rounded-sm order-1 border-gray-725 rounded-none"
        />
        <CheckboxLabel
          mainClass="grid grid-cols-2 items-center border-b py-2"
          value="Next Connector"
          id="Next"
          labelClass="text-gray-600 tracking-tight text-md font-sans pr-6"
          checkboxClass="w-6 h-6 rounded-sm order-1 border-gray-725 rounded-none"
        />
        <CheckboxLabel
          mainClass="grid grid-cols-2 items-center border-b py-2"
          value="Is Output?"
          id="Output"
          labelClass="text-gray-600 tracking-tight text-md font-sans pr-6"
          checkboxClass="w-6 h-6 rounded-sm order-1 border-gray-725 rounded-none"
        />
        <CheckboxLabel
          mainClass="grid grid-cols-2 items-center border-b py-2"
          value="Input Inline?"
          id="Inline"
          labelClass="text-gray-600 tracking-tight text-md font-sans pr-6"
          checkboxClass="w-6 h-6 rounded-sm order-1 border-gray-725 rounded-none"
        />
        <CheckboxLabel
          mainClass="grid grid-cols-2 items-center border-b py-2"
          value="Statement Input (A notch for a stack of statement blocks.)"
          id="Statement"
          labelClass="text-gray-600 tracking-tight text-md font-sans pr-6"
          checkboxClass="w-6 h-6 rounded-sm order-1 border-gray-725 rounded-none"
        />
        <TextField
          mainClass="grid grid-cols-2 items-center border-b py-2"
          labelvalue="Append Dummy Input (Not an connector just a row for fields.)"
          labelClasses="text-gray-600 tracking-tight text-md font-sans"
          inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
          placeholder="0"
        />
        <CheckboxLabel
          mainClass="grid grid-cols-2 items-center border-b py-2"
          value="Append Value Input Type (A socket in which do plug a value black"
          id="Append"
          labelClass="text-gray-600 tracking-tight text-md font-sans pr-6"
          checkboxClass="w-6 h-6 rounded-sm order-1 border-gray-725 rounded-none"
        />
        <TextField
          mainClass="grid grid-cols-2 items-center py-2 pb-6"
          labelvalue="Append Value Input Name"
          labelClasses="text-gray-600 tracking-tight text-md font-sans"
          inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
          placeholder="0"
        />
      </div>
    </div>
  );
}
export default Step2;
