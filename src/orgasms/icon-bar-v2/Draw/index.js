import React from "react";
import { IconBarCard } from "molecules";

function IconsSide3({ handleClick, active }) {
  return (
    <>
      <IconBarCard
        value="Draw"
        className="flex space-x-0 space-y-1"
        mainClass="flex h-full flex-col justify-between"
        icons={
          <>
            <div className="grid grid-cols-4 gap-1 items-center">
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/line.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/tangent.png"
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
                  src="/assets/icon-bar/general/group.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "rotate" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/icon-bar/general/contect.png"
                  className="w-100 cursor-pointer"
                  onClick={handleClick.bind(this, "rotate")}
                />
              </div>
              <div
                onClick={handleClick.bind(this, "square")}
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "square" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/icon-bar/general/rect.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/curves.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/crop.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/move.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                onClick={handleClick.bind(this, "circle")}
                className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer"
              >
                <img
                  src="/assets/icon-bar/general/circle.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/fillet.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/trim.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/flip.png"
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
