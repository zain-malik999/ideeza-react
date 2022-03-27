import React from "react";
import { Label, Input, Button, Select } from "atoms";

function AddNewContributor() {
  return (
    <>
      <div>
        <Label
          value="Assign a new contributor"
          classes={{
            root:
              "text-gray-600 text-lg tracking-tight font-semibold font-sans pb-4",
          }}
        />
        <div className="flex space-x-3 mb-3">
          <div className="flex w-full">
            <Input
              placeholder="Type email"
              name="email"
              className={{
                root: "text-md h-9 pl-0 rounded-r-none border border-gray-160",
              }}
              containerClass="text-xs"
            />
            <Select
              placeholder="Editor"
              containerClass="h-9 rounded-l-none w-26 text-ideeza-100 border border-gray-160 border-l-0"
              inputClass="text-base tracking-tight p-1 px-2"
              options={[
                { value: "Editor", name: "Editor" },
                { value: "Onwer", name: "Onwer" },
              ]}
            />
          </div>
          <Select
            placeholder="Car"
            containerClass="h-9 w-26 text-gray-600 border border-gray-160"
            inputClass="text-base tracking-tight p-1 px-2"
            options={[{ value: "Some", name: "Some" }]}
          />
          <Button
            value="Add"
            classes={{ root: "bg-current capitalize text-white md:px-9 px-6" }}
          />
        </div>
        <Label
          value="Can send messages and publish as the Page, respond to and delete comments on the Page, see which admin created a post or comment, view insights, respond to and delete comments from the Page and edit details of page."
          classes={{ root: `pb-3 text-gray-900 text-base font-sans leading-5` }}
        />
      </div>
    </>
  );
}

export default AddNewContributor;
