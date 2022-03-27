import React from "react";
import { TableCell } from "@material-ui/core";
function Th(props) {
  return (
    <TableCell
      className={`${props.classes} font-semibold py-0 items-center flex text-xs`}
      {...props.column}
    >
      {props.children}
    </TableCell>
  );
}
Th.defaultProps = {
  classes: "",
};
export default Th;
