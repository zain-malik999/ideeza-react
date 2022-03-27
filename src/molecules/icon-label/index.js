import React from "react";
import { Label, Tooltip } from "atoms";
import Proptype from "prop-types";
function Icon_Label(props) {
  const {
    mainClass,
    iconContanerClass,
    iconComponent,
    labelValue,
    lableClass,
    tooltipProps,
    onClick,
  } = props;
  return (
    <div
      className={mainClass}
      classes={{ root: "outline-none" }}
      onClick={onClick}
    >
      <Tooltip {...tooltipProps}>
        <div className={iconContanerClass}>{iconComponent}</div>
      </Tooltip>
      <Label value={labelValue} classes={lableClass} />
    </div>
  );
}
Icon_Label.defaultProps = {
  mainClass: "flex items-center mr-3",
  iconContanerClass:
    "bg-white flex items-center justify-center text-3xl rounded-full w-8 h-8",
  lableClass: { root: "font-bold text-2xl font-rubik" },
};
Icon_Label.prototype = {
  mainClass: Proptype.string,
  iconContanerClass: Proptype.string,
  iconComponent: Proptype.element,
  labelValue: Proptype.string,
  lableClass: Proptype.object,
  tooltipProps: Proptype.object,
  onClick: Proptype.func,
};
export default Icon_Label;
