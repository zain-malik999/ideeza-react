import React, { useMemo, useState } from "react";
import { Table } from "../..";
import { Dropdown, Label } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
import moment from "moment";
function CertificationsTable({ loading, data }) {
  // const data = [
  //   {
  //     Title: "John Doe",
  //     Username: "Electronic",
  //     Estabilishment: "Electronic",
  //   },
  // ];
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        // accessor: (e) => e?.description,
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.name}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
        width: 220,
      },
      {
        Header: "username",
        // accessor: (e) => e?.description,
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.user?.first_name}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
        width: 220,
      },
      {
        Header: "Establishment",
        // accessor: (e) => e?.year,
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={moment(row?.original?.year).format("YYYY")}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
        width: 220,
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
export default CertificationsTable;
