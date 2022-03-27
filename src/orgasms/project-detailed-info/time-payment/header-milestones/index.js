import React from "react";
import { Label } from "atoms";
function HeaderMilestones(props) {
  return (
    <div className="grid lg:gap-0 gap-3 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 border-b border-gray-650 pb-6">
      <div className="lg:border-r border-0 border-gray-650 ">
        <Label
          classes={{
            root: "text-md md:text-base tracking-tight text-gray-300",
          }}
          value="Budget"
        />
        <Label
          value="$270.00"
          classes={{ root: "text-xl md:text-2xl pt-1 tracking-tight" }}
        />
      </div>
      <div className="lg:border-r xl:pl-14 lg:pl-6 border-0 border-gray-650  ">
        <Label
          classes={{
            root: "text-md md:text-base tracking-tight text-gray-300",
          }}
          value="In Escrew"
        />
        <Label
          value="$00.00"
          classes={{ root: "text-xl md:text-2xl pt-1 tracking-tight" }}
        />
      </div>
      <div className="lg:border-r xl:pl-14 lg:pl-6 border-0 border-gray-650 ">
        <Label
          classes={{
            root: "text-md md:text-base tracking-tight text-gray-300",
          }}
          value="Milestones Paid"
        />
        <Label
          value="$70"
          classes={{ root: "text-xl md:text-2xl pt-1 tracking-tight" }}
        />
      </div>
      <div className="lg:border-r xl:pl-14 lg:pl-6 border-0 border-gray-650 ">
        <Label
          classes={{
            root: "text-md md:text-base tracking-tight text-gray-300",
          }}
          value="Remaining"
        />
        <Label
          value="$270.00"
          classes={{ root: "text-xl md:text-2xl pt-1 tracking-tight" }}
        />
      </div>
      <div className="xl:pl-14 lg:pl-6">
        <Label
          classes={{
            root: "text-md md:text-base tracking-tight text-gray-300",
          }}
          value="Total Payments"
        />
        <Label
          value="$70"
          classes={{ root: "text-xl md:text-2xl pt-1 tracking-tight" }}
        />
      </div>
    </div>
  );
}
export default HeaderMilestones;
