import React from "react";
import { Avatar } from "atoms";
import { Icon_Label, Working_request } from "molecules";

function AgentCard() {
  return (
    <>
      <div className="border border-gray-125 shadow-lg rounded-md overflow-hidden">
        <img src="/assets/images/bg.png" className="h-24 w-full" alt="lool" />
        <div className="w-full flex justify-center -mt-10">
          <Avatar className="h-20 w-20" />
        </div>
        <Icon_Label
          tooltipProps={{ open: false }}
          labelValue="25 matual connections"
          iconContanerClass="text-lg"
          mainClass="flex items-center justify-center p-3 pb-1"
          lableClass={{
            root: `text-black-500 opacity-50 tracking-tight text-sm pl-1`,
          }}
          iconComponent={<img src="/assets/images/web.svg" className="w-4" />}
        />
        <Working_request
          icon="hidden"
          namevalue="John Doe"
          Compvalue="Techincan"
          avatarClass="hidden"
          mainClass="pl-1 pr-2 mb-3 space-x-2"
          btnvalue="Visit"
          label2Class="text-black-500 opacity-50 text-xs tracking-tight"
          btnClass="bg-white border-solid border-current border transform-none text-current px-8 text-sm py-2 leading-4"
        />
      </div>
    </>
  );
}
export default AgentCard;
