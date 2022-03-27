import React from "react";
import { Steppers } from "molecules";
export default function CartStepper(props) {
  const { currentStep, mainClass } = props;
  return (
    <div
      className={`w-full ${
        mainClass ? mainClass : ""
      } flex items-center justify-center`}
    >
      <Steppers
        currentStep={currentStep}
        className="w-3/5"
        options={["Add Part", "Code", "Successfully"]}
        Icons={{
          1: <span>1</span>,
          2: <span>2</span>,
          3: <span>3</span>,
        }}
      />
    </div>
  );
}
