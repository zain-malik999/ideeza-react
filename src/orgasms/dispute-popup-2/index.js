import React from "react";
import { Label, Input, Select } from "atoms";
import { RadioLabel, TextField, Icon_Label, UploadButton } from "molecules";
import { FiUploadCloud } from "react-icons/fi";
function DisputePopup2() {
  return (
    <div>
      <Label
        classes={{ root: "text-gray-300 text-base leading-5" }}
        value="2. Please tell us your requirement"
      />
      <Label
        value="Order Total: US $ 5.75 ( US $ 5.75 Product Price and US $ 0.0 Shipping Fee)"
        className="text-gray-810 text-base leading-5"
      />
      <div className="pt-3">
        <Label
          value="Your Refund Request:"
          className="text-gray-300 text-base"
        />
        <RadioLabel
          value="Full refund"
          lableClass="text-gray-810 text-base pl-1"
        />
        <RadioLabel
          value="Partial refund"
          lableClass="text-gray-810 text-base pl-1"
        />
      </div>
      <div className="grid grid-cols-3 pl-1 mt-2">
        <Input type="text" />
        <Select
          placeholder="USD"
          className="p-1 border border-solid border-gray-810 border-opacity-50 text-sm"
        />
      </div>
      <Icon_Label
        tooltipProps={{ open: false }}
        iconComponent={
          <img
            src="/assets/images/Icon metro-notification.png"
            alt="exclamation"
            className="w-4"
          />
        }
        mainClass="flex px-3 items-center ml-1 w-full"
        labelValue="You can ask a refund as high as: US $ 5.75"
        lableClass={{
          root: "tracking-tight font-sans text-gray-810 text-base",
        }}
      />
      <TextField
        mainClass="flex flex-col pt-3 -ml-2"
        labelClasses="font-sans md:text-md text-sm traking-tighter text-gray-300 pb-1 pl-2"
        labelvalue="Please write your request detail:"
        inputClasses="w-full p-0 text-sm"
        multiline="true"
        rows="8"
        placeholder="Please provide clear reasons for your refund (between 5-512 characters)..."
      />
      <Label
        value="Please Upload evidence (pdf, jpg or .avi file types 5MB max):"
        className="font-sans md:text-md text-sm traking-tighter text-gray-300 pb-1 pt-3"
      />
      <UploadButton
        mainClass="pb-2"
        value="Image"
        value="Add file"
        btnValue="Choose"
        labelValue="pdf,2"
        icon={<FiUploadCloud className="text-current text-2xl mr-1" />}
        iconComponent={
          <img
            src="/assets/images/criss-cross.png"
            alt="upload"
            className="w-4"
          />
        }
      />
    </div>
  );
}

export default DisputePopup2;
