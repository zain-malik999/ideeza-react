import React from "react";
import { Button, Avatar } from "atoms";
import { Icon_Label } from "molecules";
import { IoClose } from "react-icons/io5";
function ChooseYourAvatar() {
  return (
    <div className="p-0">
      <Icon_Label
        mainClass="flex items-center w-full justify-between flex-row-reverse pb-7"
        lableClass={{
          root: `text-ideeza-100 font-bold text-xl font-sans tracking-tight`,
        }}
        labelValue="Choose your avatar"
        iconComponent={
          <IoClose className="text-red-250 text-2xl cursor-pointer -mr-5 -mt-5" />
        }
        tooltipProps={{ open: false }}
      />

      <div className="bg-white h-64 overflow-y-auto pr-3 -mr-3">
        <div className="bg-gray-100 w-full rounded-xl flex flex-wrap">
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
          <Avatar className="w-20 h-20 m-2" />
        </div>
      </div>
      <div className="flex items-center space-x-3 mt-14 md:px-2">
        <Button
          value="Cancel"
          classes={{
            root: `border border-solid border-gray-850 text-gray-850 p-2 tracking-tight text-md capitalize w-24 font-sans`,
          }}
        />
        <Button
          value="Upload"
          classes={{
            root: `text-white bg-ideeza-100 border border-solid border-ideeza-100 tracking-tight text-md capitalize p-2 w-24 font-sans`,
          }}
        />
      </div>
    </div>
  );
}
export default ChooseYourAvatar;
