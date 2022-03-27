import React from "react";
import { Label, Input } from "atoms";
import { CheckboxFields, SelectField, TextField } from "molecules";
function TaxResidence1(props) {
  const { mainClass } = props;
  return (
    <div className={`pt-2 ${mainClass}`}>
      <Label
        value="This address will be displayed on the invoice set to clients."
        classes={{ root: `text-base text-gray-300 font-sans tracking-tight` }}
      />
      <CheckboxFields
        value="Use my existing location address"
        mainClass="-ml-1 items-center"
        labelClass="text-sm font-sans tracking-tight text-gray-640"
      />
      <SelectField
        mainClasses="flex-col space-y-1 mt-4 w-3/5"
        placeholder="Please select..."
        className="bg-gray-150 p-3 text-sm text-gray-640 font-sans tracking-tight"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="pb-1 text-md tracking-tight font-sans text-gray-300"
        value="Country"
      />
      <TextField
        mainClass="mt-5 mb-2"
        labelvalue="Address"
        variant="filled"
        labelClasses="pb-1 text-md tracking-tight font-sans text-gray-300"
        inputClasses="bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"
      />
      <Input
        className={{
          root: `bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"`,
        }}
      />
      <TextField
        mainClass="mt-5 mb-2"
        labelvalue="City"
        variant="filled"
        labelClasses="pb-1 text-md tracking-tight font-sans text-gray-300"
        inputClasses="bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"
      />
      <TextField
        mainClass="mt-5 mb-2"
        labelvalue="Postal Code"
        variant="filled"
        labelClasses="pb-1 text-md tracking-tight font-sans text-gray-300"
        inputClasses="bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"
      />
    </div>
  );
}
export default TaxResidence1;
