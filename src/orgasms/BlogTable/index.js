import React, { useMemo } from "react";
import { Table } from "..";
import { Checkbox, Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
import moment from "moment";
function BlogTable({ loading, data, onDelete }) {
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
        Header: "Article Name",
        accessor: "title",
        width: 250,
        Cell: ({ row }) => (
          <span className="capitalize">{row?.original?.title}</span>
        ),
      },
      {
        Header: "Date",
        accessor: (e) => moment(e?.created_at).format("MMM DD, YYYY"),
        className: "pl-2",
      },
      {
        Header: "Status",
        Cell: ({ row }) => (
          <span className="capitalize">{row?.original?.status}</span>
        ),
        accessor: "status",
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
                    func: () => onDelete(row?.id),
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
export default BlogTable;
