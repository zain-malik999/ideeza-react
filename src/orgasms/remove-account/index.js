import React from "react";
import { RadioLabel } from "molecules";
import { Label } from "atoms";

function RemoveAccount() {
  return (
    <>
      <div className="bg-white rounded-lg md:px-6 px-4 py-3 pb-16 shadow-md">
        <Label
          value="Why you want to remove the account?"
          classes={{
            root: "text-gray-300 pl-1 pb-3 text-base tracking-tight font-sans",
          }}
        />
        <RadioLabel
          radioClass="mr-2 p-0"
          mainClass="flex items-center -ml-2"
          lableClass="text-gray-850 text-sm font-sans"
          value="I don't need the website anymore"
        />
        <RadioLabel
          radioClass="mr-2 p-0"
          mainClass="flex items-center -ml-2"
          lableClass="text-gray-850 text-sm font-sans"
          value="I found this website useless"
        />
        <RadioLabel
          radioClass="mr-2 p-0"
          mainClass="flex items-center -ml-2"
          lableClass="text-gray-850 text-sm font-sans"
          value="I have technical issues"
        />
        <RadioLabel
          radioClass="mr-2 p-0"
          mainClass="flex items-center -ml-2"
          lableClass="text-gray-850 text-sm font-sans"
          value="Other"
        />
      </div>
    </>
  );
}

export default RemoveAccount;
