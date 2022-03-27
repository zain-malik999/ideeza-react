import React from "react";
import { Label } from "atoms";
import { PaymentDetails, GetPaid1 } from "orgasms";

function GetPaid() {
  return (
    <div className="space-y-4 md:w-10/12 lg:w-7/12 xl:w-6/12 w-full">
      <Label
        value="Get paid"
        classes={{ root: "text-ideeza-100 text-xl font-semibold font-sans" }}
      />
      <GetPaid1 />
      <PaymentDetails
        value="Balance"
        btnClass="hidden"
        noSetupClass="hidden"
        value2Class="text-gray-300 text-sm"
        value2="Your balance is $0.00"
        btnValue2="Get paid now"
        bottomClass="hidden"
        SelectedPaymentClass="hidden"
      />
      <PaymentDetails
        value="Payment details"
        btnValue="Add method"
        labelBtnClass="hidden"
        bottomClass="hidden"
        noSetupClass="pb-2"
        SelectedPaymentClass="pb-2"
      />
      <PaymentDetails
        value="Payment details"
        btnValue="Add method"
        btnClass2="hidden"
        SelectedPaymentClass="hidden"
        value2Class="text-gray-600 text-md"
        value2={
          <>
            Ideeza coupon balance:{" "}
            <span className="text-gray-300 text-lg">$0</span>
          </>
        }
        btnClass="hidden"
        noSetupClass="hidden"
      />
    </div>
  );
}

export default GetPaid;
