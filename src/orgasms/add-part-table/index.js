import React, { useMemo } from "react";
import { Table } from "..";
import { Button, Label } from "atoms";
import { TwoLabels } from "molecules";
import { TableContainer } from "@material-ui/core";
function AddPartTable({ loading }) {
  const data = [
    {
      Country: "PCB & Assamble",
      Package: "01.01.2020",
    },
    {
      Country: "PCB & Assamble",
      Package: "01.01.2020",
    },
    {
      Country: "PCB & Assamble",
      Package: "01.01.2020",
    },
    {
      Country: "PCB & Assamble",
      Package: "01.01.2020",
    },
    {
      Country: "PCB & Assamble",
      Package: "01.01.2020",
    },
  ];
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label value="Refund from dispute" className="" />
            </>
          );
        },
        width: 250,
      },
      {
        Header: "Country",
        accessor: "Country",
        className: "pl-2",
      },
      {
        Header: "Package",
        // accessor: (e) => e.storeName,
        accessor: "Package",
      },
      {
        Header: "Manufacturer",
        // accessor: (e) => e.storeName,
        accessor: "Manufacturer",
        Cell: ({ row }) => {
          return (
            <>
              <Label value="Microchip" className="text-current" />
            </>
          );
        },
      },
      {
        Header: (val) => (
          <>
            <Label value="Action" className="text-center w-32" />
          </>
        ),
        accessor: "abc",
        check: true,
        Cell: ({ row }) => {
          return (
            <>
              <Button
                value="Select"
                className="rounded-full border border-solid border-gray-900 capitalize font-sans my-2 tracking-tight w-32 py-1.5"
              />
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <TableContainer
        classes={{
          root: `w-full overflow-x-auto`,
        }}
      >
        <Table
          headClass="pb-2.5"
          className="flex items-center pt-3 w-full"
          columns={columns}
          data={data}
          loading={loading}
        />
      </TableContainer>
    </>
  );
}
export default AddPartTable;
