import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";
import { AiOutlineArrowRight } from "react-icons/ai";

function ProjectHeader(props) {
  const { value } = props;
  return (
    <div className="flex items-center justify-between">
      <Label
        value={value}
        classes={{
          root:
            "text-current md:text-xl text-lg tracking-tight font-sans font-semibold",
        }}
      />
      <Icon_Label
        tooltipProps={{ open: false }}
        labelValue="See all"
        iconContanerClass="text-lg"
        mainClass="flex items-center flex-row-reverse"
        lableClass={{
          root: `text-gray-300 tracking-tight text-sm font-semibold mr-1 font-sans`,
        }}
        iconComponent={
          <AiOutlineArrowRight className="text-gray-300 text-base" />
        }
      />
    </div>
  );
}

export default ProjectHeader;
