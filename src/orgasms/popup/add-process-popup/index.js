import React from "react";
import { Modal, Button, Label, Input, Select } from "atoms";
function AddProcessPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="pb-2 p-6">
            <Label
              value="Add new process"
              className="text-current text-lg font-semibold font-sans tracking-tight"
            />
          </div>
        }
        content={
          <div className="space-y-2">
            <Input
              placeholder="Name of the process"
              name="name"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded border border-solid border-gray-160"
            />
            <Select
              placeholder="Sub-processes"
              containerClass="w-full text-gray-900 text-sm border border-gray-160"
              inputClass="text-sm tracking-tight p-2 py-3"
              options={[{ value: "Some", name: "Some" }]}
            />
            <Select
              placeholder="Machines"
              containerClass="w-full text-gray-900 text-sm border border-gray-160"
              inputClass="text-sm tracking-tight p-2 py-3"
              options={[{ value: "Some", name: "Some" }]}
            />
          </div>
        }
        actions={
          <>
            <div className="flex justify-start w-full p-4 space-x-3">
              <Button
                onClick={toggleOpen}
                value="Create process"
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
export default AddProcessPopup;
