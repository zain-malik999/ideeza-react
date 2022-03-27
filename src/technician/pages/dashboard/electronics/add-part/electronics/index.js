import React, { useState } from "react";
import {
  AddCartStepper,
  ElectronicsHeader,
  AddNewChart,
  AddLegMeaning,
} from "orgasms";
import { Label, Button } from "atoms";
import { TabsMolecule } from "molecules";

function ElectronicsComponent() {
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
        <AddCartStepper currentStep={2} />
      </div>
      <div className="lg:px-16 pt-4">
        <ElectronicsHeader
          circleClass="rounded-full bg-gray-150 p-2 h-11 w-11"
          btnClass1="hidden"
          btnClass2="hidden"
          btnValue3="2D Preview"
          btnValue4="3D Preview"
          btnValue5="Datasheet"
        />
        <div className="pt-5">
          <Label
            value="Add Electronics Configuration"
            className="text-current font-semibold font-sans text-lg tracking-tight border-b border-gray-750 pb-2"
          />

          {show === true ? (
            <TabsMolecule
              index={index}
              handleChange={handleChange}
              tabsClasses="mb-3 gap-3 -mx-1 pt-2"
              tabClasses="bg-white rounded-none text-md mx-1 border border-solid border-gray-325 font-sans tracking-tight focus:text-current focus:bg-gray-150 focus:font-semibold transition-all duration-500 ease-in-out transform-none text-gray-300"
              tabsData={[
                {
                  name: "Leg Meaning",
                  component: (
                    <div className="w-full grid md:grid-cols-3 grid-cols-1 items-start md:gap-x-2 gap-y-2 md:gap-y-0">
                      <div className="bg-white w-full pt-4 md:col-span-2 rounded-lg shadow-full overflow-hidden">
                        <AddLegMeaning
                          value2="Name"
                          value3="Number"
                          options={[
                            { value: "mA", name: "mA" },
                            { value: "Property", name: "Property" },
                          ]}
                        />
                        <Button
                          value="+ Add new leg meaning"
                          className="bg-gray-375 w-full transform-none py-3 rounded-none text-md text-current tracking-tight font-sans"
                        />
                      </div>
                      <div className="bg-white border w-full p-2 py-10">
                        <img
                          src="/assets/images/-e-bar-chart2.png"
                          className="mx-auto"
                          alt=""
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  name: "Chart",
                  component: (
                    <div className="w-full grid md:grid-cols-2 items-start md:gap-x-2 gap-y-2 md:gap-y-0">
                      <AddNewChart />
                      <div className="bg-white border w-full p-2 py-10">
                        <img
                          src="/assets/images/-e-bar-chart2.png"
                          className="mx-auto"
                          alt=""
                        />
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          ) : (
            <>
              <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-between gap-3 pt-2">
                <div
                  className={`bg-white w-full rounded-lg shadow-full p-5 h-72 flex flex-col items-center justify-center space-y-10 py-10`}
                >
                  <img
                    src="/assets/images/-e-chip copy.png"
                    alt=""
                    className="w-22"
                  />
                  <Button
                    value="Leg Meaning"
                    onClick={toggeShow}
                    className="bg-gray-375 border border-solid border-gray-325 w-60 leading-tight transform-none rounded-full text-gray-600 text-sm font-sans tracking-tight"
                  />
                </div>
                <div
                  className={`bg-white w-full rounded-lg shadow-full p-5 h-72 flex flex-col items-center justify-center space-y-10 py-10`}
                >
                  <img
                    src="/assets/images/-e-bar-chart2.png"
                    alt=""
                    className="w-22"
                  />
                  <Button
                    value="Chart"
                    onClick={toggeShow}
                    className="bg-gray-375 border border-solid border-gray-325 w-60 leading-tight transform-none rounded-full text-gray-600 text-sm font-sans tracking-tight"
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-between items-center w-full pt-7">
          <Button
            value="Back"
            onClick={toggeShow}
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
export default ElectronicsComponent;
