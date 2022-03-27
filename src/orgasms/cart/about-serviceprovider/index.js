import React from "react";
import { AvatarLabels } from "molecules";
import { Button, Label } from "atoms";
import { AiFillStar } from "react-icons/ai";
export default function AboutServiceprovider() {
  return (
    <>
      <div className="flex">
        <AvatarLabels
          mainClassesLabel="pl-10"
          title="John Doe"
          titleClasses="text-2xl"
          subtitle="Frizty studio LTD"
          subtitleClasses="text-ideeza-100"
        />
        <Button
          value="Select"
          className="bg-ideeza-100 text-white font-normal ml-3 px-6 my-8 rounded-md capitalize"
        />
        <Button
          value="Available"
          className="text-ideeza-100 font-normal  px-3 my-8 rounded-md capitalize"
        />
      </div>
      <div className="flex pt-4 items-start">
        <div className="flex items-center ">
          <AiFillStar className="text-yellow-400" size="18" />
          <Label value="(5.0)" className="text-lg ml-2" />
        </div>
        <Label
          value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
          className="text-lg ml-10"
        />
      </div>
      <Button
        value="Patent"
        className="bg-gray-550 text-white font-normal px-6 my-6 rounded-md capitalize ml-24 mt-12"
      />
    </>
  );
}
