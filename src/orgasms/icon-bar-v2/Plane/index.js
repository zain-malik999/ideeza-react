import React from "react";
import { IconBarCard } from "molecules";

function Plane({ handleClick, active }) {
  return (
    <>
      <IconBarCard
        value="Plane"
        className="flex "
        mainClass="flex h-full flex-col justify-between"
        icons={
          <>
            <div className="grid grid-cols-1 gap-1 items-center">
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/polygon.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/point-poly.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                onClick={handleClick.bind(this, "coordinate")}
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer`}
              >
                <img
                  src="/assets/icon-bar/general/grimo.png"
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

export default Plane;
