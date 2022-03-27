import React from "react";
import { Label } from "atoms";

function SelectedPayment() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="md:w-14 w-14 xl:w-18">
        <img src="/assets/images/paypal.png" className="md:w-9 w-7" />
      </div>
      <div className="w-5/12">
        <Label
          value="Paypal"
          classes={{ root: "font-sans text-gray-300 md:text-sm text-xs" }}
        />
        <Label
          value="tayyab.8563@gmail.com"
          classes={{ root: "font-sans text-gray-300 md:text-sm text-xs" }}
        />
      </div>
      <div className="w-7/12 text-right flex justify-between items-center">
        <Label
          value="Main Method"
          classes={{
            root: "font-sans w-full text-gray-300 md:text-sm text-xs",
          }}
        />
        <Label
          value="Delete"
          classes={{
            root:
              "text-current w-full text-right font-sans hover:underline cursor-pointer md:text-sm text-xs",
          }}
        />
      </div>
    </div>
  );
}
export default SelectedPayment;
