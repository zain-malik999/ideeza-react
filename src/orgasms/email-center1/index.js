import React from "react";
import { Label, Button } from "atoms";
import { TextField } from "molecules";
function EmailCenter1() {
  return (
    <>
      <Label
        value="How can we help?"
        className="font-sans text-gray-300 text-2xl pb-2"
      />
      <TextField
        mainClass="flex-col space-y-5"
        labelvalue={
          <>
            We're committed to finding the answers you need as quickly as
            possible.
            <br />
            Please tell us a little about what you need help with.
          </>
        }
        labelClasses="font-sans text-gray-300 tracking-tight leading-5 text-sm "
        multiline="true"
        rows="10"
        placeholder="Type your question or a description of the problem you’re trying to resolve here (minimum of 10 characters)..."
        inputClasses="bg-gray-150 rounded-lg p-2"
      />
      <Button
        value="Continue"
        classes={{
          root: `flex text-white bg-ideeza-100 tracking-tight font-sans capitalize mt-5 p-2 w-28 mx-auto`,
        }}
      />
    </>
  );
}

export default EmailCenter1;
