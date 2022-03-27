import React from "react";
import { TableCell, TableRow } from "atoms";
import { TableBody } from "@material-ui/core";
function TBody({
  body,
  rows,
  prepareRow,
  click,
  visibleColumns,
  Component,
  className,
}) {
  const firstPageRows = rows.slice(0, 100);
  return (
    <TableBody className="tr-stripped w-full" {...body}>
      {firstPageRows.map((row, i) => {
        prepareRow(row);
        return (
          <>
            <TableRow
              click={(e) => {
                return click(row);
              }}
              header={{ ...row.getRowProps() }}
            >
              {row.cells.map((cell) => {
                return (
                  <TableCell cell={{ ...cell.getCellProps() }}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          </>
        );
      })}
    </TableBody>
  );
}
export default TBody;
