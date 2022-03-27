import React, { useMemo } from "react";
import { Table } from "../..";
import { TimeLine } from "molecules";
import { TableContainer } from "@material-ui/core";
import { Badges as Badge, Label, Avatar } from "atoms";
function ProjectTable({ loading, data }) {
  console.log(data);
  const columns = useMemo(
    () => [
      {
        Header: "Tasks",
        accessor: "tasks",
        className: "pl-2",
        width: 250,
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value={row?.original?.title}
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
      },
      {
        Header: "Domain",
        accessor: "domain",
        className: "pl-2",
        Cell: ({ row }) => {
          return (
            <>
              <Label value="Patient" className="text-gray-300 font-sans my-4" />
            </>
          );
        },
      },
      {
        Header: "Assigned to",
        accessor: "assigned",
        Cell: ({ row }) => {
          return (
            <div className="flex items-center opacity-50">
              {row?.original?.users?.map((v, key) => (
                <Avatar
                  key={key}
                  src={v?.profile_photo}
                  classes={{ root: "w-7 h-7 -ml-2 border" }}
                />
              ))}
            </div>
          );
        },
      },
      {
        Header: "Timeline",
        accessor: "timeline",
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
      },
      {
        Header: "Task status",
        accessor: "status",
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
    ],
    []
  );

  return (
    <>
      <TableContainer
        classes={{
          root: `w-full overflow-x-auto`,
        }}
      >
        <Table
          // tableCss="bg-gradient-to-l from-purple-400 bg-gradient-to-r to-current h-10"
          // headClass="bg-transparent opacity-0"
          className="flex items-center py-3 bg-gradient-to-l from-purple-400 bg-gradient-to-r to-current rounded-t-lg"
          columns={columns}
          data={data}
          loading={loading}
        />
      </TableContainer>
    </>
  );
}
export default ProjectTable;
