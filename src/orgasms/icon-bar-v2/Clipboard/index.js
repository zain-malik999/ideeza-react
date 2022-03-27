import React from "react";
import { Label } from "atoms";
import { IconBarCard } from "molecules";

function IconsSide1({ active, handleClick }) {
  return (
    <>
      <IconBarCard
        mainClass="flex h-full flex-col justify-between"
        value="Clipboard"
        className="flex flex-col items-center"
        icons={
          <>
            <img
              src="/assets/icon-bar/general/paste.png"
              className="w-16 cursor-pointer"
              alt=""
            />
            <Label
              value="Paste"
              classes={{ root: "text-gray-300 text-md pt-2 pb-1 font-light" }}
            />
          </>
        }
        icons2={
          <>
            <div className="space-y-1">
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/cut.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div
                onClick={handleClick.bind(this, "copy")}
                className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer"
              >
                <img
                  src="/assets/icon-bar/general/files-copy.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/tri.png"
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

export default IconsSide1;
