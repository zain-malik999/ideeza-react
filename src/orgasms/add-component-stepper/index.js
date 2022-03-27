import React from "react";
import { Label } from "atoms";
import { Steppers } from "molecules";
function AddComponentStepper(props) {
  const { currentStep, mainClass } = props;
  return (
    <div className={`lg:w-1/2 md:w-3/5 w-full ${mainClass}`}>
      <Steppers
        currentStep={currentStep}
        className=""
        options={["Schematic", "Design", "Code", "General"]}
        Icons={{
          1: (
            <Label
              value="1"
              className="p-3 w-12 h-12 flex items-center justify-center"
            />
          ),
          2: (
            <Label
              value="2"
              className="p-3 w-12 h-12 flex items-center justify-center"
            />
          ),
          3: (
            <Label
              value="3"
              className="p-3 w-12 h-12 flex items-center justify-center"
            />
          ),
          4: (
            <Label
              value="4"
              className="p-3 w-12 h-12 flex items-center justify-center"
            />
          ),
        }}
      />
    </div>
  );
}
export default AddComponentStepper;
