import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";
function EmailCenter4() {
  return (
    <div>
      <Icon_Label
        mainClass="flex flex-col items-center justify-center space-x-1 pt-8 items-end space-y-8"
        labelValue="Your email is sent!"
        lableClass={{
          root:
            "font-sans tracking-tight text-center text-gray-300 text-3xl font-bold pb-2",
        }}
        tooltipProps={{ open: false }}
        iconContanerClass="h-20 w-20"
        iconComponent={
          <img
            src="/assets/images/Icon ionic-ios-checkmark-circle-outline.png"
            alt="email-sent"
            className="w-56"
          />
        }
      />
      <Label
        value="We will be in touch as soon as possible."
        className="font-sans tracking-tight text-lg text-gray-300 text-center pb-8"
      />
    </div>
  );
}

export default EmailCenter4;
