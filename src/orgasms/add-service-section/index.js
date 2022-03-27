import React, { useState } from "react";
import { Button, Label } from "atoms";
import { AvatarLabels, Icon_Label, TwoLabels } from "molecules";
import { GoStar } from "react-icons/go";
import { ProceedPopup } from "..";
function AddServiceSection(props) {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <div className="flex items-start space-x-5">
      <AvatarLabels
        src=""
        mainClasses="flex flex-col items-center"
        avaterClasses="w-10 h-10"
        subtitle={
          <>
            <Icon_Label
              mainClass="flex items-center pt-1"
              tooltipProps={{ open: false }}
              labelValue="(5.0)"
              iconContanerClass="text-lg"
              lableClass={{
                root: `text-gray-300 tracking-tight text-sm pl-1 font-sans`,
              }}
              iconComponent={
                <GoStar className="text-yellow-600 text-md -ml-2" />
              }
            />
          </>
        }
      />
      <div className="space-y-3">
        <div className="md:flex items-center justify-between w-full space-x-2">
          <div className="flex items-center space-x-2">
            <TwoLabels
              mainClass="flex flex-col"
              value="John Doe"
              value2="Frizty Studio LTD"
              labelClass="text-gray-300 text-md tracking-tight font-sans"
              labelClass2="text-current text-sm tracking-tight font-sans leading-4"
            />
            <Button
              value="Select"
              classes={{
                root: `bg-current text-white rounded px-5 leading-4 whitespace-nowrap tracking-tight transform-none text-sm font-sans`,
              }}
            />
            <Label
              value="Available"
              className="text-current font-sans tracking-tight pl-2"
            />
          </div>
          <div className="flex items-center justify-end space-x-2">
            <Label
              value="33.00 /hr"
              className="text-gray-900 font-bold font-sans tracking-tight"
            />
            <Button
              value="6 days"
              classes={{
                root: `bg-white ml-auto border border-solid border-gray-770 border-opacity-50 text-gray-300 px-2 transform-none md:text-sm text-xs tracking-tight leading-4 font-sans`,
              }}
            />
            <Button
              value="$220"
              classes={{
                root: `bg-white ml-auto border border-solid border-gray-770 border-opacity-50 text-gray-300 px-2 transform-none md:text-sm text-xs tracking-tight leading-4 font-sans`,
              }}
            />
            <Button
              value="Request Quote"
              classes={{
                root: `bg-white ml-auto border border-solid border-gray-770 border-opacity-50 text-gray-300 px-2 transform-none md:text-sm text-xs tracking-tight leading-4 font-sans`,
              }}
            />
            <Button
              onClick={toggleOpen}
              value="Request Quote"
              classes={{
                root: `bg-green-300 ml-auto border border-solid border-green-300 text-white px-2 transform-none md:text-sm text-xs tracking-tight leading-4 font-sans`,
              }}
            />
          </div>
        </div>
        <Label
          value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus"
          className="text-gray-880 text-md font-sans tracking-tight"
        />
        <Button
          value="Patent"
          classes={{
            root: `bg-gray-300 text-white px-6 transform-none md:text-sm text-xs tracking-tight leading-4 font-sans`,
          }}
        />
      </div>
      <ProceedPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default AddServiceSection;
