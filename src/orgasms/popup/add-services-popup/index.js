import React from "react";
import { Modal, Button, Label, Input } from "atoms";
function AddServicesPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="pb-0 p-6">
            <Label
              value="Add services"
              className="text-current text-lg font-semibold font-sans tracking-tight"
            />
          </div>
        }
        content={
          <div>
            <Input
              placeholder="Name services ( divide with commas )"
              name="text"
              multiline={true}
              rows={6}
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 rounded border border-solid border-gray-160"
            />
          </div>
        }
        actions={
          <>
            <div className="flex justify-start w-full p-4 pt-0 space-x-3">
              <Button
                onClick={toggleOpen}
                value="Add services"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-6 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
                }}
              />
              <Button
                onClick={toggleOpen}
                value="Cancel"
                classes={{
                  root: `text-gray-300 border border-gray-600 border-solid bg-white py-2 px-6 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
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
export default AddServicesPopup;
