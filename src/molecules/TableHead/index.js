import React from "react";
import { TableRow as Tr, Thead as Th } from "atoms";
import { TableHead } from "@material-ui/core";
function Thead({ headerGroups, className, headClass, tableHead }) {
  return (
    <TableHead className={`py-0 ${className}`}>
      {headerGroups.map((headerGroup) => (
        <Tr
          className={`${tableHead}`}
          header={{ ...headerGroup.getHeaderGroupProps() }}
        >
          {headerGroup.headers.map((column) => (
            <Th
              classes={headClass}
              column={{
                ...column.getHeaderProps(column.getSortByToggleProps()),
              }}
            >
              <div className="flex items-center tracking-tight font-sans font-normal text-md text-gray-300">
                {column.render("Header")}
              </div>
            </Th>
          ))}
        </Tr>
      ))}
    </TableHead>
  );
}
Thead.defaultProps = {
  className: "bg-white",
  tableHead: "bg-white",
};
export default Thead;
