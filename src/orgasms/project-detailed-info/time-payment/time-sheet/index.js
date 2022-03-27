import React from "react";
import { Label } from "atoms";
import { TwoLabels } from "molecules";
function TimeSheet(props) {
  return (
    <div className="pt-6">
      <Label
        classes={{
          root: "text-lg font-sans tracking-tighter font-semibold text-current",
        }}
        value="Timesheet this week"
      />
      <div className="w-full flex md:flex-row flex-col mt-12 pb-6 border-b text-gray-650">
        <div className="md:w-2/3 w-full">
          <div className="flex justify-between md:pr-6 pr-0">
            <TwoLabels
              mainClass="flex flex-col items-center"
              value="MON"
              value2="11/9"
              labelClass="text-gray-300 text-md text-center tracking-tight font-sans"
              labelClass2="text-gray-300 text-md text-center tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="flex flex-col items-center"
              value="TUE"
              value2="11/9"
              labelClass="text-gray-300 text-md text-center tracking-tight font-sans"
              labelClass2="text-gray-300 text-md text-center tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="flex flex-col items-center"
              value="WED"
              value2="11/9"
              labelClass="text-gray-300 text-md text-center tracking-tight font-sans"
              labelClass2="text-gray-300 text-md text-center tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="flex flex-col items-center"
              value="THU"
              value2="11/9"
              labelClass="text-gray-300 text-md text-center tracking-tight font-sans"
              labelClass2="text-gray-300 text-md text-center tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="flex flex-col items-center"
              value="FRI"
              value2="11/9"
              labelClass="text-gray-300 text-md text-center tracking-tight font-sans"
              labelClass2="text-gray-300 text-md text-center tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="flex flex-col items-center"
              value="SAT"
              value2="11/9"
              labelClass="text-gray-300 text-md text-center tracking-tight font-sans"
              labelClass2="text-gray-300 text-md text-center tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="flex flex-col items-center"
              value="SUN"
              value2="11/9"
              labelClass="text-gray-300 text-md text-center tracking-tight font-sans"
              labelClass2="text-gray-300 text-md text-center tracking-tight font-sans"
            />
          </div>
          <div className="h-12 bg-gray-100 mt-2"></div>
        </div>
        <div className="md:w-1/3 w-full pt-5 md:border-l border-gray-650">
          <div className="flex justify-around">
            <Label
              value="HOURS"
              classes={{ root: "text-md tracking-tight text-gray-300" }}
            />
            <Label
              value="RATE"
              classes={{ root: "text-md tracking-tight text-gray-300" }}
            />
            <Label
              value="AMOUNT"
              classes={{ root: "text-md tracking-tight text-gray-300" }}
            />
          </div>
          <div className="h-12 bg-gray-100 mt-2 flex items-center justify-around">
            <Label
              value="0:00"
              classes={{ root: "text-md tracking-tight text-gray-300" }}
            />
            <Label
              value="$60.00/hr"
              classes={{ root: "text-md tracking-tight text-gray-300" }}
            />
            <Label
              value="$0:00"
              classes={{ root: "text-md tracking-tight text-gray-300" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TimeSheet;
