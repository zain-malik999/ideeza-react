import React from "react";
import { Label } from "atoms";
import { TwoLabels, TextField } from "molecules";
function HourlyRates() {
  return (
    <div className="rounded-lg bg-white shadow-md md:p-5 md:px-7 p-4">
      <Label
        value="Please note that your new hourly rate will only apply to new contracts. The IDEEZA Service Fee is 20% when you begin a contract with new client. Once you bill over $500 with your client, the fee will be 10%."
        className="text-gray-300 text-md font-sans tracking-tight pb-5"
      />
      <Label
        value={
          <>
            Your profile rate <span className="font-semibold">$10.00/hr</span>
          </>
        }
        className="text-gray-300 text-md font-sans tracking-tight pb-5 "
      />
      <div className="md:grid grid-cols-3 items-center justify-between py-4">
        <TwoLabels
          mainClass="flex flex-col col-span-2"
          value="Hourly Rate"
          value2="Total amount the client will see"
          labelClass="text-gray-300 text-md font-sans tracking-tight font-semibold"
          labelClass2="text-gray-300 text-md font-sans tracking-tight"
        />
        <TextField
          mainClass="flex flex-row-reverse items-center"
          isIcon
          position=""
          icon={<span className="text-current font-bold text-2xl">$</span>}
          labelvalue="/hr"
          variant="filled"
          labelClasses="pl-3 text-md tracking-tight font-sans text-gray-300"
          inputClasses="bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="md:grid grid-cols-3 items-center justify-between py-4">
        <Label
          value="20% IDEEZA Service Fee"
          className="text-gray-300 text-md font-semibold font-sans tracking-tight col-span-2"
        />
        <TextField
          mainClass="flex flex-row-reverse items-center"
          isIcon
          position=""
          icon={<span className="text-current font-bold text-2xl">$</span>}
          labelvalue="/hr"
          variant="filled"
          labelClasses="pl-3 text-md tracking-tight font-sans text-gray-300"
          inputClasses="bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="md:grid grid-cols-3 items-center justify-between py-4">
        <TwoLabels
          mainClass="flex flex-col col-span-2"
          value="You'll Receive"
          value2="The estimated amount you'll receive after service fees"
          labelClass="text-gray-300 text-md font-sans tracking-tight font-semibold"
          labelClass2="text-gray-300 text-md font-sans tracking-tight"
        />
        <TextField
          mainClass="flex flex-row-reverse items-center"
          isIcon
          position=""
          icon={<span className="text-current font-bold text-2xl">$</span>}
          labelvalue="/hr"
          variant="filled"
          labelClasses="pl-3 text-md tracking-tight font-sans text-gray-300"
          inputClasses="bg-gray-100 p-1 text-sm hover:bg-white border border-gray-100 hover:border-current hover:shadow transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}
export default HourlyRates;
