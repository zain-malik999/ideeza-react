import React, { useMemo } from "react";
import { Table } from "..";
import { Button, Label } from "atoms";
import { TableContainer } from "@material-ui/core";
function CodeAddPartTable({ loading }) {
  const data = [
    {
      Input_Pins: "2",
      Output_Pins: "4",
    },
    {
      Input_Pins: "2",
      Output_Pins: "4",
    },
    {
      Input_Pins: "2",
      Output_Pins: "4",
    },
    {
      Input_Pins: "2",
      Output_Pins: "4",
    },
    {
      Input_Pins: "2",
      Output_Pins: "4",
    },
  ];
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <div className="flex items-center justify-between py-1 w-full">
              <Label value="If - then - else" className="" />
              <img src="/assets/images/addpart-1.png" alt="" />
            </div>
          );
        },
        width: 220,
      },
      {
        Header: "Input Pins",
        accessor: "Input_Pins",
        width: 100,
      },
      {
        Header: "Output Pins",
        accessor: "Output_Pins",
        width: 110,
      },
      {
        Header: "Description",
        accessor: "Description",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                className="overflow-ellipsis overflow-hidden whitespace-nowrap"
              />
            </>
          );
        },
        width: 280,
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
                value="+ Add Part"
                className="rounded-full bg-gray-100 shadow-none border border-solid border-gray-900 capitalize font-sans my-2 tracking-tight w-32 py-1.5"
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
          root: `w-full overflow-x-auto border rounded-b-lg shadow-full z-100 bg-white`,
        }}
      >
        <Table
          headClass="py-2.5 pb-4"
          className="flex items-center pt-3 w-full"
          columns={columns}
          data={data}
          loading={loading}
        />
        <Label
          value="See all results >"
          className="text-current py-5 cursor-pointer font-semibold font-sans tracking-tight text-md text-center"
        />
      </TableContainer>
    </>
  );
}

export default CodeAddPartTable;
