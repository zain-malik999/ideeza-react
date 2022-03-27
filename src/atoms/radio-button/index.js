import React from "react";
import Radio from "@material-ui/core/Radio";
import Proptype from "prop-types";

function RadioButton(props) {
  return <Radio {...props} />;
}
RadioButton.defaultProps = {
  color: "default",
  disabled: false,
  size: "medium",
  classes: () => {},
};
RadioButton.prototype = {
  color: Proptype.oneOf(["default", "primary", "secondary"]),
  checked: RadioButton.bool,
  disabled: Proptype.bool,
  size: Proptype.oneOf(["medium", "small"]),
  classes: Proptype.object,
};
export default RadioButton;
