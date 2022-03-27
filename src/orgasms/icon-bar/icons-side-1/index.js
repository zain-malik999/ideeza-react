import React from "react";
import { Label, Dropdown } from "atoms";
import { BiCaretDown } from "react-icons/bi";
import { IconBarCard } from "molecules";

function IconsSide1({ active }) {
  return (
    <>
      <IconBarCard
        value="Clipboard"
        className="flex flex-col items-center"
        mainClass="flex h-full flex-col justify-between"
        icons={
          <>
            <img
              src="/assets/images/cover/24.png"
              className="w-11 cursor-pointer"
              alt=""
            />
            <Label
              value="Paste"
              classes={{ root: "text-gray-300 text-md pt-2 pb-1 font-light" }}
            />
            <Dropdown
              className="p-1"
              icons={<BiCaretDown className={`text-xl text-gray-940`} />}
              itemsClasses={{
                root:
                  "font-sans text-sm px-4 py-2 tracking-tight font-sans hover:text-current text-gray-880",
              }}
              options={[
                {
                  name: `Ctrl+V`,
                  value: "Ctrl+V",
                },
                {
                  name: `Paste Special`,
                  value: "Special",
                },
                {
                  name: `Paste to Original Position`,
                  value: "Original",
                },
                {
                  name: `Paste to Selected Position`,
                  value: "Selected",
                },
              ]}
            />
          </>
        }
        icons2={
          <>
            <div className="space-y-0">
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/23.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/22.png"
                  className="w-100 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="w-8 p-1.5 hover:bg-ideeza-460 rounded-sm cursor-pointer">
                <img
                  src="/assets/images/cover/21.png"
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
