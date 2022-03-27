import React from "react";
import { Dropdown, Button, Label } from "atoms";
import { SearchInput } from "molecules";
import { IoSettingsSharp } from "react-icons/io5";
function BlogTableHeader(props) {
  const {
    containerClass,
    mainClass,
    value,
    labelClass,
    iconClass,
    btnValue,
    iconEnd,
    prop,
    onClick,
    handleSearch,
  } = props;
  return (
    <div className={containerClass}>
      <Label value={value} classes={{ root: `${labelClass}` }} />
      {prop}
      <div className={`${mainClass}`}>
        <SearchInput
          className="rounded-md border pl-0"
          inputClass="md:py-2 py-3 border"
          change={handleSearch}
        />
        <div className="flex items-center space-x-1">
          <Button
            value={btnValue}
            iconEnd={iconEnd}
            onClick={onClick}
            classes={{
              root:
                "lg:px-4 px-2 whitespace-nowrap w-full md:w-auto md:py-2 py-3 rounded-md tracking-tight bg-current text-white lg:text-sm text-xs transform-none font-sans",
            }}
          />
          <Dropdown
            icons={
              <IoSettingsSharp className={`text-lg md:-mr-4 ${iconClass}`} />
            }
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
    </div>
  );
}
BlogTableHeader.defaultProps = {
  containerClass: "md:flex items-center justify-between md:pl-4 p-3 md:pt-0",
  mainClass:
    "md:flex justify-end items-center md:space-x-4 space-y-2 md:space-y-0 pr-0 md:pr-2 md:p-4",
  value: "Manage Users, Technicians & Service Providers",
  labelClass:
    "text-gray-300 text-base font-sans tracking-tight font-semibold pb-1 md:pb-0",
};
export default BlogTableHeader;
