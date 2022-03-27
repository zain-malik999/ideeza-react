import React from "react";
import { CartStepper, Confirmation as UserConfirmation } from "orgasms";

function Confirmation() {
  return (
    <div>
      <div className="flex justify-center">
        <CartStepper currentStep={5} />
      </div>
      <UserConfirmation />
    </div>
  );
}

export default Confirmation;
