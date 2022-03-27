import React, { useMemo } from "react";
import { Table } from "../..";
import { Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function MachinesTable({ loading, data }) {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        //accessor: (e) => e?.Article,
        accessor: (e) => {
          return e?.machine_name;
        },
      },
      {
        Header: "Process",
        //accessor: (e) => e?.Article,
        accessor: (e) => {
          return e?.process?.name;
        },
      },
      {
        Header: "Subprocess",
        //accessor: (e) => e?.Article,
        accessor: "Subprocess",
      },
      {
        Header: "Producer",
        //accessor: (e) => e?.Article,
        accessor: (e) => {
          return e?.machine_producer;
        },
      },
      {
        Header: "Picture",
        //accessor: (e) => e?.Article,
        Cell: ({ row }) => {
          return (
            <>
              <img
                src={(e) => {
                  return e?.image;
                }}
                className="w-12 my-2"
                alt=""
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
      />
    </>
  );
}
export default MachinesTable;
