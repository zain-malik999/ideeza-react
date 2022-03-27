import React from "react";
import { Label } from "atoms";
import { RadioLabel } from "molecules";

function DisputePopup1() {
  return (
    <div>
      <Label
        classes={{ root: "text-gray-300 text-base leading-5" }}
        value="1. To start the dispute process, please tell us your problem:"
      />
      <div className="pl-2">
        <Label
          value="Did you receive your package?"
          className="text-gray-810 text-base"
        />
        <RadioLabel
          name="package"
          value="Yes"
          lableClass="text-gray-810 text-base pl-1"
        />
        <RadioLabel
          name="package"
          value="No"
          lableClass="text-gray-810 text-base pl-1"
        />
      </div>
      <Label
        value="Select your problem from the options below:"
        className="text-gray-300 text-base leading-5 pt-5 border-b border-gray-150 pb-3"
      />
      <div className="pl-2 pt-3">
        <Label
          value="Logistics tracking problem"
          className="text-gray-810 text-base pb-2"
        />
        <RadioLabel
          name="package"
          mainClass="-ml-1 flex items-start"
          value="Purchase Protection is running out, but package is still in transit"
          lableClass="text-gray-810 text-base pl-1 leading-5 tracking-tight"
        />
        <RadioLabel
          name="package"
          value="Package was returned to seller by shipping company"
          lableClass="text-gray-810 text-base pl-1 leading-5 tracking-tight"
        />
        <RadioLabel
          name="package"
          value="No tracking information"
          lableClass="text-gray-810 text-base pl-1 leading-5 tracking-tight"
        />
      </div>
      <div className="pl-2 pt-4">
        <Label value="Customs problem" className="text-gray-810 text-base" />
        <RadioLabel
          name="package"
          value="Customs is holding the package"
          lableClass="text-gray-810 text-base pl-1 tracking-tight"
        />
      </div>
      <div className="pl-2 pt-4">
        <Label value="Other" className="text-gray-810 text-base pb-1" />
        <RadioLabel
          name="package"
          value="Package sent to a wrong address"
          lableClass="text-gray-810 text-base pl-1 tracking-tight"
        />
      </div>
    </div>
  );
}

export default DisputePopup1;
