import React from "react";
import { Modal, Label, Button } from "atoms";
import { Icon_Label } from "molecules";

function EndContract(props) {
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
              labelValue="End Contract"
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
            <div className="flex-col">
              <img
                src="/assets/images/Group 4474.png"
                alt="center"
                className="mx-auto md:w-1/2 mt-4"
              />
              <Label
                value="Are you sure you want to end this contract?"
                className="font-bold text-gray-300 tracking-tight font-sans text-md text-center pb-1 pt-2"
              />
              <Label
                value="You'll be promoted to provide feedback and make any final payments in the following steps."
                className="text-sm tracking-tight text-gray-300 font-sans text-center"
              />
            </div>
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
export default EndContract;
