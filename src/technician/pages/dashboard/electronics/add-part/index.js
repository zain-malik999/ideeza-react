import React from "react";
import { AddCartStepper, ElectronicsHeader, AddPartTable } from "orgasms";
import { SearchInput, Pagination } from "molecules";

function AddPartComponent() {
  return (
    <>
      <div className="flex justify-center">
        <AddCartStepper currentStep={0} />
      </div>
      <div className="md:px-16 pt-4 space-y-3">
        <SearchInput
          placeholder="Search the name of the product..."
          className="bg-white flex flex-row-reverse border border-gray-750"
          inputClass="text-sm py-3 text-gray-900"
          iconClass="text-gray-900"
        />
        <div className="bg-white rounded overflow-hidden shadow-full">
          <ElectronicsHeader
            mainClass="flex md:flex-row flex-col items-end space-y-3 md:space-y-0 md:px-5 p-3 md:py-4 md:items-center w-full justify-between bg-gray-375"
            btnClass1="hidden"
            btnClass2="hidden"
            btnClass3="hidden"
            btnClass4="hidden"
            btnValue5="Datasheet"
          />
          <AddPartTable />
          <Pagination mainClass="py-5 pt-7" />
        </div>
      </div>
    </>
  );
}
export default AddPartComponent;
