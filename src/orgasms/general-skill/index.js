import React, { useState, useEffect } from "react";
import { Input, Label, Select } from "atoms";
import { Icon_Label } from "molecules";
import { FaChevronDown } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

function GeneralSkill() {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState(null);
  const [experience, setExperience] = useState("");
  const addSkills = (val) => {
    let Skill = skills;
    Skill.push({
      skill,
      experience,
    });
    setSkills(null);
    setExperience(null);
    return setSkills((val) => [...Skill]);
  };
  const handleSkill = (val) => {
    return setSkill(val?.target?.value);
  };
  const handleExperience = (e) => {
    return setExperience(e?.target?.value);
  };
  useEffect(() => {}, [skills]);
  return (
    <div className="w-auto px-5 py-4">
      <Icon_Label
        labelValue={
          <>
            <span>Skills</span>
            <span>Experience</span>{" "}
          </>
        }
        mainClass="flex items-start flex-row-reverse justify-between"
        iconContanerClass="text-2xl text-gray-800"
        lableClass={{
          root:
            "uppercase tracking-normal text-gray-300 font-semibold text-base flex justify-between w-full border-b border-gray-200 pb-2 mb-3",
        }}
        tooltipProps={{ open: false }}
        iconComponent={
          <>
            <FaChevronDown className="text-ideeza-100 text-2xl ml-8 cursor-pointer" />
          </>
        }
      />
      <div className="flex justify-between">
        <div className="flex items-center">
          <IoIosCheckmarkCircle
            onClick={addSkills}
            className="text-ideeza-100 text-2xl -ml-1"
          />
          <Input
            value={skill}
            change={handleSkill}
            placeholder="Enter  Skill"
            containerClass="w-36"
            inputProps="w-full p-1 py-2 w-14 -ml-4 bg-gray-150 text-base tracking-tight font-sans border border-solid border-gray-850 border-opacity-50"
          />
        </div>
        <Select
          change={handleExperience}
          placeholder="Experience"
          containerClass="h-8 w-36 text-gray-600"
          inputClass="text-sm tracking-tight p-1 px-2"
          options={[{ name: "1 Year", value: "1" }]}
        />
      </div>
      <div className="flex flex-col  w-full">
        {skills?.map((v) => {
          return (
            <>
              <div className="w-full flex justify-between items-center">
                <Icon_Label
                  labelValue={v?.skill}
                  mainClass="flex items-center space-x-2"
                  iconContanerClass="text-2xl text-gray-800"
                  lableClass={{
                    root: "tracking-tight text-gray-300 text-md underline",
                  }}
                  tooltipProps={{ open: false }}
                />
                <Label
                  value={`- ${v.experience} year experience`}
                  classes={{
                    root: "text-gray-900 text-base font-sans tracking-normal",
                  }}
                />
              </div>
            </>
          );
        })}
      </div>
      <Label
        value="+ Add More"
        classes={{
          root:
            "text-current underline text-base font-sans tracking-tight cursor-pointer pt-2",
        }}
      />
    </div>
  );
}

export default GeneralSkill;
