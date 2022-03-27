import React from "react";
import { Label } from "atoms";
import { RadioLabel, TextField, SelectField } from "molecules";
function UsPerson() {
  return (
    <>
      <SelectField
        mainClasses="flex-col space-y-1 mt-4"
        placeholder="Please select..."
        className="bg-white shadow p-3 px-5 rounded-md text-sm text-gray-900 font-sans tracking-tight"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="pb-1 text-md tracking-tight font-sans text-gray-300"
        value="Federal tax classification"
      />
      <Label
        classes={{
          root: `text-base text-gray-300 font-sans tracking-tight mt-4`,
        }}
        value="Taxpayer identification number type"
      />
      <RadioLabel
        value="Social security number (SSN)"
        mainClass="flex items-center mt-2"
        radioClass={{ root: "h-4 w-4" }}
        lableClass={`text-gray-640 tracking-tight pl-2 text-sm font-sans`}
      />
      <RadioLabel
        value="Employer Identification Number (EIN)"
        mainClass="flex items-center mt-2"
        radioClass={{ root: "h-4 w-4" }}
        lableClass={`text-gray-640 tracking-tight pl-2 text-sm font-sans`}
      />
      <TextField
        mainClass="mb-1 mt-4"
        type="password"
        labelvalue="SSN/EIN #"
        variant="filled"
        labelClasses="pb-2 text-md tracking-tight font-sans text-gray-300"
        inputClasses="bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"
      />
    </>
  );
}

export default UsPerson;
