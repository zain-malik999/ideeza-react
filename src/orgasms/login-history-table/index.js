import React, { useMemo } from "react";
import { Table } from "..";
import { TimeLine } from "molecules";
import { Checkbox, Dropdown, Badges as Badge, Label, Avatar } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
import moment from "moment";
function LoginHistoryTable({ loading, data }) {
  const columns = useMemo(
    () => [
      {
        Header: "Browser/Device",
        accessor: "Project",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.device}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Location",
        accessor: "Location",
        width: 200,
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.location}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Recent Activity",
        accessor: "Activity",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.location}
                className="text-gray-300 font-sans my-4"
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
            <>
              <Label
                value={moment(row?.original?.recent_activity).format(
                  "DD/MM/YYYY"
                )}
                className="text-current text-left w-full cursor-pointer font-sans my-4"
              />
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
      <Table
        className="flex items-center"
        columns={columns}
        data={data}
        loading={loading}
        headClass="text-3xl"
      />
    </>
  );
}
export default LoginHistoryTable;
