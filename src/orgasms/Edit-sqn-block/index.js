import React from "react";
import { Label, Button } from "atoms";
import { TextField, SelectField, CheckboxLabel } from "molecules";

function EditSqnBlock() {
  return (
    <div className="pt-6">
      <Label
        value={
          <>
            <div className="leading-tight">Edit SQN Block</div>
            <div className="text-gray-900 font-normal text-right">
              1 / 3
            </div>{" "}
          </>
        }
        className="text-gray-300 flex justify-between items-center font-sans md:text-lg text-md tracking-tight border-b border-gray-750 border-opacity-50 pb-2 mb-2"
      />
      <TextField
        mainClass="flex flex-col space-y-2"
        inputClasses="text-gray-300 bg-white shadow-full text-sm font-lato px-2 py-0 border rounded-none"
        labelClasses="text-black-100 text-sm pl-2 font-sans tracking-tight"
        labelvalue="Description"
        placeholder="Type the description here..."
        multiline={true}
        rows={16}
      />
      <div className="bg-white rounded shadow-full p-5">
        <TextField
          mainClass="grid grid-cols-2 items-center border-b py-2"
          labelvalue="Block Name"
          labelClasses="text-gray-600 tracking-tight text-md font-sans"
          inputClasses="border rounded-none border-gray-725 w-full h-8 p-0 text-sm font-sans tracking-tight"
          placeholder="0"
        />
        <div className="grid grid-cols-2 items-center border-b py-2">
          <Label
            value="Color"
            className="text-gray-600 tracking-tight text-md font-sans"
          />
          <div className="h-8 w-9 border border-opacity-10 cursor-pointer bg-secondary"></div>
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
        />
        <SelectField
          mainClasses="grid grid-cols-2 items-center border-b py-2"
          value="Input Type"
          labelClasses="text-gray-600 tracking-tight text-md font-sans"
          containerClass="border rounded-none border-gray-725 text-gray-300 w-full h-8 p-0 text-sm font-sans tracking-tight"
          placeholder="Text Box"
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
        <div className="flex justify-between items-center w-full pt-6 lg:px-16 md:px-8">
          <Button
            value="Back"
            className="bg-white border-opacity-50 border border-solid border-gray-325 w-28 transform-none text-gray-600 text-sm font-sans tracking-tight"
          />
          <Button
            value="Next Step"
            className="bg-current w-28 transform-none text-white text-sm font-sans tracking-tight"
          />
        </div>
      </div>
      <div className="bg-white rounded shadow-full p-5">
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

export default EditSqnBlock;
