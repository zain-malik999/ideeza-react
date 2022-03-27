import React from "react";
import { IconBarCard } from "molecules";

function IconsSide8() {
  return (
    <>
      <IconBarCard
        value="General"
        className="grid grid-cols-2 justify-between items-center gap-0"
        mainClass="flex h-full flex-col justify-between"
        icons={
          <>
            <div className="w-7.5 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
              <img
                src="/assets/images/cover/84.png"
                className="w-100 cursor-pointer"
                alt="Action"
              />
            </div>
            <div className="w-7.5 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
              <img
                src="/assets/images/cover/87.png"
                className="w-100 cursor-pointer"
                alt="Action"
              />
            </div>
            <div className="w-7.5 p-1.5 py-0.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
              <img
                src="/assets/images/cover/83.png"
                className="w-100 cursor-pointer"
                alt="Action"
              />
            </div>
            <div className="w-7.5 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
              <img
                src="/assets/images/cover/86.png"
                className="w-100 cursor-pointer"
                alt="Action"
              />
            </div>
            <div className="w-7.5 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
              <img
                src="/assets/images/cover/85.png"
                className="w-100 cursor-pointer"
                alt="Action"
              />
            </div>
            <div className="w-7.5 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
              <img
                src="/assets/images/cover/89.png"
                className="w-100 cursor-pointer"
                alt="Action"
              />
            </div>
          </>
        }
      />
    </>
  );
}

export default IconsSide8;
