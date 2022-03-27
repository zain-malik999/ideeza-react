import React from "react";
import { Dropdown, Select } from "atoms";
import { SearchInput } from "molecules";
import { IoSettingsSharp } from "react-icons/io5";
function BlogsTableHeader(props) {
  const { mainClass } = props;
  return (
    <div className={`md:flex items-center justify-between pl-4`}>
      <Select
        placeholder="All"
        containerClass="md:w-20 w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
        inputClass="text-md tracking-tight p-2"
        options={[{ value: "Some", name: "Some" }]}
      />
      <div
        className={`flex justify-end items-center pr-0 md:pr-2 md:p-4 ${mainClass}`}
      >
        <SearchInput
          className="rounded-md border pl-0"
          placeholder="Search"
          inputClass="md:py-2 py-3 border"
        />
        <Dropdown
          icons={<IoSettingsSharp className={`text-lg text-gray-900`} />}
          itemsClasses={{
            root:
              "font-sans text-sm px-4 w-32 py-3 hover:text-current text-gray-900",
          }}
          options={[
            {
              name: "View",
              value: "View",
            },
          ]}
        />
      </div>
    </div>
  );
}
BlogsTableHeader.defaultProps = {};
export default BlogsTableHeader;
