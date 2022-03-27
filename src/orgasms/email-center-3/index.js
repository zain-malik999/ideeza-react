import React from "react";
import { Button, Label } from "atoms";
import { FiUploadCloud } from "react-icons/fi";
import { TextField, UploadButton } from "molecules";
function EmailCenter3() {
  return (
    <div className="space-y-8">
      <TextField
        mainClass="flex flex-col w-full"
        labelClasses="w-full font-sans text-md tracking-normal text-gray-300 pb-3"
        inputClasses="w-full text-xs px-0 border border-gray-160 py-1"
        labelvalue="Subject"
      />
      <div className="">
        <Label
          value="Attachment"
          classes={{ root: "font-sans text-md tracking-normal text-gray-300" }}
        />
        <UploadButton
          mainClass="py-3"
          labelClass="text-current text-lg font-sans tracking-tight"
          btnClass="w-full flex items-center justify-center bg-gray-375 border border-ghray-125 rounded px-2 py-2"
          fileClass="hidden"
          value={
            <>
              Add file <span className="text-gray-600">or drop files here</span>
            </>
          }
          icon={<FiUploadCloud className="text-current text-2xl mr-1" />}
        />
      </div>
      <div className="flex justify-between mt-5">
        <Button
          value="Back"
          classes={{
            root: `border border-solid border-gray-400 text-gray-300 text-md tracking-tight font-sans capitalize py-2 w-32`,
          }}
        />
        <Button
          value="Send"
          classes={{
            root: `text-white bg-ideeza-100 text-md tracking-tight font-sans capitalize py-2 w-32`,
          }}
        />
      </div>
    </div>
  );
}

export default EmailCenter3;
