import React, { useState } from "react";
import { Label } from "atoms";
import { Pagination } from "molecules";
import {
  ManagementTableHeader,
  ShippingTable,
  AddShippingPopup,
} from "orgasms";

function ShippingMethod() {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <div className="pt-4">
      <Label
        value="Shipping Method"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <ManagementTableHeader
          onClick={toggleOpen}
          iconClass="-mr-3 border p-2"
          btnValue="Add new +"
          sortClass="hidden"
          btnClass="hidden"
          containerClass="flex md:flex-row flex-col items-center justify-between md:px-4 p-4 space-y-3 md:space-y-0"
        />
        <ShippingTable />
        <Pagination mainClass="pt-6 pb-12" />
      </div>
      <AddShippingPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default ShippingMethod;
