import React, { useMemo } from "react";
import { Table } from "..";
import { Label, Dropdown } from "atoms";
import { HiOutlineDotsVertical } from "react-icons/hi";
function CareerTable({ loading }) {
  const data = [{}, {}];
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        Cell: ({ row }) => {
          return (
            <Label value="Project" className="text-gray-300 font-sans my-4" />
          );
        },
        width: 200,
      },
      {
        Header: "Description",
        Cell: ({ row }) => {
          return (
            <>
              <Label
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                className="text-gray-300 font-sans my-4"
              />
            </>
          );
        },
        width: 240,
      },
      {
        Header: "Available positions",
        Cell: ({ row }) => {
          return (
            <>
              <Label value="2" className="text-gray-300 font-sans my-4" />
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
                  name: `Pause`,
                  value: "Pause",
                },
                {
                  name: `Delete`,
                  value: "Delete",
                },
                {
                  name: `Edit`,
                  value: "Edit",
                },
                {
                  name: `Stop`,
                  value: "Stop",
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
        className="flex items-center pt-6"
        columns={columns}
        data={data}
        loading={loading}
      />
    </>
  );
}
export default CareerTable;
