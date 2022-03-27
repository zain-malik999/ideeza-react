import React, { useEffect, useState } from "react";
import { Label } from "atoms";
import { SelectField } from "molecules";
import { NetworkCard } from "orgasms";

function Network() {
  return (
    <div className="pt-4">
      <Label
        value="Network"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow space-y-3 md:p-6 p-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-12 gap-y-3 md:gap-y-0">
          <SelectField
            mainClasses="grid grid-cols-2 md:flex items-center space-x-2"
            className="w-full text-sm bg-gray-150 text-gray-900 border p-2 rounded border-solid border-gray-850 border-opacity-40"
            labelClasses="text-gray-300 text-sm font-sans tracking-tight"
            value="Country"
            placeholder="Isreal"
          />
          <SelectField
            mainClasses="grid grid-cols-2 md:flex items-center space-x-2"
            className="w-full text-sm bg-gray-150 text-gray-900 border p-2 rounded border-solid border-gray-850 border-opacity-40"
            labelClasses="text-gray-300 text-sm font-sans tracking-tight"
            value="Type"
            placeholder="Cellular, RF"
          />
        </div>
        <NetworkCard value="Cellular" rf="hidden" />
        <NetworkCard value="RF" cellular="hidden" />
      </div>
    </div>
  );
}

export default Network;
