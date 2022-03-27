import React, { useMemo } from "react";
import { AvatarLabels } from "molecules";
import { Table } from "../..";
import { Checkbox, Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function MyOrderTable({ loading }) {
  const data = [
    {
      name: "11",
      product_no: "11",
      time: "1 month",
      quantity: "11",
      price: "$100,000",
      manufacturers: "PCB Way",
      status: "In Progress",
    },
    {
      name: "11",
      product_no: "11",
      time: "1 month",
      quantity: "11",
      price: "$100,000",
      manufacturers: "PCB Way",
      status: "In Progress",
    },
    {
      name: "11",
      product_no: "11",
      time: "1 month",
      quantity: "11",
      price: "$100,000",
      manufacturers: "PCB Way",
      status: "In Progress",
    },
    {
      name: "11",
      product_no: "11",
      time: "1 month",
      quantity: "11",
      price: "$100,000",
      manufacturers: "PCB Way",
      status: "In Progress",
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
        Header: "Name",
        //accessor: (e) => e?.Article,
        // accessor: "name",
        className: "pl-2",
        width: 220,
        Cell: ({ row }) => {
          return (
            <>
              <AvatarLabels
                mainClasses="flex items-center"
                avaterClasses="h-8 w-8"
                titleClasses="text-sm font-sans tracking-tight leading-4"
                subtitleClasses="text-sm font-sans tracking-tight leading-4"
                title="Lamborghini"
                subtitle="Aventado Projectd"
              />
            </>
          );
        },
      },
      {
        Header: "Product No",
        //accessor: (e) => e?.Article,
        accessor: "product_no",
        className: "pl-2",
        width: 110,
      },
      {
        Header: "Built Time",
        // accessor: (e) => e.storeName,
        accessor: "time",
        width: 120,
      },
      {
        Header: "Quantity",
        // accessor: (e) =>
        //   `${e?.orders[0]?.coordinator?.firstname} ${e?.orders[0]?.coordinator?.lastname}`,
        accessor: "quantity",
        width: 120,
      },
      {
        Header: "Price",
        // accessor: (e) =>
        //   `${e?.orders[0]?.coordinator?.firstname} ${e?.orders[0]?.coordinator?.lastname}`,
        accessor: "price",
        width: 120,
      },
      {
        Header: "Manufacturers",
        // accessor: (e) =>
        //   `${e?.orders[0]?.coordinator?.firstname} ${e?.orders[0]?.coordinator?.lastname}`,
        accessor: "manufacturers",
        width: 150,
      },
      {
        Header: "Order Status",
        // accessor: (e) =>
        //   `${e?.orders[0]?.coordinator?.firstname} ${e?.orders[0]?.coordinator?.lastname}`,
        accessor: "status",
        width: 120,
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
export default MyOrderTable;
