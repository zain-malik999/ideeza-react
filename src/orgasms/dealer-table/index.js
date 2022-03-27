import React, { useMemo } from "react";
import { Table } from "..";
import { Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function DealerTable({ loading, data }) {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name",
        className: "pl-2",
        width: 250,
      },
      {
        Header: "2D",
        className: "pl-2",
      },
      {
        Header: "3D",
        className: "pl-2",
      },
      {
        Header: "Manufacturer",
        className: "pl-2",
      },
      {
        Header: "Package",
        className: "capitalize",
        accessor: "Package",
      },
      {
        Header: "ROHS?",
        className: "capitalize",
        accessor: "ROHS?",
      },
      {
        Header: "Category",
        className: "capitalize",
        accessor: "Category",
      },
      {
        Header: (val) => <></>,
        accessor: "abc",
        check: true,
        Cell: ({ row }) => {
          return (
            <>
              <Dropdown
                icons={
                  <HiOutlineDotsVertical className={`text-3xl text-gray-500`} />
                }
                itemsClasses={{
                  root:
                    "font-sans text-sm px-4 w-36 py-1 tracking-tight font-sans hover:text-current text-gray-300",
                }}
                options={[
                  {
                    name: `View`,
                    value: "View",
                  },
                  {
                    name: `Pause`,
                    value: "Pause",
                  },
                  {
                    name: `Approve`,
                    value: "Approve",
                  },
                  {
                    name: `Delete`,
                    value: "Delete",
                  },
                ]}
              />
            </>
          );
        },
        width: 80,
      },
    ],
    []
  );

  return (
    <>
      <Table
        className="flex items-center border-t border-gray-200 border-opacity-50"
        columns={columns}
        data={data}
        loading={loading}
      />
    </>
  );
}
export default DealerTable;
