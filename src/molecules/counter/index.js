import React from "react";
import Proptype from "prop-types";
import { Button, Label } from "atoms";
function Counter(props) {
  const {
    buttonClasses,
    buttonLabel,
    mainCounter,
    value,
    isCounter,
    clickIncrement,
    clickDecrement,
  } = props;

  return (
    <div className={`flex items-center ${mainCounter}`}>
      {isCounter ? (
        <Button
          click={clickDecrement}
          classes={{ root: `${buttonClasses}` }}
          value="-"
        />
      ) : null}
      <Label className={buttonLabel} value={value} />
      {isCounter ? (
        <Button
          click={clickIncrement}
          classes={{ root: `${buttonClasses}` }}
          value="+"
        />
      ) : null}
    </div>
  );
}
Counter.prototype = {
  buttonClasses: Proptype.object,
  buttonLabel: Proptype.string,
  mainCounter: Proptype.object,
  isCounter: Proptype.bool,
  clickPlus: Proptype.func,
  clickIncrement: Proptype.func,
  clickDecrement: Proptype.func,
};
Counter.defaultProps = {
  buttonClasses: "m-0 min-w-min text-current text-base bg-transparent p-0 px-2",
  buttonLabel:
    "m-0 font-medium text-gray-300 text-md tracking-tight leading-none px-2",
  mainCounter: "m-0 flex items-center",
};
export default Counter;
