import React from "react";
import { IconBarCard } from "molecules";

function IconsSide3({ handleClick, active }) {
  return (
    <>
      <IconBarCard
        value="Operations"
        className="flex space-x-0 space-y-1"
        mainClass="flex h-full flex-col justify-between"
        icons={
          <>
            <div className="grid grid-cols-2 gap-1 items-center">
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/bound.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                onClick={handleClick.bind(this, "union")}
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "union" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/icon-bar/general/union.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                onClick={handleClick.bind(this, "toggleGrid")}
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "toggleGrid" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/icon-bar/general/droper.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "substract" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/icon-bar/general/subract.png"
                  className="w-100 cursor-pointer"
                  onClick={handleClick.bind(this, "substract")}
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/arrow.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "intersection" ? "bg-ideeza-460" : ""
                }`}
                onClick={handleClick.bind(this, "intersection")}
              >
                <img
                  src="/assets/icon-bar/general/intersection.png"
                  className="w-100 cursor-pointer"
                  alt="action"
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
