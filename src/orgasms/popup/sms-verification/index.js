import React from "react";
import { Modal, Button, Label, Input } from "atoms";
import { Icon_Label } from "molecules";
import { IoClose } from "react-icons/io5";
function SmsVerification(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <>
            <Icon_Label
              mainClass="flex w-full items-center justify-between flex-row-reverse pl-6 pr-2 pt-3 pb-7"
              lableClass={{
                root: `text-lg text-current font-semibold tracking-tight font-sans`,
              }}
              labelValue="Enter SMS code"
              iconContanerClass=""
              iconComponent={
                <IoClose
                  className="text-red-300 text-2xl cursor-pointer -mt-2"
                  onClick={toggleOpen}
                />
              }
              tooltipProps={{ open: false }}
            />
          </>
        }
        content={
          <>
            <img
              src="/assets/images/Group 3103.png"
              alt="verify"
              className="mx-auto w-28"
            />
            <Label
              value="Enter SMS code"
              className="text-center font-semibold text-md text-gray-300 pt-3 font-sans tracking-tight"
            />
            <Label
              value="Text message verification"
              className="text-center tracking-tight font-sans text-gray-300 text-md mt-3"
            />
            <Label
              value="We'v sent a text message to"
              className="text-center tracking-tight font-sans text-gray-300 text-md my-2"
            />
            <Label
              value="+972 4646438348"
              className="text-center font-sans text-base tracking-tight text-gray-300 font-semibold"
            />
            <div className="flex space-x-2 items-center justify-center mx-auto mt-10">
              <Input
                containerClass="p-0 w-8 h-8"
                className={{
                  root:
                    "p-0 h-full w-full text-sm hover:shadow bg-gray-150 rounded-md sms-input transition-all duration-500 ease-in-out",
                }}
              />
              <Input
                containerClass="p-0 w-8 h-8"
                className={{
                  root:
                    "p-0 h-full w-full text-sm hover:shadow bg-gray-150 rounded-md sms-input transition-all duration-500 ease-in-out",
                }}
              />
              <Input
                containerClass="p-0 w-8 h-8"
                className={{
                  root:
                    "p-0 h-full w-full text-sm hover:shadow bg-gray-150 rounded-md sms-input transition-all duration-500 ease-in-out",
                }}
              />
              <Input
                containerClass="p-0 w-8 h-8"
                className={{
                  root:
                    "p-0 h-full w-full text-sm hover:shadow bg-gray-150 rounded-md sms-input transition-all duration-500 ease-in-out",
                }}
              />
              <Input
                containerClass="p-0 w-8 h-8"
                className={{
                  root:
                    "p-0 h-full w-full text-sm hover:shadow bg-gray-150 rounded-md sms-input transition-all duration-500 ease-in-out",
                }}
              />
              <Input
                containerClass="p-0 w-8 h-8"
                className={{
                  root:
                    "p-0 h-full w-full text-sm hover:shadow bg-gray-150 rounded-md sms-input transition-all duration-500 ease-in-out",
                }}
              />
            </div>
            <Label
              className="text-md font-sans tracking-tight text-center mt-2"
              value={
                <>
                  Don't receive your code?
                  <span className="text-ideeza-100 font-semibold">
                    {" "}
                    Resend{" "}
                  </span>
                </>
              }
            />
          </>
        }
        actions={
          <>
            <div className="flex space-x-2 pb-5 pt-4 px-6">
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `text-current border border-solid border-current tracking-tight font-sans capitalize py-2 text-md w-22`,
                }}
              />
              <Button
                value="Next"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 text-md tracking-tight font-sans capitalize w-22`,
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

export default SmsVerification;
