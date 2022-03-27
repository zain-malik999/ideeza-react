import React, { useMemo, useState } from "react";
import { Table } from "../..";
import { Checkbox, Dropdown } from "atoms";
import { AvatarLabels, Counter } from "molecules";
import { HiOutlineDotsVertical } from "react-icons/hi";
function Overview({ loading, cartitem }) {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(0);
  const handleQuantity = (e) => {
    switch (e) {
      case "Inc": {
        setCount((e) => e + 1);
        setState((e) => e + 1);
        break;
      }
      case "Dec": {
        setCount((e) => e - 1);
        setState((e) => e - 1);
        break;
      }
      default: {
      }
    }
  };
  const data = [
    {
      category: "Electronics, Cover",
      size: "30mm x 60mm x 70mm",
      quantity: "Refund",
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
        width: 40,
      },
      {
        Header: "Product name",
        accessor: (e) => {
          return e?.user_product?.title;
        },
        width: 250,
        Cell: ({ row }) => {
          return (
            <>
              <AvatarLabels
                mainClasses="flex items-center py-2"
                avaterClasses="h-11 w-11"
                title="Laurentius Rando"
                titleClasses="text-gray-300 text-md font-sans tracking-tight"
              />
            </>
          );
        },
      },
      {
        Header: "Category",
        accessor: (e) => {
          //  return e?.user_product?.title;
        },
      },
      {
        Header: "Size",
        accessor: "size",
      },
      {
        Header: "Quantity",
        Cell: ({ row }) => {
          return (
            <>
              <Counter
                clickIncrement={() => handleQuantity("Inc")}
                clickDecrement={() => handleQuantity("Dec")}
                isCounter={true}
                value={count}
                mainCounter="m-0 flex items-center -ml-1"
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
            <>
              <Dropdown
                icons={
                  <HiOutlineDotsVertical className={`text-3xl text-gray-500`} />
                }
                itemsClasses={{
                  root:
                    "font-sans text-sm px-4 w-36 py-2 tracking-tight font-sans hover:text-current text-gray-300",
                }}
                options={[
                  {
                    name: `Project Details`,
                    value: "Project Details",
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
        width: 55,
      },
    ],
    []
  );

  return (
    <>
      <Table
        className="flex items-center"
        headClass="py-2 pt-3 border-t border-gray-200 border-opacity-50"
        tableCss="text-gray-300 text-md font-sans tracking-tight"
        columns={columns}
        data={cartitem}
        loading={loading}
      />
    </>
  );
}
export default Overview;
