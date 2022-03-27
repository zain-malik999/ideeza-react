import React, { useMemo } from "react";
import { Table } from "../..";
import { AvatarLabels } from "molecules";
function PaymentTable({ loading }) {
  const data = [
    {
      Manufacturer: "Electronics, Cover",
      Manufacturer_delivery: "30mm x 60mm x 70mm",
    },
    {
      Manufacturer: "Electronics, Cover",
      Manufacturer_delivery: "30mm x 60mm x 70mm",
    },
    {
      Manufacturer: "Electronics, Cover",
      Manufacturer_delivery: "30mm x 60mm x 70mm",
    },
  ];
  const columns = useMemo(
    () => [
      {
        Header: "CART",
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
        Header: "Manufacturer",
        accessor: "Manufacturer",
      },
      {
        Header: "Manufacturer Delivery",
        accessor: "Manufacturer_delivery",
      },
    ],
    []
  );

  return (
    <>
      <Table
        className="flex items-center bg-current"
        headClass="py-2 bg-transparent text-current"
        tableCss="text-gray-300 text-md font-sans tracking-tight"
        columns={columns}
        data={data}
        loading={loading}
      />
    </>
  );
}
export default PaymentTable;
