import React from "react";
import { Label } from "atoms";
import { TextField, CheckboxFields, SelectField } from "molecules";
function SecurityQuestion() {
  return (
    <div className="md:px-6">
      <div className="">
        <Label
          value="Before you can set a new security question, you'll have to answer your current one correctly."
          className="text-sm tracking-tight text-gray-300"
        />
        <Label
          value="Current Question"
          className="font-sans tracking-tight font-semibold text-md pt-6 text-gray-300"
        />
        <Label value="Your mother's maiden name" />
        <TextField
          mainClass="flex flex-col my-6 border-b pb-7"
          labelvalue="Answer"
          labelClasses="font-sans tracking-tight font-semibold text-md pb-1 text-gray-300"
          inputClasses="bg-gray-100 pl-0 text-sm outline-none w-3/5"
        />
      </div>
      <Label
        value="You'll be prompted to answer your securtiy question when we need to verigy your identiry, so be sure to choose a question only you know the anser to."
        className="text-sm tracking-tight text-gray-300"
      />
      <SelectField
        mainClasses="flex-col space-y-1 mt-4 w-3/5"
        placeholder="Your favourite writer"
        className="bg-white shadow rounded-none px-3 py-2 text-sm text-gray-640 font-sans tracking-tight"
        containerClass="border border-solid text-sm"
        labelClasses="font-sans tracking-tight font-semibold text-md pb-1 text-gray-300"
        value="New Question"
      />
      <TextField
        mainClass="flex flex-col mt-5"
        labelvalue="Answer"
        labelClasses="font-sans tracking-tight font-semibold text-md pb-1 text-gray-300"
        inputClasses="bg-gray-100 pl-0 text-sm outline-none w-3/5"
      />
      <CheckboxFields
        size="small"
        mainClass="mt-8 -ml-1 flex items-start"
        value="I understand my account will be locked if i am unable to answer this question"
        labelClass="text-gray-300 tracking-tight text-sm"
      />
      <CheckboxFields
        size="small"
        mainClass="mt-1 -ml-1 flex items-center"
        value="Keep me logged in on this device"
        labelClass="text-gray-300 tracking-tight text-sm"
      />
    </div>
  );
}

export default SecurityQuestion;
