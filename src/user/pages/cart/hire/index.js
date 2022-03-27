import React from "react";
import { ConfirmationLeft, ConfirmationRight } from "orgasms";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Button } from "atoms";
function Hire() {
  return (
    <div className="">
      <Button
        iconStart={<IoArrowBackCircleSharp className="text-2xl" />}
        value="Go back"
        color="current"
        className="text-white bg-current rounded font-sans tracking-tight transform-none px-5 py-2 text-sm space-x-4"
      />
      <div className="grid md:grid-cols-12 grid-cols-1 mt-5 md:space-x-4 space-y-4 md:space-y-0">
        <ConfirmationLeft mainClass="rounded-lg shadow bg-white lg:col-span-9 md:col-span-8 space-y-8" />
        <ConfirmationRight mainClass="rounded-lg shadow bg-white lg:col-span-3 md:col-span-4 space-y-8 p-3 pt-4 md:pt-3" />
      </div>
    </div>
  );
}

export default Hire;
