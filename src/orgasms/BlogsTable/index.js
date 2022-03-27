import React, { useMemo } from "react";
import { Table } from "..";
import { Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
import moment from "moment";
function BlogsTable({ loading, data }) {
  const columns = useMemo(
    () => [
      {
        Header: "Article Name",
        accessor: "title",
        width: 250,
        Cell: ({ row }) => (
          <span className="capitalize">{row?.original?.title}</span>
        ),
      },
      {
        Header: "Auther Name",
        width: 250,
        Cell: ({ row }) => (
          <span className="capitalize">{row?.original?.user?.first_name}</span>
        ),
      },
      {
        Header: "Role",
        width: 250,
        Cell: ({ row }) => (
          <span className="capitalize">{row?.original?.user?.skills}</span>
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
                    name: `Message`,
                    value: "Message",
                  },
                  {
                    name: `Approve`,
                    value: "Approve",
                  },
                  {
                    name: `Pause`,
                    value: "Pause",
                  },
                  {
                    name: `Cancel`,
                    value: "Cancel",
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
export default BlogsTable;
