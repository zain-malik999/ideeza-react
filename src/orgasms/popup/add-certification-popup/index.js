import React from "react";
import { Modal, Button, Label, Input } from "atoms";
function AddCertificationsPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="pb-3 p-6 md:px-12">
            <Label
              value="Add certification"
              className="text-current text-lg font-semibold font-sans tracking-tight"
            />
          </div>
        }
        content={
          <div className="space-y-3 md:px-6">
            <Input
              placeholder="Certification name"
              name="text"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-3 rounded border border-solid border-gray-160"
            />
            <Input
              placeholder="Year estabilished"
              name="text"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-3 rounded border border-solid border-gray-160"
            />
          </div>
        }
        actions={
          <>
            <div className="flex justify-start w-full p-4 md:px-10 md:pt-2 pb-8 space-x-3">
              <Button
                onClick={toggleOpen}
                value="Add certifications"
                classes={{
                  root: `text-white bg-ideeza-100 py-2 px-6 rounded-md leading-5 text-sm tracking-tight font-sans capitalize`,
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
export default AddCertificationsPopup;
