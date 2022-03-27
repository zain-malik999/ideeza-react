import React from "react";
import { AvatarLabels, TwoLabels } from "../index";
import { GoMail } from "react-icons/go";
export default function Working(props) {
  const {
    namevalue,
    jobvalue,
    comptitlevalue,
    compvalue,
    comptitleClass,
    compClass,
  } = props;
  return (
    <div className="flex items-center justify-between md:space-x-4 space-x-2 py-2">
      <AvatarLabels
        mainClasses="flex items-center"
        mainClassesLabel="pl-3"
        avaterClasses="md:h-12 h-10 md:w-12 w-10"
        titleClasses="md:text-lg text-base text-gray-300 font-sans tracking-tight"
        subtitleClasses="md:text-base text-md text-gray-810 font-thin tracking-tight font-sans -mt-1"
        src=""
        title={namevalue}
        subtitle={jobvalue}
      />
      <div className="flex items-center md:space-x-7 space-x-3 md:pr-4 pr-2">
        <TwoLabels
          mainClass="mt-2"
          value={comptitlevalue}
          value2={compvalue}
          labelClass={`${comptitleClass}`}
          labelClass2={`${compClass}`}
        />
        <GoMail className="text-ideeza-100 mr-1 md:text-2xl text-xl" />
      </div>
    </div>
  );
}
Working.defaultProps = {
  comptitleClass:
    "md:text-base text-md text-current font-sans tracking-tight text-right leading-5",
  compClass: "text-gray-870 tracking-tight text-right md:text-md text-sm",
};
