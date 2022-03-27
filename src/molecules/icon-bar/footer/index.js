import React from "react";
import { Label } from "atoms";
function IconBarFooter({ className, value }) {
  return (
    <div className={`w-full bg-gray-135 gray ${className}`}>
      <Label
        value={value}
        classes={{ root: "text-gray-450 font-sans" }}
        variant="caption"
      />
    </div>
  );
}
export default IconBarFooter;
