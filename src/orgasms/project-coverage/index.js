import React from "react";
import { Label, Button } from "atoms";
import { EditableInput, TwoLabels } from "molecules";
import { BsPencil } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";
import moment from "moment";
function ProjectCoverage(props) {
  const { btnValue, btn, dropdown, open3D, project } = props;
  return (
    <div>
      <div className="flex justify-between flex-wrap items-center border-b-2 mt-3 border-current pb-2">
        <EditableInput
          mainClass="flex flex-row-reverse items-center"
          editContanerClass="flex tems-end justify-center"
          edit={false}
          editComponent={
            <Button
              value="Edit"
              classes={{
                root:
                  "text-sm tracking-tight capitalize font-sans p-1 px-0 text-gray-300",
              }}
              iconEnd={<BsPencil className="text-sm" />}
            />
          }
          lableClass={{
            root: "text-ideeza-100 text-2xl tracking-tight font-sans font-bold",
          }}
          inputClasses={{ root: "mr-2" }}
          handleChange={() => {}}
          labelValue={`Project: ${project?.title}`}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-0 md:flex justify-between w-full md:w-auto md:space-x-2 pt-2 md:pt-0">
          <Button
            value={btnValue}
            onClick={open3D}
            classes={{
              root: `bg-ideeza-100 text-white border border-solid border-current py-2 text-md tracking-tight font-sans rounded capitalize px-8`,
            }}
          />
          {btn}
          <Button
            value="Back"
            classes={{
              root:
                "bg-gray-980 text-md text-white transform-none font-medium tracking-tight font-sans px-6 py-2 rounded",
            }}
            iconStart={<FaArrowCircleLeft className="text-lg" />}
          />
          {dropdown}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-18 md:gap-x-5 gap-y-1 md:gap-y-0 pt-1">
        <div className="col-span-2">
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
            <TwoLabels
              mainClass="flex items-center space-x-2 w-32"
              value="Status:"
              value2={project?.status}
              labelClass="text-gray-300 text-base tracking-tight font-sans"
              labelClass2="text-current text-base tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="flex items-center space-x-1"
              value="Shipping address:"
              value2="India, Lorem Ipsum is simply dummy text of the printing and 23"
              labelClass="text-gray-300 text-base tracking-tight font-sans font-semibold"
              labelClass2="text-gray-300 text-base tracking-tight font-sans"
            />
          </div>
          <TwoLabels
            mainClass="flex items-center space-x-2"
            value="Price:"
            value2={project?.price}
            labelClass="text-gray-300 text-base tracking-tight font-sans"
            labelClass2="text-current text-base tracking-tight font-sans pl-2"
          />
        </div>
        <div className="flex justify-between items-start">
          <TwoLabels
            mainClass="flex items-center space-x-2"
            value="Project Duration:"
            value2={`${moment(project?.start_date).format("DD MMM, YYYY")} -
              ${moment(project?.end_date).format("DD MMM, YYYY")}`}
            labelClass="text-gray-300 text-lg tracking-tight font-sans"
            labelClass2="text-current text-base tracking-tight font-sans pl-2"
          />
          <img
            src="/assets/images/calendar-black.png"
            className="w-6 h-6"
            alt="c"
          />
        </div>
      </div>
    </div>
  );
}
ProjectCoverage.defaultProps = {
  btnValue: "Invoice",
};
export default ProjectCoverage;
