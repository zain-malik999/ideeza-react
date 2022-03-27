import React, { useState } from "react";
import { BlogTableHeader, MyOrderTable, SystemTable } from "orgasms";
import { TransactionTabs, Pagination } from "molecules";
import { TableContainer } from "@material-ui/core";
function Transaction() {
  const [popup, SetPopup] = useState(false);
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <>
      <div className="my-2 flex items-center justify-between overflow-x-hidden w-full">
        <TransactionTabs
          index={index}
          handleChange={handleChange}
          tabsClasses=""
          tabClasses="bg-transparent text-lg font-sans tracking-tight news-tabs focus:text-current transition-all duration-500 ease-in-out transform-none text-gray-300 w-26"
          tabsData={[
            {
              name: "My Orders",
              component: (
                <>
                  <div className="bg-white rounded-md shadow-lg mt-4">
                    <BlogTableHeader
                      btnValue="Download Invoices"
                      iconClass="text-gray-500"
                    />
                    <TableContainer>
                      <MyOrderTable />
                    </TableContainer>
                    <Pagination mainClass="py-7" />
                  </div>
                </>
              ),
            },
            {
              name: "System",
              component: (
                <>
                  <div className="bg-white rounded-md shadow-lg mt-4">
                    <BlogTableHeader
                      btnValue="Download Invoices"
                      iconClass="text-gray-500"
                    />
                    <TableContainer>
                      <SystemTable />
                    </TableContainer>
                    <Pagination mainClass="py-7" />
                  </div>
                </>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

export default Transaction;
