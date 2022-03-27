import React from "react";
import { Modal, Button, Label, Input } from "atoms";
import { UploadField } from "molecules";
function AddCorporationPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="pb-3 p-6">
            <Label
              value="Add corporation"
              className="text-current text-lg font-semibold font-sans tracking-tight"
            />
          </div>
        }
        content={
          <div className="space-y-1">
            <Input
              placeholder="Corporation name"
              name="text"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm mb-1 font-lato -ml-2 p-3 rounded border border-solid border-gray-160"
            />
            <UploadField
              name="image"
              value="Add image"
              placeholder="Choose from computer"
              btnValue="Choose"
              btnClass="hidden"
              iconMainClass="hidden"
              inputClass="text-gray-300 text-sm font-lato px-2 py-2 border border-solid border-gray-160 rounded"
              uploadClass=""
            />
            <Label
              value={
                <>
                  <hr className="w-full" />
                  <span className="w-42 text-center">OR</span>
                  <hr className="w-full" />
                </>
              }
              classes={{
                root: `space-x-2 whitespace-nowrap text-gray-900 caption flex items-center`,
              }}
            />
            <Input
              placeholder="Insert URL"
              name="url"
              containerClass="w-full p-0 placeholder-gray-725"
              inputProps="text-gray-300 text-sm font-lato -ml-2 px-2 py-1 rounded border border-solid border-gray-160"
            />
          </div>
        }
        actions={
          <>
            <div className="flex justify-start w-full p-4 md:pt-2 space-x-3">
              <Button
                onClick={toggleOpen}
                value="Add corporation"
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
export default AddCorporationPopup;
