import React from "react";
import { Modal, Button } from "atoms";
import { TextField, Icon_Label } from "molecules";
function MilestoneChangeRequestPopup(props) {
  const { open, toggleOpen } = props;
  return (
    <div>
      <Modal
        width="sm"
        close={toggleOpen}
        header={
          <Icon_Label
            mainClass="space-x-6 flex items-center justify-between flex-row-reverse pt-3 md:pr-5 pr-4 pb-5"
            tooltipProps={{ open: false }}
            labelValue="Milestone Change Request"
            iconContanerClass="text-lg"
            lableClass={{
              root: `md:text-2xl text-xl tracking-tighter font-sans font-bold text-ideeza-100`,
            }}
            iconComponent={
              <img
                src="/assets/images/cross.png"
                onClick={toggleOpen}
                className="w-3 cursor-pointer"
              />
            }
          />
        }
        content={
          <>
            <Button
              value="Save & Add Another"
              classes={{
                root:
                  "capitalize text-md font-sans tracking-tight bg-gray-1000 shadow px-4 py-2 mb-4 text-ideeza-100 ",
              }}
            />
            <TextField
              labelvalue={
                <>
                  Message <span className="text-gray-900">(optional)</span>
                </>
              }
              mainClass="flex flex-col pb-4"
              inputClasses="w-full p-0 py-1 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
              placeholder="Let the client know why you're adding milestones"
              multiline={true}
              rows={6}
              labelClasses="font-sans text-md font-semibold tracking-tight text-gray-300 pb-2"
            />
          </>
        }
        actions={
          <div className="px-4 pb-3 space-x-2 flex w-full">
            <Button
              value="Cancel"
              onClick={toggleOpen}
              classes={{
                root:
                  "bg-white text-ideeza-100 transform-none text-md font-sans px-5 font-light tracking-tight py-2",
                outlined: "border border-ideeza-100",
              }}
              variant="outlined"
            />
            <Button
              value="Send Request"
              classes={{
                root:
                  "text-white transform-none text-md font-sans px-5 font-light tracking-tight py-2 bg-ideeza-100 ",
              }}
            />
          </div>
        }
        open={open}
      />
    </div>
  );
}
export default MilestoneChangeRequestPopup;
