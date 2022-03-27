import React from "react";
import { Label } from "atoms";
import { Dispute1, Dispute2 } from "..";

function Dispute() {
  return (
    <div className="bg-white rounded-xl shadow-full md:p-6 p-4 pt-4 lg:w-11/12 font-sans">
      <Label
        value="Opened 24th Jan."
        classes={{ root: "text-gray-300 text-md font-medium pb-1" }}
      />
      <Label
        value="Whole dispute process duration is till 23 Oct. 09:00PM"
        classes={{ root: "text-gray-850 text-md font-medium" }}
      />
      <div className="grid md:grid-cols-5 gap-6 mt-4">
        <Dispute1 />
        <Dispute2 />
      </div>
    </div>
  );
}

export default Dispute;
