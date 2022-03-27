import React from "react";
import { Tooltip as TooltipItem } from "@material-ui/core";
import Proptype from "prop-types";
function Tooltip(props) {
  return (
    <div>
      <TooltipItem {...props}>{props.children}</TooltipItem>
    </div>
  );
}
Tooltip.prototype = {
  arrow: Proptype.bool,
  children: Proptype.element,
  classes: Proptype.object,
  disableFocusListener: Proptype.bool,
  disableHoverListener: Proptype.bool,
  disableTouchListener: Proptype.bool,
  enterDelay: Proptype.number,
  enterNextDelay: Proptype.number,
  enterTouchDelay: Proptype.number,
  open: Proptype.bool,
  placement:
    Proptype.oneOf[
      "bottom-end" |
        "bottom-start" |
        "bottom" |
        "left-end" |
        "left-start" |
        "left" |
        "right-end" |
        "right-start" |
        "right" |
        "top-end" |
        "top-start" |
        "top"
    ],
};
Tooltip.defaultProps = {
  title: "",
  alt: "tooltip",
};
export default Tooltip;
