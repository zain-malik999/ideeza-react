import React, { useMemo } from "react";
import { Table } from "..";
import { Avatar, Label, Dropdown, Button } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
import moment from "moment";
function ProductionTable({ loading, data }) {
  const columns = useMemo(
    () => [
      {
        Header: "User name",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <div className="flex items-center space-x-4">
              <Avatar classes={{ root: "w-8 h-8" }} />
              <Label
                value={`${row?.original?.user_project?.user?.first_name} ${row?.original?.user_project?.user?.last_name}`}
                className="text-gray-300 font-sans my-4"
              />
            </div>
          );
        },
      },
      {
        Header: "Project name",
        accessor: "domain",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <Label
              value={row?.original?.user_project?.title}
              className="text-gray-300 font-sans my-4"
            />
          );
        },
      },
      {
        Header: "Service providers",
        Cell: ({ row }) => {
          return (
            <div className="flex items-center">
              <Avatar classes={{ root: "w-8 h-8 -ml-2" }} />
              <Avatar classes={{ root: "w-8 h-8 -ml-2" }} />
              <Avatar classes={{ root: "w-8 h-8 -ml-2" }} />
              <Label
                value="+32"
                className="text-gray-300 font-sans my-4 ml-1"
              />
            </div>
          );
        },
      },
      {
        Header: "Deadline",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={moment(row?.original?.deadline).format("MM/DD/YYYY")}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Completed",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.status}
                className="text-gray-300 uppercase font-sans my-4"
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
            <div className="space-x-2 flex items-center">
              <Button
                value="Track order"
                className="bg-current text-white whitespace-nowrap w-28 tracking-normal font-sans py-1 transform-none"
              />
              <Dropdown
                className="p-0"
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
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <Table
        className="flex items-center pt-12"
        columns={columns}
        data={data}
        loading={loading}
      />
    </>
  );
}
export default ProductionTable;
