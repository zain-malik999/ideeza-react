import React from "react";
import { Modal, Label, Button } from "atoms";
import { Icon_Label } from "molecules";
import { BsPencilSquare } from "react-icons/bs";

function ActiveMilestonePopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="sm"
        close={toggleOpen}
        header={
          <>
            <Icon_Label
              mainClass="space-x-6 flex items-center justify-between flex-row-reverse pt-3 md:pr-5 pr-4 pb-5"
              tooltipProps={{ open: false }}
              labelValue="Active Milestone"
              iconContanerClass="text-lg"
              lableClass={{
                root: `md:text-xl text-lg tracking-tighter font-sans font-bold text-ideeza-100`,
              }}
              iconComponent={
                <img
                  src="/assets/images/cross.png"
                  onClick={toggleOpen}
                  className="w-3 cursor-pointer"
                />
              }
            />
          </>
        }
        content={
          <>
            <img
              src="/assets/images/Group 4468.png"
              alt="center"
              className="mx-auto md:w-1/2 mt-4"
            />
            <Label
              value="12 next pages"
              className="font-bold text-gray-300 tracking-tight font-sans text-sm"
            />
            <Icon_Label
              labelValue="Due Oct 28"
              tooltipProps={{ open: false }}
              lableClass={{
                root: "text-xs tracking-tight text-gray-300 font-sans -ml-1",
              }}
              mainClass="flex items-center"
              iconComponent={
                <img
                  src="/assets/images/calendar.png"
                  alt="calendar"
                  className="w-5 -ml-2"
                />
              }
            />
            <div className="flex items-center space-x-1">
              <Label
                value="$90.00"
                className="font-bold text-gray-300 tracking-tight font-sans text-sm"
              />
              <Icon_Label
                labelValue="Edit"
                tooltipProps={{ open: false }}
                lableClass={{
                  root:
                    "text-xs tracking-tight text-ideeza-100 font-sans -ml-1 font-semibold",
                }}
                // mainClass="flex space-x-1 mt-2 text-ideeza-100 items-end"
                iconComponent={
                  <BsPencilSquare className="text-ideeza-100 text-md" />
                }
              />
            </div>
            <Label
              value="Your payment method will be charged for this milestone amount, and funds are surely in escrow until you approve the submitted work."
              className="text-sm tracking-tight text-gray-300 font-sans w-4/5"
            />
          </>
        }
        actions={
          <>
            <div className="px-4 pt-4 pb-1 space-x-2 flex w-full">
              <Button
                value="Cancel"
                onClick={toggleOpen}
                classes={{
                  root:
                    "bg-white text-ideeza-100 transform-none text-sm font-sans px-5 font-light tracking-tight py-2",
                  outlined: "border border-ideeza-100",
                }}
                variant="outlined"
              />
              <Button
                value="Activate & Fund"
                classes={{
                  root:
                    "text-white transform-none text-sm font-sans px-5 font-light tracking-tight py-2 bg-ideeza-100 ",
                }}
              />
            </div>
          </>
        }
        open={open}
      />
    </div>
  );
}
export default ActiveMilestonePopup;
