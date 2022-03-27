import React, { useState } from "react";
import { Label, Button } from "atoms";
import { Icon_Label } from "molecules";
import { IoBulb } from "react-icons/io5";
import {
  AddMilestonePopup,
  ActiveMilestonePopup,
  MilestoneChangeRequestPopup,
  EndContract,
  RequestRefundPopup,
  GiveBonusPopup,
} from "../../..";
export default function RemainingMilestones(props) {
  const [open, setOpen] = useState(false);
  const [openRequestPopup, setOpenRequestPopup] = useState(false);
  const [openRefund, setOpenRefund] = useState(false);
  const [openBonus, setOpenBonus] = useState(false);
  const [openMilestone, setOpenMilestone] = useState(false);
  const [openEndContract, setOpenEndContract] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const toggleRequestPopup = () => {
    setOpenRequestPopup(!openRequestPopup);
  };
  const toggleRefund = () => {
    setOpenRefund(!openRefund);
  };
  const toggleBonus = () => {
    setOpenBonus(!openBonus);
  };
  const toggleMilestone = () => {
    setOpenMilestone(!openMilestone);
  };
  const toggleEndContract = () => {
    setOpenEndContract(!openEndContract);
  };
  return (
    <div className="mt-6">
      <AddMilestonePopup toggleOpen={toggleOpen} open={open} />
      <MilestoneChangeRequestPopup
        toggleOpen={toggleRequestPopup}
        open={openRequestPopup}
      />
      <RequestRefundPopup toggleOpen={toggleRefund} open={openRefund} />
      <GiveBonusPopup toggleOpen={toggleBonus} open={openBonus} />
      <ActiveMilestonePopup open={openMilestone} toggleOpen={toggleMilestone} />
      <EndContract open={openEndContract} toggleOpen={toggleEndContract} />
      <div className="flex md:space-y-0 space-y-2 justify-between items-center pb-6 mb-6 border-b border-gray-100">
        <Label
          value="Remaining Milestones"
          classes={{
            root:
              "text-lg font-sans tracking-tighter font-semibold text-current",
          }}
        />
        <Button
          onClick={toggleMilestone}
          value="Add or Edit Milestones"
          classes={{
            root:
              "text-md tracking-tight py-2 bg-gray-1000 font-light transform-none px-3",
          }}
        />
      </div>
      <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-100">
        <div className="flex md:space-x-8 space-x-3">
          <Label
            value="2"
            classes={{
              root: "text-md font-sans text-gray-300 font-semibold pt-1",
            }}
          />
          <div>
            <div className="flex items-center md:justify-start justify-between space-x-3">
              <Label
                value="12 next pages"
                classes={{
                  root: "text-md text-gray-300 font-semibold tracking-tight",
                }}
                onClick={toggleRequestPopup}
              />
              <Button
                value="INACTIVE"
                onClick={toggleBonus}
                classes={{
                  root:
                    "bg-yellow-400 text-white px-3 py-1 text-xs tracking-tight font-sans",
                }}
              />
            </div>
            <div className="flex items-center mt-4 md:space-x-24 space-x-4">
              <Label
                value="$90.00 (Not founded)"
                classes={{ root: "text-sm tracking-tight text-gray-900" }}
              />
              <Label
                value="Due Oct 28"
                classes={{ root: "text-sm tracking-tight text-gray-900" }}
              />
            </div>
          </div>
        </div>
        <Button
          value="Active"
          classes={{
            root:
              "bg-ideeza-100 transform-none text-base font-sans rounded px-5 font-light tracking-tight py-1 text-white",
          }}
        />
      </div>
      <div className="border-b border-gray-100 pb-6">
        <div className="flex space-x-8">
          <Label
            value="3"
            classes={{
              root:
                "text-md font-sans tracking-tight text-gray-300 font-semibold",
            }}
          />
          <Label
            value="6 last pages + drawings"
            classes={{
              root:
                "text-md font-sans tracking-tight text-gray-300 font-semibold",
            }}
            onClick={toggleRefund}
          />
        </div>
        <Icon_Label
          mainClass="space-x-6 flex items-center mt-4"
          tooltipProps={{ open: false }}
          iconComponent={<IoBulb className="text-gray-900 text-md -ml-1" />}
          iconContanerClass="text-lg"
          labelValue="Based on your current remaining milestones, you have $180.00 of budget left to allocate to new or existing milestones."
          lableClass={{
            root: `text-gray-900 tracking-tight text-md font-sans pl-1`,
          }}
        />
      </div>
    </div>
  );
}
