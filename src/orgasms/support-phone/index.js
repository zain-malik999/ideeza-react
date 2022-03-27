import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";
import { MdKeyboardArrowRight } from "react-icons/md";

function Phone() {
  return (
    <div className="bg-white rounded-lg p-4 px-4 grid md:grid-cols-3 gap-6">
      <div className="md:p-3 py-3 space-y-4 order-0 md:order-2">
        <Label
          value="City name, Isreal"
          classes={{ root: "text-gray-300 text-3xl tracking-tight" }}
        />
        <Label
          value="+99555111234125"
          classes={{ root: "text-current text-lg tracking-tight font-sans" }}
        />
        <Label
          value={
            <>
              <span>Ideeza LTD,</span>
              <span>The unreachable Building,</span>
              <span>Happy Lane, LS1 2A0</span>
              <span>(+1) 0123 45678990</span>
            </>
          }
          classes={{
            root:
              "text-blue-550 flex flex-col space-y-3 text-sm tracking-tight font-sans",
          }}
        />
        <Icon_Label
          labelValue="Get directions"
          mainClass="flex flex-row-reverse justify-end items-center my-4 pt-12 cursor-pointer"
          iconContanerClass="text-lg text-gray-300"
          lableClass={{ root: "text-md tracking-tight text-gray-300 pr-1" }}
          iconComponent={
            <MdKeyboardArrowRight className="text-current text-2xl" />
          }
          tooltipProps={{ open: false }}
        />
      </div>
      <img src="/assets/images/map.png" alt="" />
      <img src="/assets/images/phone_pic_2.png" alt="" />
    </div>
  );
}

export default Phone;
