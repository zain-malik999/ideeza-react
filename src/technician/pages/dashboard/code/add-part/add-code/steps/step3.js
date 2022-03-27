import React, { useState } from "react";
import { TextField } from "molecules";
function Step3() {
  return (
    <TextField
      mainClass="flex flex-col space-y-2 mb-4"
      inputClasses="text-gray-300 bg-white shadow-full text-sm font-lato px-2 py-0 rounded-lg"
      labelClasses="text-black-100 text-sm pl-2 font-sans font-semibold tracking-tight"
      labelvalue="Description"
      placeholder="Type the description here..."
      multiline={true}
      rows={16}
    />
  );
}
export default Step3;
