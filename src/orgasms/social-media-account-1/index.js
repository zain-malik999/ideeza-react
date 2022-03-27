import React from "react";
import { Label, Button } from "atoms";

function SocialMediaAccount1(props) {
  const { value, note, btnValue, btnClass } = props;
  return (
    <>
      <Label
        classes={{
          root:
            "text-gray-300 border-b border-gray-750 pb-1 mb-2 text-base tracking-tight font-sans font-bold",
        }}
        value={value}
      />
      <div className="items-center justify-between pb-2 pt-1 grid grid-cols-3">
        <Label
          value={note}
          className="text-gray-300 tracking-tight font-sans text-base col-span-2"
        />
        <div className="flex justify-end">
          <Button
            value={btnValue}
            classes={{
              root: `text-base w-42 tracking-tight capitalize ${btnClass}`,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default SocialMediaAccount1;
