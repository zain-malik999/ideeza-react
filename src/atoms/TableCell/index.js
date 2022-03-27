import React from "react";
import { TableCell } from "@material-ui/core";
function Cell(props) {
  return (
    <>
      <TableCell
        className={`${props.className} flex items-center py-0 text-sm font-sans tracking-tight`}
        {...props.cell}
      >
        {props.children}
      </TableCell>
    </>
  );
}
export default Cell;
