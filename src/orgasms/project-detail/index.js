import React, { useState } from "react";
import { Button } from "atoms";
import { EditableInput, AvatarLabels } from "molecules";
import { FaArrowCircleLeft } from "react-icons/fa";
import { PricingPopup } from "..";
import { RiPencilFill } from "react-icons/ri";
export default function ProjectDetail(props) {
  const { detail } = props;
  const [popup, SetPopup] = useState(false);

  const toggleOpen = () => SetPopup(!popup);
  return (
    <>
      <div className="flex justify-between">
        <Button
          value="Go back"
          classes={{
            root:
              "bg-ideeza-100 text-md text-white transform-none font-medium tracking-tight font-sans px-5 py-2 rounded",
          }}
          iconStart={<FaArrowCircleLeft className="text-lg" />}
        />
        <Button
          onClick={toggleOpen}
          value="Turn it to private"
          variant="outlined"
          classes={{
            root:
              "text-md text-gray-600 font-normal py-2 tracking-tight transform-none",
            outlined: "border-gray-600",
          }}
        />
      </div>
      <div className="flex justify-start mt-8">
        <EditableInput
          mainClass="flex items-center flex-row-reverse "
          editContanerClass="bg-gray-100 flex items-center justify-center text-2xl rounded-full w-8 h-8"
          edit={false}
          editComponent={<RiPencilFill />}
          lableClass={{
            root:
              "text-ideeza-100 tracking-tight font-sans text-2xl font-bold mr-1",
          }}
          inputClasses={{ root: "mr-2" }}
          handleChange={() => {}}
          labelValue={detail?.title}
        />
      </div>
      <AvatarLabels
        mainClassesLabel="pl-3"
        avaterClasses="h-12 w-12 shadow-md"
        titleClasses="text-lg text-gray-300 font-sans tracking-normal leading-6 font-semibold"
        subtitleClasses="text-sm text-gray-810 font-thin tracking-tight font-sans"
        src=""
        title={detail?.user?.first_name + " " + detail?.user?.last_name}
        subtitle={detail?.user?.work}
      />
      <PricingPopup open={popup} toggleOpen={toggleOpen} />
    </>
  );
}
ProjectDetail.defaultProps = {
  ProjectName: "Lamborgini toy car",
};
