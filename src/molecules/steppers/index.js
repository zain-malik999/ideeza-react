import React from "react";
import clsx from "clsx";
import Proptype from "prop-types";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { ColorlibConnector, useColorlibStepIconStyles } from "./style";
export default function Steppers(props) {
  const { options, currentStep, Icons, className } = props;
  const classesIcon = useColorlibStepIconStyles();

  return (
    <div className={` ${className}`}>
      <Stepper
        alternativeLabel
        activeStep={currentStep}
        connector={<ColorlibConnector />}
        classes={{ root: "px-0 bg-transparent" }}
      >
        {options.map((label) => (
          <Step key={label} classes={{ root: "px-0" }}>
            <StepLabel
              classes={{
                label: "font-medium font-sans text-base tracking-tight",
                active: "text-ideeza-100",
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
      </Stepper>
    </div>
  );
}
Steppers.prototype = {
  options: Proptype.object,
  currentStep: Proptype.number,
  Icons: Proptype.object,
  className: Proptype.string,
};
