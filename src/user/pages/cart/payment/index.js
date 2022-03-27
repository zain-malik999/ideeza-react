import React from "react";
import { CartStepper, CartFooter, PaymentTable, Payment2 } from "orgasms";
export default function Payment() {
  return (
    <>
      <div className="flex justify-center">
        <CartStepper currentStep={4} />
      </div>
      <div className="bg-white shadow rounded-lg md:p-8 p-4">
        <div className="bg-gray-150 rounded-lg p-8 pb-4 pr-5 lg:pl-42">
          <div className="max-h-64 overflow-y-auto pr-10 mb-5">
            <PaymentTable />
          </div>
          <Payment2 />
        </div>
        <CartFooter btnContinue="hidden" valueNext="Confirm" />
      </div>
    </>
  );
}
