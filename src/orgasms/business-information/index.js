import React from "react";
import { SelectField } from "molecules";

function BusinessInformation({ errors, control }) {
  return (
    <div className="rounded-lg bg-white shadow-md space-y-2 p-5 md:px-6 px-4 w-full">
      <SelectField
        error={errors}
        control={control}
        mainClasses="grid grid-cols-2 md:flex items-center border-b pb-2"
        className="w-full text-md text-gray-900 px-2 py-1"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-300 text-base font-sans tracking-tight md:w-2/4"
        value="Line of Business"
        placeholder="Electronics, Cover"
      />
      <SelectField
        error={errors}
        control={control}
        mainClasses="grid grid-cols-2 md:flex items-center border-b pb-2"
        className="w-full text-md text-gray-900 px-2 py-1"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-300 text-base font-sans tracking-tight md:w-2/4"
        value="Electronic process"
        placeholder="Fabrication, Assembly, Dealer"
      />
      <SelectField
        error={errors}
        control={control}
        mainClasses="grid grid-cols-2 md:flex items-center border-b pb-2"
        className="w-full text-md text-gray-900 px-2 py-1"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-300 text-base font-sans tracking-tight md:w-2/4"
        value="Cover process"
        placeholder="Tester, CNC Plastic"
      />
    </div>
  );
}

export default BusinessInformation;
