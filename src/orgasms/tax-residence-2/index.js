import React from "react";
import { Label } from "atoms";
import { UsPerson } from "..";
import { RadioLabel, CheckboxFields, TextField } from "molecules";
function TaxResidence2(props) {
  const { mainClass } = props;
  return (
    <div className={`${mainClass} pt-1`}>
      <Label
        classes={{ root: `text-base text-gray-300 font-sans tracking-tight` }}
        value={
          <>
            To collect the right information, indicate if you are a
            <span className="text-ideeza-100"> U.S. person</span>:
          </>
        }
      />
      <RadioLabel
        mainClass="flex items-center mt-2"
        radioClass={{ root: "h-4 w-4" }}
        value="I'm not a U.S. person"
        lableClass={`text-gray-640 tracking-tight pl-2 text-sm font-sans`}
      />
      <RadioLabel
        mainClass="flex items-center mt-1"
        radioClass={{ root: "h-4 w-4" }}
        value="I'm a U.S. person"
        lableClass={`text-gray-640 tracking-tight pl-2 text-sm font-sans`}
      />
      <Label
        value="Before withdrawing funds, all non-U.S. persons must provide W-8BEN tax information."
        classes={{
          root: `text-base text-gray-300 font-sans tracking-tight pb-7 pt-4`,
        }}
      />
      <TextField
        mainClass="mb-1"
        type="password"
        labelvalue="Legal name of business"
        variant="filled"
        labelClasses="pb-2 text-md tracking-tight font-sans text-gray-300"
        inputClasses="bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"
      />
      <Label
        value="Provide the same name as shown on your tax return."
        classes={{ root: `text-sm text-gray-640 font-sans tracking-tight` }}
      />
      <div className="flex space-x-3 pt-5 pb-2">
        <Label
          value="Address"
          classes={{ root: `text-base font-sans tracking-tight text-gray-300` }}
        />
        <Label
          value="Change"
          classes={{
            root: `text-base font-sans tracking-tight underline text-ideeza-100`,
          }}
        />
      </div>
      <Label
        value={
          <>
            Nahal tavor 5, <br /> tel Aviv Region
            <br /> 9064500
            <br /> Israel
          </>
        }
        classes={{ root: `text-gray-640 tracking-tight font-sans text-sm` }}
      />
      <UsPerson />
      <CheckboxFields
        mainClass="items-start -ml-1 mt-5 mb-3"
        value="I certify, under penalties of perjury, that the representations in this Tax Certificate are true and correct."
        labelClass="text-sm font-sans pl-1 pt-1 tracking-tight text-gray-640"
      />
    </div>
  );
}
export default TaxResidence2;
