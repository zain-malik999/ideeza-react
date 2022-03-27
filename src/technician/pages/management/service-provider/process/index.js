import React, { useState } from "react";
import { Label } from "atoms";
import { Pagination } from "molecules";
import { ManagementTableHeader, AddProcessPopup, ProcessTable } from "orgasms";

function Process() {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <div className="pt-4">
      <Label
        value="Process & Sub-process"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <ManagementTableHeader
          onClick={toggleOpen}
          iconClass="hidden"
          btnValue="Create new sub-process"
          btnValue2="Create new process"
          containerClass="flex md:flex-row flex-col items-center justify-between md:px-4 p-4 space-y-3 md:space-y-0"
        />
        <ProcessTable />
        <Pagination mainClass="pt-6 pb-12" />
      </div>
      <AddProcessPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default Process;
