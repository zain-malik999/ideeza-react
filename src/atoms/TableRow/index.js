import React from "react";
import { TableRow } from "@material-ui/core";
export default function TRow(props) {
  return (
    <>
      <TableRow
        className={props.className}
        onClickCapture={props.click}
        {...props.header}
      >
        {props.children}
      </TableRow>
    </>
  );
}
