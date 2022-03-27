import React, { useMemo } from "react";
import { Table } from "..";
import { Checkbox } from "atoms";
import { TwoLabels } from "molecules";
import { TableContainer } from "@material-ui/core";
import moment from "moment";
function DashboardTable({ loading, data, setSelectedRows }) {
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
        width: 50,
      },
      {
        Header: "Description",
        Cell: ({ row }) => {
          return (
            <>
              <TwoLabels
                mainClass="flex flex-col py-2"
                value={row?.original?.title}
                value2={row?.original?.description}
                labelClass="text-gray-300 font-sans font-bold"
                labelClass2="text-gray-630 font-sans leading-4"
              />
            </>
          );
        },
        width: 250,
      },
      {
        Header: "Domain",
        accessor: "domain",
        className: "pl-2",
      },
      {
        Header: "Due Date",
        Cell: ({ row }) => {
          return moment(row?.original?.project?.end_date).format("MM.DD.YYYY");
        },
      },
      {
        Header: "Posted before",
        Cell: ({ row }) => {
          return moment(row?.original?.project?.start_date).fromNow();
        },
      },
      {
        Header: (val) => <></>,
        accessor: "abc",
        check: true,
        Cell: ({ row }) => {
          return (
            <>
              <img src="/assets/images/time.png" alt="time" className="w-6" />
            </>
          );
        },
        width: 60,
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
          headClass=""
          className="flex items-center pt-8 w-full"
          columns={columns}
          data={data}
          loading={loading}
        />
      </TableContainer>
    </>
  );
}
export default DashboardTable;
