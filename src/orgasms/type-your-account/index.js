import React, { useState } from "react";
import { Label, Button } from "atoms";
import { PricingPopup } from "..";

function TypeYourAccount() {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <>
      <div className="rounded-lg bg-white shadow-md md:p-5 md:px-6 p-4">
        <div className="flex items-center justify-between md:py-2 pb-2">
          <Label
            value="Your account plan is"
            className="text-gray-300 font-semibold font-sans text-base"
          />
          <Button
            value="Your pricing plan"
            onClick={toggleOpen}
            classes={{
              root:
                "bg-ideeza-100 md:w-42 px-3 text-base tracking-tight capitalize text-white",
            }}
          />
        </div>
        <Label
          value={
            <>
              To change your pricing plan,{" "}
              <span className="text-current underline font-semibold">
                click here
              </span>
            </>
          }
          className="text-gray-300 text-right font-sans text-base tracking-tight"
        />
        <PricingPopup open={popup} toggleOpen={toggleOpen} />
      </div>
    </>
  );
}

export default TypeYourAccount;
