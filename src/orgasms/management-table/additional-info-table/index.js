import React, { useMemo } from "react";
import { Table } from "../..";
import { Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function AdditionalInfoTable({ loading }) {
  const data = [
    {
      Info: "John Doe",
      Domain: "Electronic",
    },
  ];
  const columns = useMemo(
    () => [
      {
        Header: "Domain",
        accessor: "Domain",
        className: "pl-2",
      },
      {
        Header: "Info",
        className: "pl-2",
        accessor: "Info",
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
        width: 40,
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
      />
    </>
  );
}
export default AdditionalInfoTable;
