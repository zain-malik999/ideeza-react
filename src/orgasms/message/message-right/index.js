import React from "react";
import { Label, Button, Dropdown } from "atoms";
import { TextField, SelectField, AvatarLabels } from "molecules";
import { BsSearch } from "react-icons/bs";

function MessageRight() {
  return (
    <div className="space-y-3 relative">
      <div className="absolute top-0 right-0 -mt-4 -mr-3">
        <Dropdown
          icons={
            <img
              src="/assets/images/Mask Group 3.png"
              alt="setting"
              className="h-5"
            />
          }
          itemsClasses={{
            root:
              "font-sans text-sm px-4 w-32 md:py-3 py-2 hover:text-current text-gray-300",
          }}
          options={[
            {
              name: "View",
              value: "View",
            },
          ]}
        />
      </div>
      <div className="flex space-y-2 flex-col justify-center items-center pb-5">
        <AvatarLabels
          mainClasses="flex flex-col items-center text-center"
          avaterClasses="h-12 w-12"
          mainClassesLabel=""
          title="Tayyab Mughal"
          subtitle="Consultant at Google .Inc"
          titleClasses="text-blue-350 font-sans text-center text-base leading-4 pt-3 tracking-tight font-semibold"
          subtitleClasses="text-gray-600 font-sans text-center text-sm tracking-tight"
        />
        <Button
          value="Add"
          classes={{
            root: `text-white bg-ideeza-100 tracking-tight font-sans capitalize items-center justify-center px-3 py-1 rounded-sm`,
          }}
        />
      </div>
      <TextField
        mainClass="flex flex-col w-full"
        isIcon
        position="end"
        icon={<BsSearch className="text-gray-300" />}
        labelClasses="text-gray-300 text-base font-sans tracking-tight"
        inputClasses="w-full text-sm p-0 pr-2 h-7 border border-solid"
        labelvalue="Search in conversation"
      />
      <SelectField
        mainClasses="flex justify-between items-center grid grid-cols-2"
        value="Shared files"
        placeholder="images"
        options={[{ value: "images", name: "images" }]}
        className="p-0 text-right text-sm pr-8 tracking-tight border-white outline-none border border-solid font-sans"
        labelClasses="text-gray-300 text-base font-bold font-sans tracking-tight"
      />
      <div className="grid md:grid-cols-3 grid-cols-4 gap-1">
        <img
          className="h-18 w-full"
          src="/assets/images/attach1.PNG"
          alt=""
          srcset=""
        />
        <img
          className="h-18 w-full"
          src="/assets/images/card.png"
          alt=""
          srcset=""
        />
        <img
          className="h-18 w-full"
          src="/assets/images/attach2.PNG"
          alt=""
          srcset=""
        />
        <img
          className="h-18 w-full"
          src="/assets/images/attach2.PNG"
          alt=""
          srcset=""
        />
        <img
          className="h-18 w-full"
          src="/assets/images/attach2.PNG"
          alt=""
          srcset=""
        />
        <img
          className="h-18 w-full"
          src="/assets/images/attach2.PNG"
          alt=""
          srcset=""
        />
      </div>
      <div className="">
        <Label
          value="onefile.png"
          classes={{ root: "text-current text-md tracking-tight" }}
        />
      </div>
    </div>
  );
}

export default MessageRight;
