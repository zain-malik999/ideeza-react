import React from "react";
import { Label } from "atoms";
import { TwoLabels } from "molecules";
function HeaderHourly() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 border-b border-gray-650 pb-6">
      <div>
        <Label
          classes={{
            root: "text-xl text-gray-300 tracking-tight font-sans mb-2",
          }}
          value="Last 24hrs"
        />
        <TwoLabels
          mainClass="flex items-end space-x-2"
          value="0:00"
          value2="hrs"
          labelClass="text-gray-300 text-5xl text-center tracking-tight"
          labelClass2="text-gray-300 text-2xl text-center tracking-tight font-semibold"
        />
        <Label
          value="hasn't worked yet"
          classes={{
            root: "text-md pt-2 tracking-tight font-sans text-gray-900",
          }}
        />
      </div>
      <div>
        <Label
          classes={{
            root: "text-xl text-gray-300 tracking-tight font-sans mb-2",
          }}
          value="This Week"
        />
        <TwoLabels
          mainClass="flex items-end space-x-2"
          value="0:00"
          value2="hrs"
          labelClass="text-gray-300 text-5xl text-center tracking-tight"
          labelClass2="text-gray-300 text-2xl text-center tracking-tight font-semibold"
        />
        <Label
          value="of 23hr limit"
          classes={{
            root: "text-md pt-2 tracking-tight font-sans text-gray-900",
          }}
        />
      </div>
      <div>
        <Label
          classes={{
            root: "text-xl text-gray-300 tracking-tight font-sans mb-2",
          }}
          value="Last Week"
        />
        <TwoLabels
          mainClass="flex items-end space-x-2"
          value="0:00"
          value2="hrs"
          labelClass="text-gray-300 text-5xl text-center tracking-tight"
          labelClass2="text-gray-300 text-2xl text-center tracking-tight font-semibold"
        />
        <Label
          value="$0.00 paid"
          classes={{
            root: "text-md pt-2 tracking-tight font-sans text-gray-900",
          }}
        />
      </div>
      <div>
        <Label
          classes={{
            root: "text-xl text-gray-300 tracking-tight font-sans mb-2",
          }}
          value="Since Start"
        />
        <TwoLabels
          mainClass="flex items-end space-x-2"
          value="0:00"
          value2="hrs"
          labelClass="text-gray-300 text-5xl text-center tracking-tight"
          labelClass2="text-gray-300 text-2xl text-center tracking-tight font-semibold"
        />
        <Label
          value="$5666.0"
          classes={{
            root: "text-md pt-2 tracking-tight font-sans text-gray-900",
          }}
        />
      </div>
    </div>
  );
}
export default HeaderHourly;
