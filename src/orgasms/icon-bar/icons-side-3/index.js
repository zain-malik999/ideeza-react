import React from "react";
import { Label } from "atoms";
import { IconBarCard } from "molecules";

function IconsSide3({ handleClick, active }) {
  return (
    <>
      <IconBarCard
        value="General"
        mainClass="flex h-full flex-col justify-between w-28"
        className="flex w-full"
        icons={
          <>
            <div className="grid grid-cols-4 gap-1 w-full items-center">
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/25.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/26.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                className={`px-3 py-1 flex flex-col items-center rounded hover:bg-ideeza-460 cursor-pointer transition-all duration-500 ease-in-out`}
              >
                <div className="h-4 w-6 bg-current rounded-sm"></div>
                <Label
                  value="color"
                  className="text-gray-300 text-3xs leading-3 font-light"
                />
              </div>
              <div
                onClick={handleClick.bind(this, "toggleGrid")}
                className={`w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "toggleGrid" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/images/cover/graph.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                className={`w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "rotate" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/images/cover/27.png"
                  className="w-100 cursor-pointer"
                  onClick={handleClick.bind(this, "rotate")}
                />
              </div>
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/28.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/33.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 h-0 p-1.5">
                <img className="opacity-0" alt="action" />
              </div>
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/109.png"
                  className="w-100 h-5 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/edit.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/29.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                className={`w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "delete" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/images/cover/34.png"
                  className="w-100 cursor-pointer"
                  onClick={handleClick.bind(this, "delete")}
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default IconsSide3;
