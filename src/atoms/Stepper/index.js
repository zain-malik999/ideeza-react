import React from "react";
import clsx from "clsx";
import Proptype from "prop-types";
import { Stepper as Steppers, Step, StepLabel } from "@material-ui/core";

import {
  useStyles,
  ColorlibConnector,
  useColorlibStepIconStyles,
} from "./style";
function Stepper(props) {
  const { options, currentStep, Icons, className } = props;
  const classesIcon = useColorlibStepIconStyles();
  const classes = useStyles();

  return (
    <div className={`w-full ${className}`}>
      <Steppers
        alternativeLabel
        activeStep={currentStep}
        connector={<ColorlibConnector />}
        classes={{ root: "px-0" }}
      >
        {options.map((label, k) => (
          <Step key={label} classes={{ root: "px-0" }}>
            <StepLabel
              classes={{
                label:
                  "text-gray-300 hover:text-current font-medium font-sans text-xs tracking-normal",
              }}
              StepIconComponent={(props) => {
                const { active, completed } = props;
                const icons = Icons;

                return (
                  <div
                    className={clsx(classesIcon.root, {
                      [` ${classesIcon.active}`]: active,
                      [` ${classesIcon.completed}`]: completed,
                    })}
                  >
                    <div className="active-filter">
                      {" "}
                      {icons[String(props.icon)]}
                    </div>
                  </div>
                );
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Steppers>
    </div>
  );
}
Stepper.prototype = {
  options: Proptype.object,
  currentStep: Proptype.number,
  Icons: Proptype.object,
  className: Proptype.string,
};

export default Stepper;
