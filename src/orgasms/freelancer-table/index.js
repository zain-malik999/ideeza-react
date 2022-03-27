import React, { useMemo, useState } from "react";
import { Table } from "..";
import { Label, Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function FreelancerTable({ loading }) {
  const data = [{}, {}, {}];
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        Cell: ({ row }) => {
          return (
            <Label value="Project" className="text-gray-300 font-sans my-4" />
          );
        },
      },
      {
        Header: "Status",
        Cell: ({ row }) => {
          return (
            <>
              <Label value="Applied" className="text-gray-300 font-sans my-4" />
            </>
          );
        },
      },
      {
        Header: "Date registered",
        // accessor: (e) => e.storeName,
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value="12.02.2002"
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Date applied",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value="12.02.2002"
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
            <Dropdown
              className="p-0"
              icons={
                <HiOutlineDotsVertical className={`text-3xl text-gray-500`} />
              }
              itemsClasses={{
                root:
                  "font-sans text-sm px-4 w-36 py-1 whitespace-normal tracking-tight font-sans hover:text-current text-gray-300",
              }}
              options={[
                {
                  name: `Approve`,
                  value: "Approve",
                },
                {
                  name: `Deny`,
                  value: "Deny",
                },
                {
                  name: `Under examine`,
                  value: "Under examine",
                },
              ]}
            />
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
export default FreelancerTable;
