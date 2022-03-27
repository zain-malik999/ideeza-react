import React from "react";
import { Label, Input, Select, Switch } from "atoms";
import { SelectField, TextField } from "molecules";
function Fabrication1() {
  return (
    <div className="rounded-lg bg-white shadow-md space-y-3 p-5 md:px-6 px-4 w-full">
      <SelectField
        mainClasses="grid grid-cols-1 md:flex items-center"
        className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
        containerClass="border rounded text-sm border-solid border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        value="Board Type"
        placeholder="Panel by Customer"
      />
      <TextField
        mainClass="grid grid-cols-1 md:flex items-center"
        inputClasses="w-full p-0 text-text-sm md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        labelvalue="Different Design in Panel"
      />
      <div className="grid md:grid-cols-3 grid-cols-1 md:flex items-center w-full">
        <Label
          value={
            <>
              Size <span className="text-sm text-gray-900">(single)</span>
            </>
          }
          className="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        />
        <div className="grid grid-cols-3 items-center col-span-2 gap-x-1 w-full">
          <Input
            containerClass="p-0 w-full -ml-2"
            inputProps="p-2.5 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="length"
          />
          <Input
            containerClass="p-0 w-full -ml-2"
            inputProps="p-2.5 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="width"
          />
          <Select
            placeholder="Unit"
            containerClass="text-gray-600 h-10 border border-gray-850 border-opacity-40"
            inputClass="text-md p-2 py-1"
            options={[{ value: "Some", name: "Some" }]}
          />
        </div>
      </div>
      <SelectField
        mainClasses="grid md:grid-cols-3 grid-cols-2 items-center"
        className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
        containerClass="border rounded text-sm border-solid border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight"
        value={
          <>
            Quantity <span className="text-sm text-gray-900">(single)</span>
          </>
        }
        placeholder="pcs"
      />
      <SelectField
        mainClasses="grid grid-cols-1 md:flex items-center"
        className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
        containerClass="border rounded text-sm border-solid border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        value="Material"
        placeholder="Normal FR-4 Board, Aluminum Board, Rigid-Flex Bo..."
      />
      <SelectField
        mainClasses="grid grid-cols-1 md:flex items-center"
        className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
        containerClass="border rounded text-sm border-solid border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        value="Solder Mask"
        placeholder="Red, Blue"
      />
      <div className="grid md:grid-cols-3 grid-cols-2 md:flex items-center w-full">
        <Label
          value="Gold Fingers"
          className="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        />
        <div className="col-span-2 w-full">
          <Switch />
        </div>
      </div>
      <SelectField
        mainClasses="grid grid-cols-1 md:flex items-center"
        className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
        containerClass="border rounded text-sm border-solid border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        value="Surface Finish"
        placeholder="HASL Lead Free"
      />
      <SelectField
        mainClasses="grid grid-cols-1 md:flex items-center"
        className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
        containerClass="border rounded text-sm border-solid border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        value="Via Process"
        placeholder="Plugged Vias"
      />
      <SelectField
        mainClasses="grid grid-cols-1 md:flex items-center"
        className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
        containerClass="border rounded text-sm border-solid border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        value="Finished Copper"
        placeholder="2 Oz of Cu"
      />
    </div>
  );
}

export default Fabrication1;
