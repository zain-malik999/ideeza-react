import React, { useMemo, useState } from "react";
import { Table } from "..";
import { Checkbox, Label } from "atoms";
import { TimeLine } from "molecules";
import { TableContainer } from "@material-ui/core";
import moment from "moment";
function T_DashboardTable({ loading, data }) {
  const columns = useMemo(
    () => [
      {
        accessor: "id",
        Cell: ({ row }) => {
          return (
            <>
              <Checkbox
                color="primary"
                className="mr-2"
                {...row.getToggleRowSelectedProps()}
              />
            </>
          );
        },
        Header: ({ row, getToggleAllRowsSelectedProps }) => {
          return (
            <>
              <Checkbox
                color="primary"
                className="mr-2"
                {...getToggleAllRowsSelectedProps()}
              />
            </>
          );
        },
        check: true,
        width: 40,
      },
      {
        Header: "Description",
        // accessor: (e) => e?.description,
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.description}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
        width: 220,
      },
      {
        Header: "Domain",
        //accessor: (e) => e?.Article,
        accessor: "domain",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <div className="space-x-1 flex items-center opacity-50">
              <img src="/assets/images/type1.png" className="w-4" alt="" />,
              <img src="/assets/images/type2.png" className="w-5" alt="" />,
              <img src="/assets/images/type3.png" className="w-4" alt="" />
            </div>
          );
        },
      },
      {
        Header: "Due Date",
        // accessor: (e) => e.storeName,
        accessor: "Due_date",
        Cell: ({ row }) => {
          return (
            <TimeLine
              value={moment(row?.original?.start_date).format("MM/DD/YYYY")}
              width="50%"
            />
          );
        },
      },
      {
        Header: "Progress",
        // accessor: (e) => e.storeName,
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.status}
                className="text-yellow-300 font-semibold uppercase font-sans"
              />
            </>
          );
        },
      },
      {
        Header: (val) => <></>,
        accessor: "abc",
        check: true,
        Cell: ({ row }) => {
          return (
            <div className="space-x-1 flex items-center">
              <img src="/assets/images/time.png" alt="time" className="w-5" />
              <img
                src="/assets/images/notify.png"
                alt="notify"
                className="w-5"
              />
              <img src="/assets/images/hurry.png" alt="hurry" className="w-5" />
            </div>
          );
        },
        width: 100,
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
          className="flex items-center pt-2"
          columns={columns}
          data={data}
          loading={loading}
        />
      </TableContainer>
    </>
  );
}
export default T_DashboardTable;
