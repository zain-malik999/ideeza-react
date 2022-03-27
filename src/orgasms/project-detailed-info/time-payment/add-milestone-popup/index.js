import React from "react";
import { Modal, Label, Button } from "atoms";
import { TextField, Icon_Label } from "molecules";
import { BiDollar } from "react-icons/bi";
function AddMilestonePopup(props) {
  const { open, toggleOpen } = props;
  return (
    <>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <>
            <Icon_Label
              mainClass="space-x-6 flex items-center justify-between flex-row-reverse pt-3 pr-4 pb-5"
              tooltipProps={{ open: false }}
              labelValue="Add Milestone"
              iconContanerClass="text-lg"
              lableClass={{
                root: `md:text-2xl text-xl tracking-tighter font-sans font-bold text-ideeza-100`,
              }}
              iconComponent={
                <img
                  src="/assets/images/cross.png"
                  onClick={toggleOpen}
                  className="w-3 h-3 cursor-pointer"
                />
              }
            />
          </>
        }
        content={
          <>
            <TextField
              labelvalue="Name of Milestone 4"
              mainClass="flex flex-col pb-4"
              inputClasses="w-full p-0 py-0 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
              placeholder="Milestone Name"
              labelClasses="font-sans text-sm font-semibold tracking-tight text-gray-300 pb-2"
            />
            <div className="grid grid-cols-2 md:gap-x-24 gap-x-10 justify-between mt-1">
              <TextField
                mainClass="flex flex-col w-full"
                isIcon
                position="start"
                icon={
                  <span className="text-current font-semibold text-xl">$</span>
                }
                labelClasses="w-full font-sans text-sm font-semibold tracking-tight text-gray-300 pb-2"
                inputClasses="w-full p-0 py-0 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
                InputProps={{ root: "text-right" }}
                placeholder="0.00"
                labelvalue="Amount"
              />
              <TextField
                mainClass="flex flex-col w-full"
                isIcon
                position="start"
                icon={<img src="/assets/images/calendar.png" />}
                labelClasses="w-full font-sans text-sm font-semibold tracking-tight text-gray-300 pb-2"
                inputClasses="w-full p-0 py-0 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
                labelvalue={
                  <>
                    Due Date <span className="text-gray-900">(Optional)</span>
                  </>
                }
              />
            </div>
            <Icon_Label
              mainClass="space-x-6 flex items-center flex-row-reverse py-2"
              tooltipProps={{ open: false }}
              labelValue="All dates and times are based on UTC"
              iconContanerClass="text-lg"
              lableClass={{ root: `text-gray-900 tracking-tight text-sm pr-2` }}
              iconComponent={
                <img src="/assets/images/q-mark.png" className="w-4 h-4" />
              }
            />
            <TextField
              mainClass="flex flex-col w-full"
              labelClasses="w-full font-sans text-sm font-semibold tracking-tight text-gray-300 pb-2"
              placeholder="Type here..."
              inputClasses="w-full p-0 py-0 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
              multiline={true}
              rows="6"
              labelvalue={
                <>
                  Description <span className="text-gray-900">(Optional)</span>
                </>
              }
            />
          </>
        }
        actions={
          <div className="pb-4 pt-8 px-4 md:space-x-2 space-x-0 md:space-y-0 space-y-2 flex md:flex-row flex-col w-full">
            <Button
              value="Cancel"
              onClick={toggleOpen}
              classes={{
                root:
                  "bg-white text-ideeza-100 transform-none md:text-md font-sans px-5 font-light tracking-tight py-2",
                outlined: "border border-ideeza-100",
              }}
              variant="outlined"
            />
            <Button
              value="Save & Add another"
              classes={{
                root:
                  "text-white transform-none md:text-md font-sans px-4 font-light tracking-tight py-2 bg-ideeza-100 ",
              }}
            />
            <Button
              value="Save"
              classes={{
                root:
                  "bg-ideeza-100 text-white transform-none md:text-md font-sans px-6 font-light tracking-tight py-2",
              }}
            />
          </div>
        }
        open={open}
      />
    </>
  );
}
export default AddMilestonePopup;
