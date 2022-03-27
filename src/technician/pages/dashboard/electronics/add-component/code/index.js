import React, { useState } from "react";
import { AddComponentStepper, EditSqnBlock } from "orgasms";
import { Label, Button } from "atoms";
import { TabsMolecule, SearchInput, TextField } from "molecules";

function CodeComponent() {
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const [show, setShow] = useState(false);
  const toggeShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="flex justify-center">
        <AddComponentStepper currentStep={2} />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-6">
        <EditSqnBlock />
        <div>
          <TabsMolecule
            index={index}
            selected="-mx-4 z-100"
            handleChange={handleChange}
            tabsClasses="md:w-125 w-3/5 ml-auto rounded-full border mb-3"
            tabClasses="bg-white rounded-full py-0 -mx-4 text-sm font-sans tracking-tight news-tabs focus:text-white focus:bg-secondary focus:font-semibold transition-all duration-500 ease-in-out transform-none text-gray-300"
            tabsData={[
              {
                name: "Code Preview",
                component: (
                  <div className="bg-gray-200 h-96 flex items-center justify-center">
                    Engine2
                  </div>
                ),
              },
              {
                name: "2D Preview",
                component: (
                  <div className="bg-gray-200 h-96 flex items-center justify-center">
                    Engine3
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="lg:px-16 pt-4">
        <div className="flex justify-end pb-2">
          <Button
            value="Edit existing component"
            className="bg-current px-2 transform-none text-white text-sm font-sans tracking-tight"
          />
        </div>
        <div className="bg-white shadow-full">
          <SearchInput
            placeholder="Add more components"
            className="bg-white flex flex-row-reverse border border-gray-750"
            inputClass="text-sm py-4 px-1 text-gray-600"
            iconClass="text-gray-900 ml-2"
          />
          <TextField
            mainClass="flex items-center space-x-2 pt-6 pb-2 px-4"
            inputClasses="bg-white md:w-56 h-8 font-lato px-2 py-0 border border-gray-625 rounded-none"
            inputProps="text-gray-300 text-xs"
            labelClasses="text-black-100 whitespace-nowrap text-sm font-sans tracking-tight"
            labelvalue="File Name:"
            placeholder="ex.filename.js"
          />
          <div className="p-4">
            <div className="bg-gray-200 h-96 rounded-lg w-full"></div>
          </div>
        </div>
        <TextField
          mainClass="flex flex-col space-y-2 pt-8"
          inputClasses="text-gray-300 bg-white text-sm font-lato px-2 py-0 border rounded-none"
          labelClasses="text-black-100 text-md font-semibold font-sans tracking-tight"
          labelvalue="Description:"
          placeholder="Type the description here..."
          multiline={true}
          rows={7}
        />
        <div className="flex justify-end pt-8">
          <Button
            value="Save"
            className="bg-current px-2 transform-none w-28 text-white text-sm font-sans tracking-tight"
          />
        </div>
        <Label
          value="Choice on code"
          className="text-current font-semibold font-sans text-lg tracking-tight"
        />
        <div className="bg-white border h-96 flex items-center justify-center relative">
          <Button
            value="Add code"
            className="bg-current w-32 transform-none text-white text-sm font-sans tracking-tight"
          />
          <div className="absolute bottom-0 left-0 flex justify-between items-center w-full p-4">
            <Button
              value="Back"
              className="bg-gray-375 border-opacity-50 border border-solid border-gray-325 md:w-32 w-28 transform-none text-gray-600 text-sm font-sans tracking-tight"
            />
            <Button
              value="Continue without adding code"
              className="bg-current md:px-2 transform-none text-white text-sm font-sans tracking-tight"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full pt-7">
          <Button
            value="Back"
            className="bg-gray-375 border-opacity-50 border border-solid border-gray-325 w-28 transform-none text-gray-600 text-sm font-sans tracking-tight"
          />
          <Button
            value="Next"
            className="bg-current w-28 transform-none text-white text-sm font-sans tracking-tight"
          />
        </div>
      </div>
    </>
  );
}
export default CodeComponent;
