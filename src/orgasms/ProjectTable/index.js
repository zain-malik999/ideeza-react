import React, { useMemo } from "react";
import { Table } from "..";
import { TimeLine } from "molecules";
import { Checkbox, Dropdown, Badges as Badge, Label, Avatar } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function ProjectHomeTable({ loading, data, getProjectHandler }) {
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
        Header: "Project",
        accessor: "title",
        className: "pl-2",
        width: 250,
        Cell: ({ row }) => {
          return (
            <>
              <Label
                onClick={() => getProjectHandler(row?.original?.id)}
                value={row?.original?.title}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Domain",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <div className="space-x-1 flex items-center opacity-50">
              <img src="/assets/images/type1.png" className="w-4" alt="" />,
              <img src="/assets/images/type2.png" className="w-5" alt="" />,
              <img src="/assets/images/type3.png" className="w-4" alt="" />
            </div>
          );
        },
      },
      {
        Header: "Assigned to",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <div className="flex items-center opacity-50">
              <Avatar classes={{ root: "w-7 h-7 -ml-2 border" }} />
              <Avatar classes={{ root: "w-7 h-7 -ml-2 border" }} />
              <Avatar classes={{ root: "w-7 h-7 -ml-2 border" }} />
            </div>
          );
        },
      },
      {
        Header: "Timeline",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <TimeLine
              mainClass="bg-white border w-full"
              labelClass="text-gray-300"
              value="10.10.2021"
              width="50%"
            />
          );
        },
        width: 150,
      },
      {
        Header: "Task status",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.status}
                className="text-yellow-300 font-semibold uppercase font-sans"
              />
            </>
          );
        },
      },
      {
        Header: (val) => (
          <>
            <Badge imgClass="hidden" text="notifications" />
          </>
        ),
        className: "capitalize",
        accessor: "notifications",
        Cell: ({ row }) => {
          return (
            <div className="space-x-1 flex items-center">
              <img src="/assets/images/time.png" alt="time" className="w-5" />
              <img
                src="/assets/images/notify.png"
                alt="notify"
                className="w-5"
              />
              <img src="/assets/images/hurry.png" alt="hurry" className="w-5" />
            </div>
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
        headClass="text-3xl"
      />
    </>
  );
}
export default ProjectHomeTable;
