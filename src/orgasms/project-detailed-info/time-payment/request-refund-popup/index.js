import React from "react";
import { Modal, Label, Button } from "atoms";
import {
  TextField,
  SelectField,
  RadioLabel,
  Icon_Label,
  UploadButton,
} from "molecules";
import { MdAttachFile } from "react-icons/md";
function RequestRefundPopup(props) {
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
              labelValue="Request A Refund"
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
          </>
        }
        content={
          <>
            <div className="grid lg:grid-cols-3 grid-cols-1 mb-12">
              <div className="col-span-2 lg:pr-4 pr-0">
                <SelectField
                  value="Invoice"
                  labelClasses="w-full font-sans text-md font-semibold tracking-tight text-gray-300 pb-2"
                  mainClasses="flex flex-col"
                  className="w-full text-sm text-gray-900 border px-3 py-0 rounded border-solid border-gray-850 border-opacity-40"
                />
                <Label
                  value="Refund Requested"
                  className="font-sans text-md font-semibold tracking-tight text-gray-300 pt-6"
                />
                <div className="-ml-2 pb-6">
                  <RadioLabel
                    radioClass={{ checked: "text-ideeza-100" }}
                    value="Total invoice amount ($0.00)"
                    lableClass="text-gray-300 text-base text-md tracking-tight"
                  />
                  <RadioLabel
                    mainClass="-mt-3 -ml-1 flex items-center"
                    radioClass={{ checked: "text-ideeza-100" }}
                    value="Other amount"
                    lableClass="text-gray-300 text-base text-md tracking-tight"
                  />
                </div>
                <TextField
                  labelvalue="Messages"
                  mainClass="flex flex-col"
                  inputClasses="w-full p-0 py-1 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
                  placeholder="Please explain to the freelancer the reason for this request"
                  multiline={true}
                  rows={6}
                  labelClasses="font-sans text-md font-semibold tracking-tight text-gray-300 pb-2"
                />
                <div className="flex items-center">
                  <UploadButton
                    mainClass="py-3"
                    labelClass="text-gray-300 text-md font-sans tracking-tight"
                    btnClass="w-full flex items-center justify-center bg-gray-100 border border-gray-160 rounded px-2 py-1"
                    fileClass="hidden"
                    value="Attach file"
                    icon={
                      <MdAttachFile className="text-current text-2xl mr-1" />
                    }
                  />
                  <Label
                    value="Up to 25 MB"
                    classes={{
                      root:
                        "text-gray-900 tracking-tight font-sans text-md pl-2 font-sans",
                    }}
                  />
                </div>
              </div>
              <div className="md:p-9 space-y-8 lg:px-12 p-5 rounded-t-lg bg-gray-375">
                <Label
                  value="Requesting an escrow refund?"
                  classes={{
                    root:
                      "text-xl font-semibold tracking-tight text-ideeza-100 font-sans",
                  }}
                />
                <Label
                  value={
                    <>
                      If your funds are currently in escrow, follow the{" "}
                      <span className="text-current">
                        escrow refund process
                      </span>{" "}
                      to request a refund.
                    </>
                  }
                  classes={{
                    root:
                      "text-base leading-6 tracking-tight text-gray-300 font-sans",
                  }}
                />
                <Label
                  value="If your funds have been released from escrow, use this form to request a refund from your freelancer."
                  classes={{
                    root:
                      "text-base leading-6 tracking-tight text-gray-300 font-sans",
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
              value="Send Request"
              classes={{
                root:
                  "text-white transform-none md:text-md font-sans px-5 font-light tracking-tight py-2 bg-ideeza-100 ",
              }}
            />
          </div>
        }
        open={open}
      />
    </div>
  );
}
export default RequestRefundPopup;
