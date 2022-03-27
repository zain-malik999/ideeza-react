import React, { useState } from "react";
import { Label } from "atoms";
import {
  HireBody,
  TermsBody,
  AdvanceOptionBody,
  WorkDescriptionBody,
  FaqBody,
} from "../..";
import { SelectField, Icon_Label } from "molecules";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Proptype from "prop-types";
function ConfirmationLeft(props) {
  const [show, setShow] = useState(true);
  const feqShow = () => {
    setShow(!show);
  };
  const {
    mainClass,
    title1,
    class1,
    src,
    value1,
    value2,
    value3,
    value4,
    value5,
    btnValue,
    class2,
    title2,
    title2left,
    placeholder,
    inputClass,
    options,
    class3,
    v1,
    v2,
    v3,
    v4,
    v5,
    v6,
    btn,
    icon,
    inputIcon,
    title3,
    va1,
    va2,
    title4,
    val1,
    val2,
    val3,
    btnVal1,
    btnVal2,
    btnVal3,
    btnVal4,
    checkboxVal,
    title5,
    valu1,
    valu2,
    valu3,
    valu4,
    valu5,
    valu6,
  } = props;
  return (
    <div className={mainClass}>
      <Label value="Hire" classes={{ root: `${class1}` }} />
      <div className="mt-2 h-screen overflow-y-auto mr-3 mb-4">
        <HireBody
          src={src}
          value1="Artem Lumiov"
          value2="Related Job Listing"
          value3="are you Vue.js exper??"
          btnValue="(#1200012)"
          value4="Contract Tilte"
          value5="are you Vue,Js exper?"
        />
        <div className="flex justify-between items-center border-b border-solid border-gray-160 p-4">
          <Label value="Terms" classes={{ root: `${class2}` }} />
          <div className="flex items-center">
            <SelectField
              value="Switch to :"
              options={[
                {
                  name: "Fixed-price",
                  value: "Fixed-price",
                },
                {
                  name: "Hourly",
                  value: "Hourly",
                },
              ]}
              labelClasses={`pr-1 ${class3}`}
              className={inputClass}
              placeholder={placeholder}
            />
          </div>
        </div>
        <TermsBody
          value1={v1}
          value2={v2}
          value3={v3}
          value4={v4}
          radio1={v5}
          radio2={v6}
          btnValue={btn}
          icon={icon}
          inputIcon={inputIcon}
        />
        <Label value="Advance Option" classes={{ root: `${class1}` }} />
        <AdvanceOptionBody
          value1={va1}
          value2={va2}
          inputIcon={inputIcon}
          icon={icon}
        />
        <Label value="Work Description" classes={{ root: `${class1}` }} />
        <WorkDescriptionBody
          value1={val1}
          value2={val2}
          value3={val3}
          btnValue1={btnVal1}
          btnValue2={btnVal2}
          btnValue3={btnVal3}
          btnValue4={btnVal4}
          checkboxValue={checkboxVal}
        />
        <Icon_Label
          mainClass="flex flex-row-reverse justify-between items-center pt-4 md:p-5 p-3 border-b border-gray-160"
          tooltipProps={{ open: false }}
          labelValue="Frequently Asked Questions"
          iconContanerClass="text-lg w-6"
          lableClass={{
            root: `md:text-2xl text-xl font-sans tracking-tight text-current font-semibold`,
          }}
          iconComponent={
            show === true ? (
              <IoIosArrowUp
                className="text-3xl text-ideeza-100 ml-3 cursor-pointer"
                onClick={feqShow}
              />
            ) : (
              <IoIosArrowDown
                className="text-3xl text-ideeza-100 ml-3 cursor-pointer"
                onClick={feqShow}
              />
            )
          }
        />
        {show === true ? (
          <FaqBody
            value1="How do hourly contracswork?"
            value2="Before work begings, agree on certain hourly rate weekly limit (if appropriate with freelancer. The Work Diary captures snapshots of your freelancer's screnn every 10 minutes, helping to verify that work has been completed as invoiced. You can review these screenshots before you pay your freelancer."
            value3="When will I be charged?"
            value4="Every Monday you'll be invoiced for the previous week's hours based on your freelancer's work Diaries. Your default billing method is charged automatically for the balance due. If there's an issue, you have until Friday to file a dispute."
            value5="What is ther's a problem?"
            value6="Eligilee contracts are protected by Ideeza Payment Protection which assures that you pay only for the work you've approved if ever an issue should arise, your payment protection and dispute resolution programs will help fix the situation."
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
ConfirmationLeft.defaultProps = {
  mainClass: "shadow rounded col-span-8 border p-0",
  class1:
    "border-b border-solid border-gray-160 pt-4 md:p-5 p-3 md:text-2xl text-xl font-sans tracking-tight text-current font-semibold",
  class2: "text-2xl font-sans tracking-tight text-current font-semibold",
  class3:
    "whitespace-nowrap text-black-100 text-lg font-sans tracking-tight font-semibold",
  inputClass:
    "text-current text-right tracking-tight text-lg px-0 py-0 pr-7 w-22",
};
ConfirmationLeft.prototype = {
  options: Proptype.array,
};
export default ConfirmationLeft;
