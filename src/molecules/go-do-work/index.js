import React from "react";
import { TwoLabels } from "..";
import { RiPencilFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function GoDoWork(props) {
  const { label1, label2, mainClass, label1Class, label2Class } = props;
  return (
    <div className={mainClass}>
      <TwoLabels
        mainClass="flex flex-col"
        value={label1}
        value2={label2}
        labelClass={label1Class}
        labelClass2={label2Class}
      />
      <div className="flex space-x-2 items-center">
        <RiPencilFill className="cursor-pointer text-lg" />
        <IoMdClose className="cursor-pointer text-lg" />
      </div>
    </div>
  );
}
GoDoWork.defaultProps = {
  mainClass: "flex justify-between bg-white px-2 pt-2 mt-4",
  label1Class: "text-md leading-5 text-gray-900",
  label2Class: "text-xs text-gray-900",
};

export default GoDoWork;
