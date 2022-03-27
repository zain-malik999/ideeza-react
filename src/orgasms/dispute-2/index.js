import React, { useState } from "react";
import { Label, Input, Button } from "atoms";
import { DisputeNotificationCenter } from "molecules";
import { DisputeStepPopup } from "..";
import { IoSendSharp } from "react-icons/io5";

function Dispute2() {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <div className="md:col-span-2 flex flex-col justify-between">
      <div className="bg-gray-150 rounded-xl p-4 space-y-3">
        <Label
          value="Notification Center:"
          classes={{ root: "text-gray-300 text-xl font-sans tracking-tight" }}
        />
        <div className="space-y-3 h-56 overflow-y-auto">
          <DisputeNotificationCenter
            value="Manufacturer answer"
            date="23 Sep, 9:09 PM"
            description="Answer will be accepted till 26th Sep. 09:00PM"
          />
          <DisputeNotificationCenter
            value="Manufacturer answer"
            date="23 Sep, 9:09 PM"
            description="Answer will be accepted till 26th Sep. 09:00PM"
          />
          <DisputeNotificationCenter
            value="Manufacturer answer"
            date="23 Sep, 9:09 PM"
            description="Answer will be accepted till 26th Sep. 09:00PM"
          />
          <DisputeNotificationCenter
            value="Manufacturer answer"
            date="23 Sep, 9:09 PM"
            description="Answer will be accepted till 26th Sep. 09:00PM"
          />
          <DisputeNotificationCenter
            value="Manufacturer answer"
            date="23 Sep, 9:09 PM"
            description="Answer will be accepted till 26th Sep. 09:00PM"
          />
        </div>
        <Input
          isIcon
          placeholder="Type something..."
          className={{
            root: `text-sm tracking-tight font-sans py-1 border bg-white px-0`,
          }}
          position="end"
        >
          <IoSendSharp className="text-2xl text-blue-800 mr-2" />
        </Input>
      </div>
      <div className="flex w-full items-center justify-end space-x-3 mt-12">
        <Button
          value="Back"
          classes={{
            root: `border border-solid border-gray-810 text-gray-300 p-2 tracking-tight font-sans capitalize w-28`,
          }}
        />
        <Button
          onClick={toggleOpen}
          value="Cancel"
          classes={{
            root: `text-white bg-current border border-solid border-current tracking-tight font-sans capitalize p-2 w-28`,
          }}
        />
      </div>
      <DisputeStepPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default Dispute2;
