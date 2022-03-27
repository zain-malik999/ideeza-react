import React from "react";
import { Select } from "atoms";
import { SearchInput } from "molecules";

function UserServiceTechnicianTableHeader() {
  return (
    <div className={`md:flex w-full items-center justify-between px-3 pt-3`}>
      <div className="grid md:grid-cols-7 grid-cols-2 gap-2 w-full">
        <Select
          placeholder="All Roles"
          containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
          inputClass="text-sm tracking-tight p-2 leading-4"
          options={[{ value: "Some", name: "Some" }]}
        />
        <Select
          placeholder="All status type"
          containerClass="w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
          inputClass="text-sm tracking-tight p-2 leading-4"
          options={[{ value: "Some", name: "Some" }]}
        />
        <Select
          placeholder="Date"
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
      </div>
      <div className={`md:w-64`}>
        <SearchInput
          className="rounded-md border pl-0"
          placeholder="Search"
          inputClass="py-2 border"
        />
      </div>
    </div>
  );
}
UserServiceTechnicianTableHeader.defaultProps = {};
export default UserServiceTechnicianTableHeader;
