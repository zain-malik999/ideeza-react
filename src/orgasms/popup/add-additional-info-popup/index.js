import React from "react";
import { Modal, Button, Label, Input } from "atoms";
function AddAdditionalInfoPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="pb-0 p-6">
            <Label
              value="Add Addintional Info"
              className="text-current text-lg font-semibold font-sans tracking-tight"
            />
          </div>
        }
        content={
          <div className="space-y-3">
            <Input
              placeholder="Choose Domain"
              name="text"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-3 rounded border border-solid border-gray-160"
            />
            <Input
              placeholder="Type your info here..."
              name="text"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-3 rounded border border-solid border-gray-160"
            />
          </div>
        }
        actions={
          <>
            <div className="flex justify-start w-full p-4 pt-0 space-x-3">
              <Button
                onClick={toggleOpen}
                value="Add Addintional Info"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-2 rounded-md leading-5 text-sm tracking-tight font-sans capitalize`,
                }}
              />
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `text-gray-300 border border-gray-600 border-solid bg-white py-2 px-6 rounded-md leading-5 text-sm tracking-tight font-sans capitalize`,
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
export default AddAdditionalInfoPopup;
