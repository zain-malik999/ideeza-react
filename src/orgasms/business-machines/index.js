import React from "react";
import { Label } from "atoms";
import { SelectField, TwoLabels, Icon_Label } from "molecules";
import { FiCheck } from "react-icons/fi";

function BusinessMachines({ value, value2, src, errors, control }) {
  return (
    <div className="rounded-lg bg-white shadow-md space-y-2 p-5 md:px-6 px-4 w-full">
      <SelectField
        isControlled={true}
        control={control}
        defaultValue="Test"
        error={errors}
        options={[
          { name: "Test", value: "Test" },
          { name: "a", value: "a" },
        ]}
        name="electronic"
        mainClasses="grid grid-cols-2 md:flex items-center border-b pb-2"
        className="w-full text-md text-gray-900 px-2 py-1"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-300 text-base font-sans tracking-tight md:w-2/4"
        value="Process"
        placeholder="3D Printing - Additive, CNC Machining - Subtractive"
      />
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-4 pt-2">
        <div className="flex flex-col items-start space-y-2 md:w-4/5">
          <Label
            value="3D Printing - Additive"
            className="bg-gray-275 w-full text-center rounded py-2 px-1 text-gray-600 tracking-tight"
          />
          <Icon_Label
            mainClass="flex flex-row-reverse itame-center justify-between w-full border border-gray-175 rounded py-2 px-2"
            tooltipProps={{ open: false }}
            iconComponent={<FiCheck className="text-green-400 text-lg" />}
            iconContanerClass=""
            lableClass={{
              root: "text-md tracking-tight text-gray-600 font-sans",
            }}
            labelValue="Process 2"
          />
          <Icon_Label
            mainClass="flex flex-row-reverse items-center justify-between w-full border border-gray-175 rounded py-2 px-2"
            tooltipProps={{ open: false }}
            iconComponent={
              <span className="text-red-800 font-semibold leading-3 text-lg">
                X
              </span>
            }
            iconContanerClass=""
            lableClass={{
              root: "text-md tracking-tight text-gray-600 font-sans",
            }}
            labelValue="Process 3"
          />
        </div>
        <div className="col-span-2 pt-4">
          <SelectField
            isControlled={true}
            control={control}
            defaultValue="Some"
            error={errors}
            name="cover"
            mainClasses="grid grid-cols-2 md:flex items-center border-b pb-2"
            className="w-full text-md text-gray-900 px-2 py-1"
            containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
            labelClasses="text-gray-600 font-semibold text-base font-sans md:w-2/4"
            value="Machine"
            placeholder="All selected"
          />
          <div className="col-span-2 grid grid-cols-2 gap-4 pt-3">
            <div>
              <img src={src} alt="" />
              <TwoLabels
                value={value}
                value2={value2}
                labelClass="text-md tracking-tight text-gray-300 font-sans leading-4 pt-2"
                labelClass2="text-sm tracking-tight text-gray-850 font-sans"
              />
            </div>
            <div>
              <img src={src} alt="" />
              <TwoLabels
                value={value}
                value2={value2}
                labelClass="text-md tracking-tight text-gray-300 font-sans leading-4 pt-2"
                labelClass2="text-sm tracking-tight text-gray-850 font-sans"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
BusinessMachines.defaultProps = {
  value: "Prototype",
  value2: "3D Systems",
  src: "/assets/images/printer.png",
};
export default BusinessMachines;
