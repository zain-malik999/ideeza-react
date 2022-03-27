import React from "react";
import { TextField, SelectField, AddMoreInformation } from "molecules";

function AdditionalInformation() {
  return (
    <div className="rounded-lg bg-white shadow-md space-y-3 p-5 md:px-6 px-4 w-full">
      <TextField
        mainClass="flex items-center"
        inputClasses="w-full p-0 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base font-sans tracking-tight w-2/4"
        labelvalue="School"
        placeholder="Govt high school"
      />
      <TextField
        mainClass="flex items-center"
        inputClasses="w-full p-0 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-600 text-base font-sans tracking-tight w-2/4"
        labelvalue="Work"
        placeholder="Ideeza LLC"
      />
      <SelectField
        mainClasses="md:grid flex md:grid-cols-3 items-center"
        className="w-full text-md text-gray-900 px-3 py-2"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-600 text-base font-sans tracking-tight w-2/4"
        value="Timezone"
        placeholder="(GMT+01:00)"
      />
      <AddMoreInformation
        mainClass="grid grid-cols-3"
        value="Languages"
        labelClasses="text-gray-600 text-base"
      />
    </div>
  );
}

export default AdditionalInformation;
