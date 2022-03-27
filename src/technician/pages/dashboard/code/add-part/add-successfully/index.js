import React, { useState } from "react";
import { Confirmation, CodeStepper } from "orgasms";

function AddSuccessfully() {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <CodeStepper currentStep={2} />
      </div>
      <div className="lg:px-16 pt-4 w-full">
        <Confirmation
          iconEnd=""
          src="/assets/images/success-add.png"
          value="Your part is added."
          lableClass="text-gray-300 font-sans text-3xl tracking-normal"
          lableClass2="text-gray-300 font-sans text-3xl tracking-normal"
          btnValue="+Add new part"
          btnClass="bg-current rounded-full px-20 mt-5 py-1 text-sm font-sans tracking-tight transform-none text-white"
        />
      </div>
    </div>
  );
}
export default AddSuccessfully;
