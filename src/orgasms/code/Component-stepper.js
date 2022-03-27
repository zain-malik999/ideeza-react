import React from "react";
import { Steppers } from "molecules";
export default function ComponentStepper(props) {
  const { currentStep, mainClass } = props;
  return (
    <div
      className={`w-full ${
        mainClass ? mainClass : ""
      } flex items-center justify-center`}
    >
      <Steppers
        currentStep={currentStep}
        className="md:w-2/4 w-full"
        options={["Add Component", "Added Successfully"]}
        Icons={{
          1: <span>1</span>,
          2: <span>2</span>,
        }}
      />
    </div>
  );
}
