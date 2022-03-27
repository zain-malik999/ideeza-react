import React from "react";
import { Dropdown, Button, Select } from "atoms";
import { SearchInput } from "molecules";
import { IoSettingsSharp } from "react-icons/io5";

function ManagementTableHeader(props) {
  const {
    containerClass,
    mainClass,
    iconClass,
    btnValue,
    onClick,
    btnClass,
    btnValue2,
    onClick2,
    sortClass,
  } = props;
  return (
    <div className={containerClass}>
      <div className="flex items-center space-x-3 w-full">
        <Select
          placeholder="All"
          containerClass="md:w-20 w-full rounded-none bg-gray-150 text-gray-900 text-sm"
          inputClass="text-md tracking-tight p-2"
          options={[
            { value: "no_applied", name: "No one applied" },
            { value: "1_applied", name: "At least 1 applied" },
            { value: "status", name: "Pending status" },
          ]}
        />
        <Select
          placeholder="Sort by"
          containerClass={`md:w-20 w-full rounded-none bg-gray-150 text-gray-900 text-sm ${sortClass}`}
          inputClass="text-md tracking-tight p-2"
          options={[
            { value: "no_applied", name: "No one applied" },
            { value: "1_applied", name: "At least 1 applied" },
            { value: "status", name: "Pending status" },
          ]}
        />
      </div>
      <div className={`${mainClass} w-full`}>
        <SearchInput
          className="rounded-md border pl-0"
          inputClass="md:py-2 py-3 border"
        />
        <div className="md:flex items-center md:space-x-2 space-y-2 md:space-y-0">
          <Button
            value={btnValue}
            onClick={onClick}
            classes={{
              root:
                "px-4 w-full md:w-auto md:py-2 py-3 rounded-md tracking-tight bg-current text-white text-sm transform-none font-sans",
            }}
          />
          <Button
            value={btnValue2}
            onClick={onClick2}
            classes={{
              root: `px-4 w-full md:w-auto md:py-2 py-3 rounded-md tracking-tight bg-current text-white text-sm transform-none font-sans ${btnClass}`,
            }}
          />
          <Dropdown
            className={iconClass}
            icons={<IoSettingsSharp className={`text-lg text-gray-900`} />}
            itemsClasses={{
              root:
                "font-sans text-sm px-4 w-32 py-1 hover:text-current text-gray-300",
            }}
            options={[
              {
                name: "Pause",
                value: "Pause",
              },
              {
                name: "Approve",
                value: "Approve",
              },
              {
                name: "Delete",
                value: "Delete",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
ManagementTableHeader.defaultProps = {
  containerClass: "flex md:flex-row flex-col items-center justify-between px-4",
  mainClass:
    "md:flex justify-end items-center md:space-x-2 space-y-2 md:space-y-0",
  value: "Manage Users, Technicians & Service Providers",
  labelClass: "text-gray-300 text-base font-sans tracking-tight font-semibold",
};
export default ManagementTableHeader;
