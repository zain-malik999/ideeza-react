import React, { useState } from "react";
import {
  AddCartStepper,
  ElectronicsHeader,
  AddDetailPart,
  AddPricing,
  Confirmation,
} from "orgasms";
import { TwoLabels } from "molecules";
import { Label, Button } from "atoms";

function GeneralComponent() {
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
        <AddCartStepper currentStep={3} />
      </div>
      <div className="lg:px-16 pt-4">
        <div className="border bg-white rounded overflow-hidden">
          <ElectronicsHeader
            mainClass="flex flex-wrap gap-2 md:px-3 p-3 md:py-4 bg-white md:items-center w-full justify-between"
            value2=""
            btnValue1="Leg"
            btnValue2="Chart"
            btnValue3="2D Preview"
            btnValue4="3D Preview"
            btnValue5="Datasheet"
          />
          <div className="pt-5 px-5 grid md:grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <Label
                value="Details of the Part"
                className="text-current font-semibold font-sans text-lg tracking-tight border-b border-gray-750 pb-1 mb-5"
              />
              <TwoLabels
                mainClass="grid grid-cols-3 items-center pb-2 border-b"
                value="Name"
                value2="ATMEGA32M1-AU"
                labelClass="text-gray-300 flex items-center text-sm font-sans tracking-tight"
                labelClass2="text-gray-900 col-span-2 text-sm tracking-tight font-sans leading-4"
              />
              <TwoLabels
                mainClass="grid grid-cols-3 items-center pb-2 border-b"
                value="Category"
                value2="ATMEGA32M1-AU"
                labelClass="text-gray-300 flex items-center text-sm font-sans tracking-tight"
                labelClass2="text-gray-900 col-span-2 text-sm tracking-tight font-sans leading-4"
              />
              <TwoLabels
                mainClass="grid grid-cols-3 items-start pb-2"
                value="Description"
                value2="ATMEGA32M1-AU ATMEGA32M1 ATMEGA32M1 ATMEGA32M1"
                labelClass="text-gray-300 flex items-center text-sm font-sans tracking-tight"
                labelClass2="text-gray-900 text-sm tracking-tight font-sans leading-4"
              />
            </div>
            <div className="space-y-2.5 pb-2">
              <Label
                value="Pricing"
                className="text-current font-semibold font-sans text-lg tracking-tight border-b border-gray-750 pb-1 mb-5"
              />
              <div className="grid grid-cols-2 gap-4 pb-2 border-b">
                <TwoLabels
                  mainClass="grid md:grid-cols-3 grid-cols-2 items-center"
                  value="Quantity"
                  value2="1"
                  labelClass="text-gray-300 flex items-center text-sm font-sans tracking-tight"
                  labelClass2="text-gray-900 md:col-span-2 text-sm tracking-tight font-sans leading-4"
                />
                <TwoLabels
                  mainClass="grid md:grid-cols-3 grid-cols-2 items-center"
                  value="Price"
                  value2="30$"
                  labelClass="text-gray-900 flex items-center text-sm font-sans tracking-tight"
                  labelClass2="text-gray-300 md:col-span-2 text-sm tracking-tight font-sans leading-4"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 pb-2 border-b">
                <TwoLabels
                  mainClass="grid md:grid-cols-3 grid-cols-2 items-center"
                  value="Quantity"
                  value2="1"
                  labelClass="text-gray-300 flex items-center text-sm font-sans tracking-tight"
                  labelClass2="text-gray-900 md:col-span-2 text-sm tracking-tight font-sans leading-4"
                />
                <TwoLabels
                  mainClass="grid md:grid-cols-3 grid-cols-2 items-center"
                  value="Price"
                  value2="30$"
                  labelClass="text-gray-900 flex items-center text-sm font-sans tracking-tight"
                  labelClass2="text-gray-300 md:col-span-2 text-sm tracking-tight font-sans leading-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-16 pt-4">
        <ElectronicsHeader
          circleClass="rounded-full bg-gray-150 p-2 h-11 w-11"
          value2=""
          btnValue1="Leg"
          btnValue2="Chart"
          btnValue3="2D Preview"
          btnValue4="3D Preview"
          btnValue5="Datasheet"
        />
        <div className="pt-5 grid md:grid-cols-2 gap-6">
          <div>
            <Label
              value="Add Details of the Part"
              className="text-current font-semibold font-sans text-lg tracking-tight border-b border-gray-750 pb-2 mb-2"
            />
            <AddDetailPart />
          </div>
          <div>
            <Label
              value="Pricing"
              className="text-gray-300 font-sans text-lg tracking-tight border-b border-gray-750 pb-2"
            />
            <AddPricing />
          </div>
        </div>
        <div className="flex justify-between items-center w-full pt-32">
          <Button
            value="Back"
            className="bg-gray-375 border-opacity-50 border border-solid border-gray-325 w-28 transform-none text-gray-600 text-sm font-sans tracking-tight"
          />
          <Button
            value="Next"
            className="bg-current w-28 transform-none text-white text-sm font-sans tracking-tight"
          />
        </div>
        <Confirmation
          iconEnd=""
          src="/assets/images/success-add.png"
          value="Your part is added."
          lableClass="text-gray-300 font-sans text-2xl tracking-normal"
          lableClass2="text-gray-300 font-sans text-2xl tracking-normal"
          btnValue="+Add new part"
          btnClass="bg-current rounded-full px-16 mt-3 py-1 text-sm font-sans tracking-tight transform-none text-white"
        />
      </div>
    </>
  );
}
export default GeneralComponent;
