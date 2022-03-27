import React, { useMemo } from "react";
import { Table } from "../..";
import { Checkbox, Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function SystemTable({ loading }) {
  const data = [
    {
      date: "12/12/20",
      description: "Refund from dispute",
      type: "Refund",
      service_provider: "Alex Meiweather",
      amount: "$100,000",
    },
    {
      date: "12/12/20",
      description: "Refund from dispute",
      type: "Refund",
      service_provider: "Alex Meiweather",
      amount: "$100,000",
    },
    {
      date: "12/12/20",
      description: "Refund from dispute",
      type: "Refund",
      service_provider: "Alex Meiweather",
      amount: "$100,000",
    },
    {
      date: "12/12/20",
      description: "Refund from dispute",
      type: "Refund",
      service_provider: "Alex Meiweather",
      amount: "$100,000",
    },
  ];
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
        Header: "Date",
        //accessor: (e) => e?.Article,
        accessor: "date",
        className: "pl-2",
        width: 150,
      },
      {
        Header: "Description",
        //accessor: (e) => e?.Article,
        accessor: "description",
        className: "pl-2",
        width: 220,
      },
      {
        Header: "Type",
        // accessor: (e) => e.storeName,
        accessor: "type",
        width: 150,
      },
      {
        Header: "Service Provider",
        // accessor: (e) =>
        //   `${e?.orders[0]?.coordinator?.firstname} ${e?.orders[0]?.coordinator?.lastname}`,
        accessor: "service_provider",
        width: 170,
      },
      {
        Header: "Amount",
        // accessor: (e) =>
        //   `${e?.orders[0]?.coordinator?.firstname} ${e?.orders[0]?.coordinator?.lastname}`,
        accessor: "amount",
        width: 150,
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
                    "font-sans text-sm px-4 w-34 py-1 tracking-tight font-sans hover:text-current text-gray-300",
                }}
                options={[
                  {
                    name: `Open a Dispute`,
                    value: "Dispute",
                  },
                  {
                    name: `Download Invoice`,
                    value: "Invoice",
                  },
                  {
                    name: `Dispute Detail`,
                    value: "Detail",
                  },
                  {
                    name: `Cancel Dispute`,
                    value: "Cancel",
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
export default SystemTable;
