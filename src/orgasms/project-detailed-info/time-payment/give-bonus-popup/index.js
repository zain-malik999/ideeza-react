import React from "react";
import { Modal, Label, Button } from "atoms";
import { TextField, SelectField, Icon_Label } from "molecules";
function GiveBonusPopup(props) {
  const { open, toggleOpen } = props;
  return (
    <div>
      <Modal
        width="md"
        close={toggleOpen}
        header={
          <>
            <Icon_Label
              mainClass="space-x-6 flex items-center justify-between flex-row-reverse pt-3 md:pr-5 pr-4 pb-5"
              tooltipProps={{ open: false }}
              labelValue="Give Bonus Or Expense Reimbursement"
              iconContanerClass="text-lg"
              lableClass={{
                root: `md:text-2xl text-lg tracking-tighter font-sans font-bold text-ideeza-100`,
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
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-5 gap-y-5 lg:gap-y-0 mb-12">
              <div className="col-span-2">
                <div className="grid grid-cols-2 md:gap-x-24 gap-x-10 justify-between mt-4">
                  <TextField
                    mainClass="flex flex-col w-full"
                    isIcon
                    position="start"
                    icon={<img src="/assets/images/calendar.png" />}
                    labelClasses="w-full font-sans text-md font-semibold tracking-tight text-gray-300 pb-2"
                    inputClasses="w-full p-0 py-1 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
                    InputProps={{ root: "text-right" }}
                    placeholder="0.00"
                    labelvalue="Invoice"
                  />
                  <SelectField
                    value="Reason"
                    labelClasses="w-full font-sans text-md font-semibold tracking-tight text-gray-300 pb-2"
                    mainClasses="flex flex-col"
                    className="w-full text-sm text-gray-900 border px-3 py-0 rounded border-solid border-gray-850 border-opacity-40"
                  />
                </div>

                <Label
                  value="Description"
                  classes={{
                    root:
                      "text-md font-sans tracking-tight text-gray-300 font-semibold mb-2 mt-10",
                  }}
                />
                <TextField
                  labelvalue="Please explain to the freelancer the reason for this request"
                  mainClass="flex flex-col"
                  inputClasses="w-full p-0 py-1 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
                  placeholder=""
                  labelClasses="font-sans text-md tracking-tight text-gray-900 pb-1"
                />
                <Label
                  value={
                    <>
                      Privat Note{" "}
                      <span className="text-gray-900">(Optional)</span>
                    </>
                  }
                  classes={{
                    root:
                      "font-sans text-md font-semibold tracking-tight text-gray-300 py-3 mt-5",
                  }}
                />
                <TextField
                  labelvalue={
                    <>
                      The note will be available in transaction details for
                      personal reference <br />
                      The freelancer will not see this note.
                    </>
                  }
                  mainClass="flex flex-col"
                  inputClasses="w-full p-0 py-1 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
                  placeholder=""
                  labelClasses="font-sans text-md tracking-tight text-gray-900 pb-1"
                />
              </div>
              <div className="p-9 space-y-8 lg:px-12 px-4 rounded-t-lg bg-gray-375">
                <Label
                  value="When you send a bonus or expense reimbursement, account will be charged within 24 hours."
                  classes={{
                    root: "text-lg tracking-tight text-gray-300 font-sans",
                  }}
                />
                <Label
                  value="The freelancer will receive funds after the standard hold."
                  classes={{
                    root: "text-lg tracking-tight text-gray-300 font-sans",
                  }}
                />
              </div>
            </div>
          </>
        }
        actions={
          <div className="px-4 pb-1 space-x-2 flex w-full">
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
              value="Make Payment"
              classes={{
                root:
                  "text-white transform-none md:text-md font-sans px-4 font-light tracking-tight py-2 bg-ideeza-100 ",
              }}
            />
          </div>
        }
        open={open}
      />
    </div>
  );
}
export default GiveBonusPopup;
