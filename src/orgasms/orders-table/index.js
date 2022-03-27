import React, { useMemo } from "react";
import { AvatarLabels } from "molecules";
import { Table } from "..";
import { Checkbox, Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
import moment from "moment";
function OrdersTable({ loading, data }) {
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
        Header: "Title",
        className: "pl-2",
        width: 180,
        Cell: ({ row }) => {
          return (
            <>
              <AvatarLabels
                src={row?.original?.image}
                mainClasses="flex items-center"
                avaterClasses="h-8 w-8"
                titleClasses="text-sm font-sans tracking-tight leading-4"
                subtitleClasses="text-sm font-sans tracking-tight leading-4"
                title={row?.original?.title}
              />
            </>
          );
        },
      },
      {
        Header: "Username",
        accessor: (e) => `${e?.user?.first_name} ${e?.user?.last_name}`,
        className: "pl-2",
        width: 100,
      },
      {
        Header: "Type",
        // accessor: (e) => e.storeName,
        Cell: ({ row }) => {
          return (
            <div className="space-x-1 flex items-center text-gray-300">
              <img src="/assets/images/type1.png" alt="" className="w-4 mr-1" />
              ,
              <img src="/assets/images/type2.png" alt="" className="w-4 mr-1" />
              ,
              <img src="/assets/images/type3.png" alt="" className="w-4" />
            </div>
          );
        },
        width: 140,
      },
      {
        Header: "Quantity",
        accessor: "quantity",
        width: 100,
      },
      {
        Header: "Price",
        accessor: (e) => `$ ${(e?.price).toFixed(2)}`,
        width: 100,
      },
      {
        Header: "Order Status",
        accessor: "status",
        className: "capitize",
        width: 120,
      },
      {
        Header: "Start",
        accessor: (e) => moment(e?.start_date).format("MM/DD/YYYY"),
        width: 100,
      },
      {
        Header: "End",
        accessor: (e) => moment(e?.end_date).format("MM/DD/YYYY"),
        width: 100,
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
        className="flex items-center"
        columns={columns}
        data={data}
        loading={loading}
      />
    </>
  );
}
export default OrdersTable;
