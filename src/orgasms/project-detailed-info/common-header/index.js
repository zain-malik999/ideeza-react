import React from "react";
import Proptype from "prop-types";
import { Button, Label, Badges } from "atoms";
import { Icon_Label } from "molecules";
function CommonHeader(props) {
  const { type } = props;
  return (
    <div className="grid md:grid-cols-2 items-start gap-x-3 xl:px-8 md:px-6 px-4 md:pt-6 pt-4">
      <div className="flex items-center space-x-3">
        <Badges
          src="/assets/images/man.png"
          imgClass="lg:h-36 h-32 lg:w-30 w-26"
        />
        <div className="">
          <div className="flex items-center space-x-2">
            <Label
              value="Thomas Helies"
              classes={{
                root:
                  "text-xl md:text-3xl font-medium text-gray-300 font-sans tracking-tighter",
              }}
            />
            <Button
              value="Rockie"
              classes={{
                root:
                  "capitalize px-4 py-1 mt-1 text-xs tracking-tight font-sans bg-ideeza-100 text-white",
              }}
            />
          </div>
          <Label
            value="United Kingdoms 11:00 AM"
            classes={{
              root: "text-sm md:text-md font-sans tracking-tight text-gray-600",
            }}
          />
          <div className="flex items-center">
            <Icon_Label
              tooltipProps={{ open: false }}
              labelValue="4.9"
              iconContanerClass="text-lg"
              lableClass={{
                root: `text-blue-250 tracking-tight text-5xl ml-2`,
              }}
              iconComponent={
                <img
                  src="/assets/images/score-icon.png"
                  className="w-6 h-6 mt-2"
                  alt="soems"
                />
              }
            />
            <Label
              value="My score"
              classes={{
                root: "text-md text-blue-100 font-sans mt-2 tracking-tight",
              }}
            />
          </div>
        </div>
      </div>
      {type === "hourly" ? (
        <div className="flex items-center justify-end mt-3 space-x-2 w-full lg:w-auto">
          <Label
            value="Completed Jan 23, 2019"
            classes={{ root: "text-sm tracking-tight text-gray-600" }}
          />
          <Button
            value="Rehire"
            classes={{
              root:
                "bg-ideeza-100 transform-none text-base font-sans rounded px-5 font-light tracking-tight py-1 text-white",
            }}
          />
        </div>
      ) : (
        <></>
      )}
      {type === "milestone" ? (
        <div className="flex items-center justify-end mt-3 space-x-2 w-full lg:w-auto">
          <Button
            value="Active Next Milestone"
            classes={{
              root:
                "bg-ideeza-100 transform-none md:text-md font-sans rounded md:px-3 px-3 font-light tracking-tight py-2 text-white",
            }}
          />
          <Button
            value="Give Bonus"
            classes={{
              root:
                "bg-white transform-none md:text-md font-sans rounded text-gray-300 md:px-6 px-3 font-light tracking-tight py-2 text-gray-300 border border-solid border-gray-160",
            }}
          />
          <Button
            value="End Contact"
            classes={{
              root:
                "bg-white transform-none md:text-md font-sans rounded text-gray-300 md:px-6 px-3 font-light tracking-tight py-2 text-gray-300 border border-solid border-gray-160",
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
CommonHeader.prototype = {
  type: Proptype.oneOf[("hourly", "milestone")],
};
export default CommonHeader;
