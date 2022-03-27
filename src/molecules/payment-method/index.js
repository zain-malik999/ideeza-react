import React from "react";
import { Label, Button } from "atoms";
function PaymentMethod() {
  return (
    <div className="flex items-start space-x-6">
      <img src="/assets/images/paypal.png" className="w-10" />
      <div className="md:flex items-center md:space-x-4 space-y-3">
        <div>
          <Label
            value="Paypal"
            classes={{
              root: `md:text-lg text-base font-sans tracking-tight text-gray-300 -mt-1`,
            }}
          />
          <Label
            value="- $1 USD IDEEZA withdrawal fee"
            classes={{
              root: `md:text-md txet-sm text-gray-300 tracking-tight font-sans`,
            }}
          />
          <Label
            classes={{
              root: "md:text-md txet-sm tracking-tight text-gray-300",
            }}
            value={
              <>
                - Paypal may charge
                <span className="text-ideeza-100"> additional fees </span>
                for sending and withdrawing funds.
                <span className="text-ideeza-100">
                  {" "}
                  Don't have a Paypal account?
                </span>
              </>
            }
          />
        </div>
        <Button
          value="Set Up"
          classes={{
            root: `text-ideeza-100 font-sans px-4 py-2 md:w-36 w-32 border border-solid border-ideeza-100 tracking-tight md:text-lg taxte-base rounded-lg capitalize`,
          }}
        />
      </div>
    </div>
  );
}
export default PaymentMethod;
