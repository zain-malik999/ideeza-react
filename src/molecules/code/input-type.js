import React from "react";
import { TextField, SelectField } from "molecules";
import { Label } from "atoms";
function InputType({ length, current }) {
  return (
    <>
      <div className="w-full px-2 py-2">
        <Label
          value={`${current} / ${length}`}
          variant="h6"
          className="font-semibold tracking-wider"
        />
      </div>
      <SelectField
        mainClasses="grid grid-cols-2 items-center border-b py-2"
        value="Input Type"
        labelClasses="text-gray-600 tracking-tight text-md font-sans"
        containerClass="border rounded-none border-gray-725 text-gray-300 w-full h-8 p-0 text-sm font-sans tracking-tight"
        placeholder="Text Box"
        options={[
          { name: "Text", value: "text" },
          { name: "Dropdown", value: "dropdown" },
          { name: "Checkbox", value: "checkbox" },
        ]}
      />
      <TextField
        mainClass="grid grid-cols-2 items-center border-b py-2"
        labelvalue="Input Variable Name"
        labelClasses="text-gray-600 tracking-tight text-md font-sans"
        inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
        placeholder=""
      />
      <TextField
        mainClass="grid grid-cols-2 items-center py-2"
        labelvalue="Input Variable Value"
        labelClasses="text-gray-600 tracking-tight text-md font-sans"
        inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
        placeholder=""
      />
    </>
  );
}
export default InputType;
