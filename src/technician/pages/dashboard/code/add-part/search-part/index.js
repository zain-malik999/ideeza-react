import React, { useState } from "react";
import { CodeStepper, CodeAddPartTable } from "orgasms";
import { SearchInput } from "molecules";

function SearchPart() {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <CodeStepper currentStep={0} />
      </div>
      <div className="md:px-16 pt-4">
        <SearchInput
          placeholder="Search Part in IDEEZA database or Click here to make new one.."
          className="bg-white flex flex-row-reverse border border-gray-750"
          inputClass="text-sm py-4 px-1 text-gray-600"
          iconClass="text-gray-900 ml-2"
        />
        <div className="">
          <CodeAddPartTable />
        </div>
      </div>
    </div>
  );
}

export default SearchPart;
