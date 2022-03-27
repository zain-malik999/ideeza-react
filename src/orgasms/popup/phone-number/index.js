import React from "react";
import { Modal, Button, Label, Select, Input } from "atoms";
import { IoClose } from "react-icons/io5";
import { Icon_Label } from "molecules";
function PhoneNumber(props) {
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
                root: `text-lg text-current font-semibold tracking-tight font-sans md:pl-1`,
              }}
              labelValue="Add your mobile number"
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
              value="Add your mobile number"
              className="text-center font-semibold text-md text-gray-300 pt-3 font-sans tracking-tight"
            />
            <Label
              className="text-sm font-sans tracking-tight pt-1 text-gray-300 text-center"
              value={
                <>
                  Phone verification
                  <span className="text-ideeza-100"> (SMS) </span>
                </>
              }
            />
            <div className="grid grid-cols-3 items-start gap-x-2 pt-3 md:px-2">
              <Select
                placeholder="ISR +972"
                containerClass="bg-white h-8 shadow rounded"
              />
              <div className="col-span-2">
                <Input
                  type="number"
                  placeholder="Mobile number"
                  className={{ root: "text-sm pl-0" }}
                  containerClass="bg-gray-100 tracking-tight text-sm rounded-md pl-0"
                />
                <Label
                  value="Messaging rates may apply."
                  className="text-gray-135 text-sm pt-1 tracking-tight font-sans"
                />
              </div>
            </div>
          </>
        }
        actions={
          <>
            <div className="flex space-x-2 pb-5 pt-8 md:px-6 px-4">
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

export default PhoneNumber;
