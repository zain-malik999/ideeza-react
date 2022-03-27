import React from "react";
import { Button } from "atoms";
import { SearchInput } from "molecules";
import { DealerTable } from "..";
function Dealer() {
  return (
    <div className="rounded-lg bg-white shadow-md space-y-3 p-4 w-full">
      <div className="md:flex items-center justify-between md:space-x-2 space-y-2 md:space-y-0">
        <div className="grid grid-cols-2 items-center space-x-2">
          <Button
            value="+ Add new part"
            classes={{
              root: `text-white bg-ideeza-100 px-2 tracking-tighter font-sans text-base transform-none`,
            }}
          />
          <Button
            value="+ Add new component"
            classes={{
              root: `text-white bg-ideeza-100 px-2 tracking-tighter font-sans text-base transform-none whitespace-nowrap`,
            }}
          />
        </div>
        <SearchInput
          placeholder="Search"
          className="border border-solid"
          inputClass="bg-white rounded text-sm py-2"
        />
      </div>
      <div className="bg-gray-150 rounded p-4">{/* <DealerTable /> */}</div>
    </div>
  );
}

export default Dealer;
