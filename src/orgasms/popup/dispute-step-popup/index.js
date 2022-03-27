import React from "react";
import { Modal, Label, Button, Input } from "atoms";
import { CheckboxLabel } from "molecules";

function DisputeStepPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <>
            <Label
              value="Choose the step"
              classes={{
                root: `font-sans text-lg text-current tracking-tight font-bold pt-5 px-10`,
              }}
            />
          </>
        }
        content={
          <div className="px-4 pt-3 space-y-3">
            <CheckboxLabel value="Refund" id="Refund" />
            <Input
              placeholder="Type amount in USD"
              className={{
                root: "text-md p-0 px-1 py-1 mb-2 w-3/4 border border-gray-160",
              }}
              containerClass="text-xs"
            />
            <CheckboxLabel value="Refuse" id="Refuse" />
            <Input
              placeholder="Explain why?"
              className={{ root: "text-md p-0 px-1 bg-gray-150" }}
              containerClass="text-xs"
              multiline={true}
              rows={5}
            />
          </div>
        }
        actions={
          <>
            <div className="flex space-x-3 pb-4 pt-8 md:px-8">
              <Button
                value="Complete"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 text-sm tracking-tight font-sans capitalize w-26`,
                }}
              />
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `border border-solid border-gray-810 text-gray-600 py-2 text-sm tracking-tight font-sans capitalize w-26`,
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
export default DisputeStepPopup;
