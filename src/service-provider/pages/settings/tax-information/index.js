import React from "react";
import { Label } from "atoms";
import { TaxResidence } from "orgasms";

function TaxInformation() {
  return (
    <div className="space-y-4 md:w-10/12 lg:w-7/12 xl:w-6/12 w-full">
      <Label
        value="Tax information"
        classes={{
          root:
            "text-ideeza-100 text-xl tracking-normal font-semibold font-sans",
        }}
      />
      <div className="bg-white rounded-lg shadow-md">
        <TaxResidence main2Class="hidden" />
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <TaxResidence main1Class="hidden" />
      </div>
    </div>
  );
}

export default TaxInformation;
