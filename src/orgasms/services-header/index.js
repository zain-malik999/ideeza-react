import React, { useState } from "react";
import { Label, Select, Button } from "atoms";
import { SearchInput, SelectField } from "molecules";
import { FilterPopup } from "..";
import Proptype from "prop-types";
function ServicesHeader(props) {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  const {
    mainClass,
    value1,
    labelClass,
    options,
    placeholder,
    name,
    defaultValue,
    control,
    change,
    register,
    isControlled,
    error,
    containerClass,
    InputPlaceholder,
    row,
  } = props;
  return (
    <div className={mainClass}>
      <Label value={value1} classes={{ root: `${labelClass}` }} />
      <div className="w-32">
        <Select
          options={options}
          inputClass="text-sm p-2 pr-4 bg-gray-100 rounded border border-gray-125 border-solid"
          placeholder={placeholder}
          classes={containerClass}
          name={name}
          defaultValue={defaultValue}
          control={control}
          change={change}
          register={register}
          isControlled={isControlled}
          error={error}
        />
      </div>
      <div className={row}>
        <SearchInput
          className="rounded border pl-0"
          placeholder={InputPlaceholder}
          inputClass="md:py-2 h-5 py-3"
        />
        <div className="grid w-full grid-cols-1 md:flex gap-3 justify-end">
          <SelectField
            mainClasses="grid grid-cols-2 md:flex md:w-42 items-center"
            className="text-sm p-2 pr-4 bg-gray-100 rounded border border-gray-125 border-solid tracking-tight"
            containerClass={{ root: "text-xs" }}
            value="Type:"
            placeholder="Fabrication"
            labelClasses="text-sm pr-2 whitespace-nowrap tracking-tight text-gray-300 font-sans"
          />
          <SelectField
            mainClasses="grid grid-cols-2 md:flex md:w-32 items-center"
            className="text-sm p-2 pr-4 bg-gray-100 rounded border border-gray-125 border-solid tracking-tight"
            containerClass={{ root: "text-xs text-gray-910" }}
            value="Sort by:"
            placeholder="Cost"
            labelClasses="text-sm pr-2 whitespace-nowrap tracking-tight text-gray-300 font-sans md:text-right text-left"
          />
          <Button
            value="Filter by"
            onClick={toggleOpen}
            classes={{
              root: `bg-gray-100 rounded px-4 whitespace-nowrap tracking-tight transform-none text-md font-sans`,
            }}
          />
        </div>
      </div>
      <FilterPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}
ServicesHeader.defaultProps = {
  mainClass: "space-y-2",
  labelClass:
    "text-current font-sans text-lg font-semibold tracking-normal pb-2",
  options: [
    { value: "Lamboghini", name: "Lamboghini" },
    { value: "Chair", name: "Chair" },
    { value: "All Products", name: "All Products" },
  ],
  inputClass: "w-20 bg-gray-160 rounded",
  containerClass: { root: "w-20 px-1 mt-5" },
  row: "grid md:grid-cols-2 grid-cols-1 items-center gap-3",
  inputClasses: "border border-solid border-gray-160",
};
ServicesHeader.prototype = {
  mainClasses: Proptype.string,
  labelClasses: Proptype.object,
  value: Proptype.string,
  containerClass: Proptype.object,
  options: Proptype.array,
};
export default ServicesHeader;
