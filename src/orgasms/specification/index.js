import React from "react";
import { Label } from "atoms";
import { SelectField, TextField } from "molecules";
function Specification() {
  return (
    <div className="w-full">
      <Label
        value="Additional Board Specification"
        className="text-current md:text-xl text-lg tracking-tight font-sans font-semibold"
      />
      <div className="flex space-x-2 md:space-x-0 items-center justify-between py-2 my-2 border-t border-b border-gray-750">
        <Label
          value="Aluminum"
          className="hover:text-current text-gray-600 cursor-pointer md:text-base text-sm tracking-tight font-sans"
        />
        <Label
          value="Board"
          className="hover:text-current text-gray-600 cursor-pointer md:text-base text-sm tracking-tight font-sans"
        />
        <Label
          value="Normal FR-4 Board "
          className="hover:text-current text-gray-600 cursor-pointer md:text-base text-sm tracking-tight font-sans"
        />
        <Label
          value="Rigid-Flex Board"
          className="hover:text-current text-gray-600 cursor-pointer md:text-base text-sm tracking-tight font-sans"
        />
        <Label
          value="Card Board"
          className="hover:text-current text-gray-600 cursor-pointer md:text-base text-sm tracking-tight font-sans"
        />
      </div>
      <div className="rounded-lg bg-white shadow-md space-y-3 p-5 md:px-6 px-4 w-full">
        <SelectField
          mainClasses="grid grid-cols-1 md:flex items-center"
          className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
          containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
          labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
          value="Max Layers"
          placeholder=""
        />
        <SelectField
          mainClasses="grid grid-cols-1 md:flex items-center"
          className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
          containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
          labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
          value="Copper Layers"
          placeholder="Top Layer, Bottom Layer"
        />
        <SelectField
          mainClasses="grid grid-cols-1 md:flex items-center"
          className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
          containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
          labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
          value="Soldermask"
          placeholder="Top Side"
        />
        <SelectField
          mainClasses="grid grid-cols-1 md:flex items-center"
          className="w-full text-md text-gray-600 placeholder-gray-900 px-2 py-2"
          containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
          labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
          value="FR4-TG"
          placeholder="TG 130 - 140"
        />
        <TextField
          mainClass="grid grid-cols-1 md:flex items-center"
          inputClasses="w-full p-0 py-0.5 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
          labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
          labelvalue="Min Thickness"
        />
      </div>
    </div>
  );
}

export default Specification;
