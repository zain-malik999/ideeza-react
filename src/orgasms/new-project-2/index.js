import React from "react";
import { Button, Label } from "atoms";
import { TextField } from "molecules";

function NewProjectSection() {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg md:p-5 p-4">
        <div className="w-2/5 mx-auto">
          <Label
            value="Let's tell us some more info..."
            classes={{ root: "text-ideeza-100 pb-4 text-lg" }}
          />
          <TextField
            mainClass="flex flex-col w-full mb-3"
            labelClasses="w-full font-sans text-sm tracking-tight text-gray-300 pb-1"
            labelvalue="Project Name"
            inputClasses="w-full border border-gray-160 p-0 text-sm"
          />
          <TextField
            mainClass="flex flex-col w-full"
            labelClasses="w-full font-sans text-sm tracking-tight text-gray-300 pb-1"
            placeholder="Type here..."
            multiline={true}
            rows="6"
            inputClasses="w-full text-sm p-0 bg-gray-150"
            labelvalue="Project Description"
          />
          <div className="space-x-4 py-14 pb-18">
            <Button
              classes={{
                root:
                  "bg-ideeza-100 capitalize px-8 border border-solid border-current tracking-tight text-white",
              }}
              value="Create"
            />
            <Button
              classes={{
                root:
                  "bg-white border border-solid border-gray-600 capitalize px-8 tracking-tight text-gray-300",
              }}
              value="Cancel"
            />
          </div>
        </div>
      </div>
      <div className="my-3">
        <Button
          value="Back"
          classes={{
            root: "bg-ideeza-100 capitalize text-white tracking-tight px-9",
          }}
        />
      </div>
    </>
  );
}

export default NewProjectSection;
