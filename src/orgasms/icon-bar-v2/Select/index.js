import React from "react";
import { Icon_Label, IconBarCard } from "molecules";

function Select({ active, handleClick }) {
  const state = "select";
  return (
    <>
      <IconBarCard
        value="Select"
        className="space-y-3"
        mainClass="flex h-full flex-col justify-between"
        icons={
          <>
            <Icon_Label
              onClick={handleClick.bind(this, state)}
              mainClass={`px-3 py-1 rounded hover:bg-ideeza-460 cursor-pointer transition-all duration-500 ease-in-out flex flex-col items-center ${
                active === state ? "bg-ideeza-460" : ""
              }`}
              tooltipProps={{ open: false }}
              labelValue="Select"
              iconContanerClass="text-lg"
              lableClass={{ root: `text-gray-300 text-md pt-2 font-light` }}
              iconComponent={
                <img
                  src="/assets/icon-bar/general/select.png"
                  className="w-12"
                  alt=""
                />
              }
            />
            <img
              src="/assets/icon-bar/general/select-all.png"
              className="w-6 cursor-pointer"
              alt=""
            />
          </>
        }
      />
    </>
  );
}

export default Select;
