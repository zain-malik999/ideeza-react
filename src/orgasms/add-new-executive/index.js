import React from "react";
import { Input, Label, Select, Button } from "atoms";
function AddNewExecutive() {
  return (
    <div className="p-4 space-y-3">
      <Label value="Add new executive" className="text-current text-lg" />
      <Input placeholder="Email address" type="text" inputProps="p-4" />
      <Input placeholder="First name" type="text" inputProps="p-4" />
      <Input placeholder="Last name" type="text" inputProps="p-4" />
      <Input placeholder="Choose a password" type="text" inputProps="p-4 " />
      <Label
        value="Other people won't see your birthday."
        className="mt-7 text-current text-lg"
      />
      <div className="flex space-x-2">
        <Input placeholder="" type="text" inputProps="p-4" />
        <Input placeholder="Day" type="text" inputProps="p-4" />
        <Select placeholder="Year" className="text-gray-500" />
      </div>
      <Select placeholder="Permission type" className="p-4 text-gray-500" />

      <Button
        value="Sign up"
        classes={{
          root: `text-white bg-ideeza-100 p-4 tracking-tight font-sans text-lg flex mx-auto w-48 transform-none`,
        }}
      />
    </div>
  );
}

export default AddNewExecutive;
