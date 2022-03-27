import React from "react";
import { Label } from "atoms";
import { IconBarCard } from "molecules";

function IconsSide2({ active, handleClick }) {
  const state = "select";
  return (
    <>
      <IconBarCard
        value="Select"
        className="space-y-3"
        mainClass="flex h-full flex-col justify-between"
        icons={
          <>
            <div
              onClick={handleClick.bind(this, state)}
              className={`px-3 py-1 flex flex-col items-center rounded hover:bg-ideeza-460 cursor-pointer transition-all duration-500 ease-in-out ${
                active === state ? "bg-ideeza-460" : ""
              }`}
            >
              <img src="/assets/images/cover/20.png" className="w-6" alt="" />
              <Label
                value="Select"
                className="text-gray-300 text-center text-md pt-2 font-light"
              />
            </div>
            <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
              <img
                src="/assets/images/cover/14.png"
                className="w-6 cursor-pointer"
                alt=""
              />
            </div>
          </>
        }
      />
    </>
  );
}

export default IconsSide2;
