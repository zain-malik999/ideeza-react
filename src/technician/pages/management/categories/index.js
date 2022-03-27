import React, { useState } from "react";
import { Label, Button, Input } from "atoms";
import { SearchInput } from "molecules";

function Categories() {
  return (
    <div className="md:pt-2">
      <Label
        value="Manage Categories"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white shadow-lg rounded-md p-4">
        <div className="space-y-3 lg:w-1/3 md:w-1/2">
          <div className="flex justify-between space-x-1 border-b border-gray-160 pb-2 mb-2">
            <Label
              value="Electronics"
              className="text-gray-900 hover:text-current text-sm font-light tracking-tight cursor-pointer"
            />
            <Label
              value="Code"
              className="text-gray-900 hover:text-current text-sm font-light tracking-tight cursor-pointer"
            />
            <Label
              value="Cover"
              className="text-gray-900 hover:text-current text-sm font-light tracking-tight cursor-pointer"
            />
            <Label
              value="App"
              className="text-gray-900 hover:text-current text-sm font-light tracking-tight cursor-pointer"
            />
            <Label
              value="Network"
              className="text-gray-900 hover:text-current text-sm font-light tracking-tight cursor-pointer"
            />
            <Label
              value="Blog"
              className="text-gray-900 hover:text-current text-sm font-light tracking-tight cursor-pointer"
            />
          </div>
          <div className="shadow space-y-2 w-full">
            <SearchInput
              placeholder="Search trough categories..."
              className="bg-gray-1000 rounded-none flex flex-row-reverse border-b border-gray-160"
              inputClass="text-sm py-3 text-gray-300"
            />
            <Button
              value="+ Add new question"
              classes={{
                root: `text-current bg-gray-150 w-full border-t border-solid border-gray-160 rounded-none py-3 text-sm tracking-tight font-sans transform-none font-semibold`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
