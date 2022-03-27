import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";
function AdditionalPayment(props) {
  return (
    <>
      <div className="flex pt-4 w-full items-center justify-between ">
        <Label
          classes={{
            root:
              "text-lg font-sans tracking-tighter font-semibold text-current",
          }}
          value="Additional payments and credits"
        />
        <Icon_Label
          mainClass="space-x-6 flex items-center flex-row-reverse"
          tooltipProps={{ open: false }}
          iconComponent={
            <img src="/assets/images/calendar.png" className="w-5 h-5" />
          }
          iconContanerClass="flex items-center justify-center w-12 h-12 rounded-xl shadow bg-gray-1000"
          labelValue="Last 30 days: $0.00"
          lableClass={{
            root: `text-md font-sans txet-gray-300 tracking-tighter pr-3`,
          }}
        />
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-4">
          <Label
            value="Date"
            classes={{ root: "text-md text-gray-300 tracking-tight font-sans" }}
          />
          <Label
            value="Description"
            classes={{ root: "text-md text-gray-300 tracking-tight font-sans" }}
          />
          <Label
            value="Charge"
            classes={{ root: "text-md text-gray-300 tracking-tight font-sans" }}
          />
          <Label
            value="Invoice"
            classes={{ root: "text-md text-gray-300 tracking-tight font-sans" }}
          />
        </div>
        <div className="border-t border-b border-gray-100 py-2 mt-4">
          <Label
            value="No transactions meet your selected criteria"
            classes={{ root: "text-center text-gray-900 text-sm" }}
          />
        </div>
      </div>
    </>
  );
}
export default AdditionalPayment;
