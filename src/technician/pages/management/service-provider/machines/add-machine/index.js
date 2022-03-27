import React, { useState } from "react";
import { Label, Button, Select, Input } from "atoms";
import { UploadField, TextField } from "molecules";

function AddMachines() {
  return (
    <div className="md:pt-2">
      <Label
        value="Machines"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white shadow-lg p-3 pb-28">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pb-10">
          <div className="space-y-3">
            <Select
              placeholder="Choose processes"
              containerClass=" w-full bg-gray-375 text-gray-900"
              inputClass="text-sm tracking-tight py-3 px-2"
              options={[{ value: "All", name: "All" }]}
            />
            <Select
              placeholder="Choose sub-processes"
              containerClass=" w-full bg-gray-375 text-gray-900"
              inputClass="text-sm tracking-tight py-3 px-2"
              options={[{ value: "All", name: "All" }]}
            />
            <Input
              placeholder="Machine name"
              name="name"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 px-2 py-3 bg-gray-375"
            />
            <Input
              placeholder="Machine line"
              name="text"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 px-2 py-3 bg-gray-375"
            />
            <Input
              placeholder="Year produced"
              name="text"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 px-2 py-3 bg-gray-375"
            />
            <UploadField
              name="image"
              value="Add image"
              placeholder="Choose from computer"
              btnValue="Choose"
              btnClass="hidden"
              iconMainClass="hidden"
              inputClass="text-gray-900 text-sm font-lato px-2 py-3 bg-gray-375"
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
                root: `space-x-2 pb-1 whitespace-nowrap text-gray-900 caption flex items-center`,
              }}
            />
            <Input
              placeholder="Insert URL"
              name="url"
              containerClass="w-full p-0 placeholder-gray-725"
              inputProps="text-gray-725 text-md font-lato -ml-2 px-2 py-1 bg-gray-375"
            />
          </div>
          <div className="space-y-3">
            <TextField
              mainClass="flex flex-col space-y-2"
              inputClasses="text-gray-300 text-sm font-lato px-2 py-0 bg-gray-375"
              labelClasses="text-black-100 text-md font-semibold font-sans tracking-tight"
              labelvalue="Description:"
              placeholder="text..."
              multiline={true}
              rows={6}
            />
            <Input
              placeholder="Accuracy"
              name="text"
              isIcon
              icon={<span className="text-black-100 text-md">mm</span>}
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 px-2 py-3 bg-gray-375"
            />
          </div>
        </div>
        <div className="flex justify-start w-full space-x-3">
          <Button
            value="Add Machines"
            classes={{
              root: `text-white bg-ideeza-100 py-2 px-8 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
            }}
          />
          <Button
            value="Cancel"
            classes={{
              root: `text-gray-300 border border-gray-600 border-solid bg-white py-2 px-6 leading-5 text-sm tracking-tight font-sans capitalize rounded`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AddMachines;
