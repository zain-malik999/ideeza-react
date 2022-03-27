import React from "react";
import { IconBarCard } from "molecules";
import ColorPicker from "rc-color-picker";

function IconsSide3({ handleClick, active }) {
  return (
    <>
      <IconBarCard
        value="General"
        mainClass="flex h-full flex-col justify-between"
        className="flex space-x-0"
        icons={
          <>
            <div className="grid grid-cols-4 gap-1 items-center">
              <div
                onClick={handleClick.bind(this, "undo")}
                className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer"
              >
                <img
                  src="/assets/images/cover/25.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                onClick={handleClick.bind(this, "redo")}
                className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer"
              >
                <img
                  src="/assets/images/cover/26.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <ColorPicker
                animation="slide-up"
                color={"#36c"}
                onChange={(e) => handleClick(e?.color)}
              />
              <div
                onClick={handleClick.bind(this, "toggleGrid")}
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
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
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "rotate" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/icon-bar/general/rotation.png"
                  className="w-100 cursor-pointer"
                  onClick={handleClick.bind(this, "rotate")}
                />
              </div>
              <div
                onClick={handleClick.bind(this, "360")}
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "360" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/icon-bar/general/360.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                onClick={handleClick.bind(this, "scale")}
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "scale" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/icon-bar/general/resize.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div
                className={`w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer ${
                  active === "delete" ? "bg-ideeza-460" : ""
                }`}
              >
                <img
                  src="/assets/images/cover/34.png"
                  className="w-100 cursor-pointer"
                  onClick={handleClick.bind(this, "delete")}
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/new-file.png"
                  className="w-100  cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/edit.png"
                  className="w-100 cursor-pointer"
                  alt="action"
                />
              </div>
              <div className="w-8 p-1 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/icon-bar/general/save.png"
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
