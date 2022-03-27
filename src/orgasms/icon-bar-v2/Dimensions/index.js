import React from "react";
import { Label } from "atoms";
import { IconBarCard } from "molecules";

function Dimensions({ active }) {
  return (
    <>
      <IconBarCard
        mainClass="flex h-full flex-col justify-between"
        value="Clipboard"
        className="flex flex-col items-center"
        icons={
          <>
            <img
              src="/assets/icon-bar/general/smart.png"
              className="w-16 cursor-pointer"
              alt=""
            />
            <Label
              value={
                <>
                  Smart
                  <br />
                  Dimensions
                </>
              }
              classes={{
                root: "text-gray-300 text-center text-md pt-2 pb-1 font-light",
              }}
            />
          </>
        }
        icons2={
          <>
            <div className="grid grid-cols-5 gap-1 items-center">
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/dignal.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/xox.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/points.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/two points.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/center-points.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/between-two.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/three-coordinate.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/edit-coord.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/coord-move.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/select-coord.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/xo.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/x-height.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/select-x.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/x-copy.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/x-up.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default Dimensions;
