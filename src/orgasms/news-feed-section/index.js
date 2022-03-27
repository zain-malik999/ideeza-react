import React, { useState } from "react";
import { LabelButton } from "molecules";

import { Label } from "atoms";
function NewsFeedSection() {
  return (
    <div>
      <Label
        value="Follow list is empty"
        classes={{
          root:
            "text-center pb-1 text-lg font-bold font-sans tracking-tight text-ideeza-100",
        }}
      />
      <LabelButton
        mainClass="flex-col"
        value="Here will display the posts you and the people post you are following"
        btnValue="Sync contacts"
        labelClass="text-sm text-center font-sans text-gray-550 font-normal md:w-45vh"
        btnClass="bg-ideeza-100 py-2 mt-9 text-white px-6"
        iconStart={
          <img src="/assets/images/feeds/contact.png" className="w-6" />
        }
      />
    </div>
  );
}

export default NewsFeedSection;
