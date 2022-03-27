import React from "react";
import { Button } from "atoms";
import { SelectField } from "molecules";
function EmailCenter2() {
  return (
    <>
      <SelectField
        mainClasses="space-y-3"
        value="Select your question category"
        labelClasses="font-sans tracking-normal text-gray-300 text-2xl pb-2"
        placeholder="Report suspicious activity"
        className="text-gray-650 py-3 rounded-md border-gray-810 border-opacity-50 text-sm p-4 border border-solid"
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

export default EmailCenter2;
