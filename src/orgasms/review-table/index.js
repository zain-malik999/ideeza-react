import React, { useMemo } from "react";
import { Table } from "..";
import { Checkbox, Label, Dropdown } from "atoms";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
function ReviewTable({ loading }) {
  const data = [{}, {}, {}, {}, {}, {}];
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
        Header: "Reporter Name",
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
        Header: "Reported Name",
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
        Header: "Source",
        // accessor: (e) => e.storeName,
        Cell: ({ row }) => {
          return (
            <Label value="Project" className="text-gray-300 font-sans my-4" />
          );
        },
      },
      {
        Header: "Review",
        // accessor: (e) => e.storeName,
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value="“Perfect innovative gift of my Dreams!”..."
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
        width: 200,
      },
      {
        Header: (val) => (
          <>
            <Dropdown
              className="p-0"
              icons={<IoSettingsSharp className={`text-xl text-gray-500`} />}
              itemsClasses={{
                root:
                  "font-sans text-sm px-4 w-48 py-1 whitespace-normal tracking-tight font-sans hover:text-current text-gray-300",
              }}
              options={[
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
          </>
        ),
        accessor: "abc",
        check: true,
        Cell: ({ row }) => {
          return (
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
        className="flex items-center pt-12"
        columns={columns}
        data={data}
        loading={loading}
      />
    </>
  );
}
export default ReviewTable;
