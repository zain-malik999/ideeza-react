import React, { useMemo } from "react";
import { Table } from "..";
import { Label, Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function AddedElectronicTable({ loading, data }) {
  const columns = useMemo(
    () => [
      {
        Header: "Role",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.role}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "ID",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <Label
              value={row?.original?.id}
              className="text-gray-300 font-sans my-4"
            />
          );
        },
      },
      {
        Header: "Name",
        Cell: ({ row }) => {
          return (
            <Label
              value={row?.original?.name}
              className="text-gray-300 font-sans my-4"
            />
          );
        },
      },
      {
        Header: "Type",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.owner_type}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Visibility",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.status}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Category",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.category}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Sub-Category",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.subcategory}
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
        width: 140,
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
export default AddedElectronicTable;
