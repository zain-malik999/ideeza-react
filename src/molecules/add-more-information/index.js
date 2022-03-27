import React from "react";
import { Label } from "atoms";
import { MdClose } from "react-icons/md";
function AddMoreInformation(props) {
  const { value, labelClasses, mainClass } = props;
  return (
    <>
      <div className={`items-center ${mainClass}`}>
        <Label
          value={value}
          classes={{ root: `font-sans tracking-tighter ${labelClasses}` }}
        />
        <div className="flex items-center space-x-2 col-span-2">
          <div className="border rounded pl-2 p-1 space-x-1 flex items-center">
            <Label
              value="English"
              classes={{
                root: `text-gray-900 text-base font-sans tracking-tight`,
              }}
            />
            <MdClose className="text-gray-900 cursor-pointer" />
          </div>
          <Label
            value="+ Add More"
            classes={{
              root: `text-current text-sm underline font-sans tracking-tight`,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default AddMoreInformation;
