import React, { useMemo } from "react";
import { Table } from "..";
import { Label, Dropdown, Checkbox } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function UserServiceTechnicianTable({ loading }) {
  const data = [{}, {}, {}];
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
          return <></>;
        },
        width: 50,
      },
      {
        Header: "Username",
        //accessor: (e) => e?.Article,
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value="Michael Scott"
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Role",
        //accessor: (e) => e?.Article,
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <Label
              value="Michael Scott"
              className="text-gray-300 font-sans my-4"
            />
          );
        },
      },
      {
        Header: "Satus",
        // accessor: (e) => e.storeName,
        Cell: ({ row }) => {
          return (
            <Label value="Satus" className="text-gray-300 font-sans my-4" />
          );
        },
      },
      {
        Header: "Join Date",
        // accessor: (e) => e.storeName,
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value="Join Date"
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Score",
        // accessor: (e) => e.storeName,
        Cell: ({ row }) => {
          return (
            <>
              <Label value="Score" className="text-gray-300 font-sans my-4" />
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
            <div className="flex items-center">
              <Label
                value="• 5 minutes ago"
                className="text-gray-900 font-sans text-xs tracking-tight"
              />
              <Dropdown
                className="p-0"
                icons={
                  <HiOutlineDotsVertical className={`text-3xl text-gray-500`} />
                }
                itemsClasses={{
                  root:
                    "font-sans text-sm px-4 w-48 py-1 whitespace-normal tracking-tight font-sans hover:text-current text-gray-300",
                }}
                options={[
                  {
                    name: `View`,
                    value: "View",
                  },
                  {
                    name: `Pause Reported Account`,
                    value: "Pause",
                  },
                  {
                    name: `Block Reported Account`,
                    value: "Block",
                  },
                  {
                    name: `Send Message to Reporter and close this reporing`,
                    value: "Reporter",
                  },
                ]}
              />
            </div>
          );
        },
        width: 120,
      },
    ],
    []
  );

  return (
    <>
      <Table
        className="flex items-center pt-6"
        columns={columns}
        data={data}
        loading={loading}
      />
    </>
  );
}
export default UserServiceTechnicianTable;
