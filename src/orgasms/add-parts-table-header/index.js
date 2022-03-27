import React from "react";
import { Select } from "atoms";
import { SearchInput } from "molecules";
function AddPartsTableHeader(props) {
  const { containerClass } = props;
  return (
    <div className={containerClass}>
      <Select
        placeholder="All Roles"
        containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
        inputClass="text-sm tracking-tight p-2 leading-4"
        options={[{ value: "Some", name: "Some" }]}
      />
      <Select
        placeholder="All Type"
        containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
        inputClass="text-sm tracking-tight p-2 leading-4"
        options={[{ value: "Some", name: "Some" }]}
      />
      <Select
        placeholder="All Packages"
        containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
        inputClass="text-sm tracking-tight p-2 leading-4"
        options={[{ value: "Some", name: "Some" }]}
      />
      <Select
        placeholder="Category"
        containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
        inputClass="text-sm tracking-tight p-2 leading-4"
        options={[{ value: "Some", name: "Some" }]}
      />
      <Select
        placeholder="Sub-Category"
        containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
        inputClass="text-sm tracking-tight p-2 leading-4"
        options={[{ value: "Some", name: "Some" }]}
      />
      <Select
        placeholder="All Columns"
        containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
        inputClass="text-sm tracking-tight p-2 leading-4"
        options={[{ value: "Some", name: "Some" }]}
      />
      <div className={`col-span-2 md:pl-6`}>
        <SearchInput
          className="rounded-md border pl-0"
          inputClass="py-2 border"
        />
      </div>
    </div>
  );
}
AddPartsTableHeader.defaultProps = {
  containerClass:
    "grid md:grid-cols-8 grid-cols-2 gap-2 items-center justify-between px-2 pt-4",
};
export default AddPartsTableHeader;
