import React from "react";
import { AddComponentStepper } from "orgasms";
import { SearchInput } from "molecules";
import { Button } from "atoms";

function SchematicComponent() {
  return (
    <>
      <div className="flex justify-center">
        <AddComponentStepper currentStep={0} />
      </div>
      <div className="md:px-16 pt-4 space-y-3">
        <SearchInput
          placeholder="Add more components"
          className="bg-white flex flex-row-reverse border border-gray-750"
          inputClass="text-sm py-4 px-1 text-gray-600"
          iconClass="text-gray-900 ml-2"
        />
        <div className="bg-gray-200 h-96 rounded-md"></div>
        <div className="flex justify-between items-center w-full pt-7">
          <Button
            value="Back"
            className="bg-gray-375 border-opacity-50 border border-solid border-gray-325 w-28 transform-none text-gray-600 text-sm font-sans tracking-tight"
          />
          <Button
            value="Next"
            className="bg-current w-28 transform-none text-white text-sm font-sans tracking-tight"
          />
        </div>
      </div>
    </>
  );
}
export default SchematicComponent;
