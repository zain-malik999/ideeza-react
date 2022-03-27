import React from "react";
import { Label, Select } from "atoms";
import { GoPrimitiveDot } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";

function TabMachineProcessLower(props) {
  const {
    mainClass,
    colClass,
    item,
    itemClass,
    table,
    item2,
    col2Inner,
    col2Value1,
    col2Value2,
    col2Value3,
    col2Class1,
    list,
    iconClass,
    col2Value4,
    col2Class2,
    col2Value5,
  } = props;
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 md:gap-x-10 gap-y-5 lg:px-10 lg:pr-12">
        <Select
          placeholder="Process"
          containerClass="bg-gray-100 text-gray-300 border border-gray-160"
          inputClass="text-sm tracking-tight p-2 px-2"
          options={[{ value: "Process", name: "Process" }]}
        />
        <div className="flex items-center space-x-6">
          <FaLongArrowAltRight className="text-gray-825 text-xl" />
          <Select
            placeholder="Sub-process"
            containerClass="bg-gray-100 text-gray-300 border border-gray-160"
            inputClass="text-sm tracking-tight p-2 px-2"
            options={[{ value: "Sub-process", name: "Sub-process" }]}
          />
        </div>
        <div className="flex items-center space-x-6">
          <FaLongArrowAltRight className="text-gray-825 text-xl" />
          <Select
            placeholder="Material"
            containerClass="bg-gray-100 text-gray-300 border border-gray-160"
            inputClass="text-sm tracking-tight p-2 px-2"
            options={[{ value: "Material", name: "Material" }]}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-2">
        <div className={colClass}>
          <div className={table}>
            <Label value={item} classes={{ root: `${itemClass}` }} />
            <Label value={item2} classes={{ root: `${itemClass}` }} />
          </div>
        </div>
        <div className={colClass}>
          <div className={col2Inner}>
            <div className={list}>
              <Label value={col2Value1} classes={{ root: `${col2Class1}` }} />
              <GoPrimitiveDot className={iconClass} />
              <GoPrimitiveDot className={iconClass} />
            </div>
            <div className={list}>
              <Label value={col2Value2} classes={{ root: `${col2Class1}` }} />
            </div>
            <div className={list}>
              <Label value={col2Value3} classes={{ root: `${col2Class1}` }} />
              <Label value={col2Value4} classes={{ root: `${col2Class2}` }} />
              <Label value={col2Value5} classes={{ root: `${col2Class2}` }} />
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-4 lg:pl-6">
          <div className="space-y-2">
            <Label value="Capacity" classes={{ root: `${col2Class1}` }} />
            <Label
              value="Prototypes Small series Series"
              classes={{ root: `${col2Class2}` }}
            />
            <Label
              value="Prototypes Small series Series"
              classes={{ root: `${col2Class2}` }}
            />
          </div>
          <div className="space-y-2">
            <Label value="Tolerance" classes={{ root: `${col2Class1}` }} />
            <Label
              value="0.1 % with a 0.1 mm min."
              classes={{ root: `${col2Class2}` }}
            />
            <Label
              value="0.1 % with a 0.1 mm min."
              classes={{ root: `${col2Class2}` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
TabMachineProcessLower.defaultProps = {
  colClass: "",
  itemClass: "text-gray-300",
  table: "py-6 space-y-2",
  col2Inner: "lg:border-r md:px-5 md:border-l grid grid-cols-3 mt-5",
  col2Class1: "text-gray-300 text-left",
  list: "flex flex-col items-center space-y-2",
  iconClass: "text-current text-xl",
  col2Class2: "text-gray-300 text-sm leading-4",
};
export default TabMachineProcessLower;
