import React, { useState } from "react";
import {
  AddCartStepper,
  ElectronicsHeader,
  AddPartCard,
  ConfigureDimension,
} from "orgasms";
import { Label, Button } from "atoms";
import { TabsMolecule } from "molecules";

function ConfigureComponent() {
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
        <AddCartStepper currentStep={1} />
      </div>
      {show === true ? (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 border-t md:pt-10 pt-6">
          <ConfigureDimension />
          <div>
            <TabsMolecule
              index={index}
              selected="-mx-4 z-100"
              handleChange={handleChange}
              tabsClasses="md:w-125 w-3/5 ml-auto rounded-full border mb-3"
              tabClasses="bg-white rounded-full py-0 -mx-4 text-sm font-sans tracking-tight news-tabs focus:text-white focus:bg-secondary focus:font-semibold transition-all duration-500 ease-in-out transform-none text-gray-300"
              tabsData={[
                {
                  name: "2D Preview",
                  component: (
                    <div className="bg-gray-200 h-96 flex items-center justify-center">
                      Engine2
                    </div>
                  ),
                },
                {
                  name: "3D Preview",
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
      ) : (
        <div className="lg:px-24 pt-4">
          <ElectronicsHeader
            circleClass="rounded-full bg-gray-150 p-2 h-11 w-11"
            btnClass1="hidden"
            btnClass2="hidden"
            btnClass3="hidden"
            btnClass4="hidden"
            btnValue5="Datasheet"
          />
          <div className="md:flex items-center justify-between md:space-x-3 pt-5">
            <AddPartCard
              value="Upload 2D & 3D Files"
              src="/assets/images/cloud-computing.png"
              value2="Drag and drop Files Here to Upload"
              middleValue="or"
              btnValue="Select Files"
            />
            <Label
              value="or"
              className="text-center px-2 text-gray-900 text-md pt-6"
            />
            <AddPartCard
              value="Create New Model"
              src="/assets/images/processor.png"
              value2="Create New Model from Scratch"
              middleValue="and be creative"
              btnValue="Create Model"
            />
          </div>
          <div className="flex justify-between items-center w-full pt-7">
            <Button
              value="Back"
              className="bg-gray-375 border-opacity-50 border border-solid border-gray-325 w-28 transform-none text-gray-600 text-sm font-sans tracking-tight"
            />
            <Button
              value="Next"
              onClick={toggeShow}
              className="bg-current w-28 transform-none text-white text-sm font-sans tracking-tight"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default ConfigureComponent;
