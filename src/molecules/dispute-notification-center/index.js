import React from "react";
import { Label } from "atoms";
function DisputeNotificationCenter(props) {
  const { value, date, description } = props;
  return (
    <div className="font-sans">
      <Label
        classes={{ root: `text-md text-black-100 tracking-tight pb-1` }}
        value={value}
      />
      <Label
        classes={{ root: `text-sm tracking-tight text-gray-660` }}
        value={date}
      />
      <Label
        classes={{ root: `text-sm tracking-tight text-gray-660` }}
        value={description}
      />
    </div>
  );
}

export default DisputeNotificationCenter;
