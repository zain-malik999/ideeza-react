import React from "react";
import { Icon_Label } from "molecules";
import { Label } from "atoms";

function DisputePopupHeader({ value }) {
  return (
    <div className="flex items-center justify-between p-4 pt-5">
      <Icon_Label
        labelValue="Dispute"
        lableClass={{
          root: `text-ideeza-100 font-sans tracking-tight font-semibold text-xl pl-3`,
        }}
        tooltipProps={{ open: false }}
        iconComponent={
          <img src="/assets/images/dispute.png" alt="dispute-icon" />
        }
      />
      <Label value={value} className="font-sans tracking-tight text-gray-600" />
    </div>
  );
}
export default DisputePopupHeader;
