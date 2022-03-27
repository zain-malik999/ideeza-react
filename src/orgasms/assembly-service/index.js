import React from "react";
import { Label, Input } from "atoms";
import { TextField } from "molecules";
function AssemblyService() {
  return (
    <div className="rounded-lg bg-white shadow-md space-y-3 p-5 md:px-6 px-4 w-full">
      <div className="grid md:grid-cols-3 grid-cols-1 md:flex items-center w-full border-b border-gray-750 pb-2">
        <Label
          value="Price for / Quantity"
          className="text-gray-300 text-lg pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        />
        <div className="grid grid-cols-3 items-center col-span-2 gap-x-1 w-full md:-ml-3 -ml-2">
          <Label
            value="1"
            className="text-gray-900 text-base font-sans tracking-tight text-center"
          />
          <Label
            value="100"
            className="text-gray-900 text-base font-sans tracking-tight text-center"
          />
          <Label
            value="+Add value"
            classes={{
              root:
                "text-current underline text-base font-sans tracking-tight text-right cursor-pointer",
            }}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:flex items-center w-full">
        <Label
          value="Smt parts"
          className="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        />
        <div className="grid grid-cols-3 items-center col-span-2 gap-x-1 w-full md:-ml-3 -ml-2">
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:flex items-center w-full">
        <Label
          value="Through hole"
          className="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        />
        <div className="grid grid-cols-3 items-center col-span-2 gap-x-1 w-full md:-ml-3 -ml-2">
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:flex items-center w-full">
        <Label
          value="Unique"
          className="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        />
        <div className="grid grid-cols-3 items-center col-span-2 gap-x-1 w-full md:-ml-3 -ml-2">
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
          <Input
            containerClass="p-0 w-full"
            inputProps="p-2 text-md w-full tracking-tight rounded font-sans border border-gray-850 border-solid border-opacity-40"
            placeholder="Amount in USD"
          />
        </div>
      </div>
      <TextField
        mainClass="grid grid-cols-1 md:flex items-center"
        inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base pb-2 md:pb-0 font-sans tracking-tight md:w-2/4"
        labelvalue="Special Request"
        placeholder="Fill in the detailed technical info about the PCB assembly"
      />
    </div>
  );
}

export default AssemblyService;
