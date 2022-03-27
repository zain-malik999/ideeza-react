import React, { useState } from "react";
import { Label } from "atoms";
import { ToggleButton } from "molecules";
function header() {
  const [active, setActive] = useState("");
  return (
    <div className="w-full flex justify-between items-center">
      <Label
        value="Edit SQN Block"
        variant="h6"
        className="text-ideeza-100 font-bold"
      />
      <Label
        value="1/3"
        className="tracking-wider text-gray-135 text-md m-0"
        variant="h6"
      />
      <ToggleButton
        labelOne="Code Preview"
        labelTwo="2D Preview"
        active={active}
        handleActive={setActive}
      />
    </div>
  );
}
export default header;
