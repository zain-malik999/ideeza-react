import React from "react";
import { Popover as PopoverAtom } from "@material-ui/core/";
import Proptype from "prop-types";
function Popover(props) {
  return <PopoverAtom {...props}>{props.children}</PopoverAtom>;
}
Popover.defaulProps = {
  id: null,
  open: false,
  onClose: () => {},
  anchorEl: "",
};
Popover.prototype = {
  id: Proptype.string,
  open: Proptype.bool,
  onClose: Proptype.func,
  anchorEl: Proptype.any,
  transformOrigin: Proptype.object,
  TransitionProps: Proptype.object,
  children: Proptype.node,
  anchorOrigin: Proptype.object,
  anchorPosition: Proptype.object,
  classes: Proptype.classes,
  elevation: Proptype.number,
};
export default React.memo(Popover);
