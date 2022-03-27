import React from "react";
import { Label, Button } from "atoms";
import { Icon_Label } from "molecules";
import { GoCheck } from "react-icons/go";
import { TiPlus } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
function Pricing(props) {
  const {
    mainClass,
    mainLogo,
    labelClass,
    value1Class,
    value2Class,
    src,
    ImgClass,
    ticks,
    labelTick,
    plusLabel,
    labelPrivate,
    consultClass,
    value7Class,
    value7IconClass,
    btnGroupClass,
    addContainer,
    listContainer,
    value,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    heading,
    consult,
    lastBtnClass,
  } = props;

  return (
    <div
      className={`flex h-full w-full flex-col justify-between mt-10 rounded-lg relative ${mainClass}`}
    >
      <Icon_Label
        tooltipProps={{ open: false }}
        labelValue={value}
        mainClass={heading}
        iconContanerClass="text-lg"
        lableClass={{
          root: `uppercase tracking-tight text-base font-sans ${labelClass}`,
        }}
        iconComponent={
          <img
            src="/assets/images/Group-47.png"
            alt="logo"
            className={mainLogo}
          />
        }
      />
      <div className="px-3">
        <div className="flex justify-center text-center space-x-8 pt-10">
          <img src={src} className={ImgClass} alt="logo" />
          <div className="flex flex-col items-start">
            <Label value={value1} classes={{ root: `${value1Class}` }} />
            <Label value={value2} classes={{ root: `${value2Class}` }} />
            <hr className="border-t-2 w-14 mt-2 border-ideeza-100" />
          </div>
        </div>
        <div className={`pl-3 mt-4 p-3 ${listContainer}`}>
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={value3}
            iconContanerClass="text-lg"
            lableClass={{ root: `tracking-tight font-sans ${labelTick}` }}
            iconComponent={<GoCheck className={ticks} />}
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={value4}
            iconContanerClass="text-lg"
            lableClass={{ root: `tracking-tight font-sans ${labelTick}` }}
            iconComponent={<GoCheck className={ticks} />}
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={value5}
            iconContanerClass="text-lg"
            lableClass={{ root: `tracking-tight font-sans ${labelTick}` }}
            iconComponent={<GoCheck className={ticks} />}
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={value6}
            iconContanerClass="text-lg"
            lableClass={{ root: `tracking-tight font-sans ${labelTick}` }}
            iconComponent={<GoCheck className={ticks} />}
          />
        </div>
        <div className={`mx-auto space-y-1 py-2 ${addContainer}`}>
          <Icon_Label
            mainClass={value7Class}
            tooltipProps={{ open: false }}
            labelValue={value7}
            iconContanerClass="text-lg"
            lableClass={{ root: `tracking-tight font-sans ${plusLabel}` }}
            iconComponent={
              <TiPlus
                className={`text-lg text-ideeza-100 ${value7IconClass}`}
              />
            }
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={value8}
            iconContanerClass="text-lg"
            lableClass={{ root: `tracking-tight font-sans ${plusLabel}` }}
            iconComponent={<TiPlus className="text-lg text-ideeza-100" />}
          />
          <Icon_Label
            mainClass={consultClass}
            tooltipProps={{ open: false }}
            labelValue={consult}
            iconContanerClass="text-lg"
            lableClass={{ root: `tracking-tight font-sans ${plusLabel}` }}
            iconComponent={<TiPlus className="text-lg text-ideeza-100" />}
          />
        </div>
      </div>
      <div className="bg-pricing h-40 z-50 w-full -mt-12">
        <Label value={value9} classes={{ root: `${labelPrivate}` }} />
        <div
          className={`flex flex-col items-center mx-auto absolute bottom-0 w-full -mb-5 px-10 ${btnGroupClass}`}
        >
          <Button
            iconEnd={
              <>
                <FaLongArrowAltRight />
              </>
            }
            value={value10}
            classes={{
              root: "bg-white shadow-md rounded-md text-purple-500 w-full",
            }}
          />
          <Button
            value={value11}
            classes={{
              root: `bg-gray-300 px-4 shadow-md rounded-none hover:rounded-lg text-white ${lastBtnClass}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

Pricing.defaultProps = {
  mainClass: "bg-pink-100",
  heading: "flex items-start absolute -mt-9 px-3",
  mainLogo: "h-18 w-18",
  labelClass: "text-yellow-200 font-semibold bg-white pt-3",
  src: "/assets/images/project-management.png",
  ImgClass: "w-14 h-14",
  value1Class: "xl:text-xl text-lg tracking-wide text-gray-300 font-semibold",
  value2Class:
    "xl:text-base text-md text-left text-gray-900 font-sans uppercase font-samibold tracking-tight",
  value1: "CREATOR",
  value2: "Maker",
  value3: "Electronics",
  value4: "Code",
  value5: "Cover",
  value6: "Social",
  value7: "1 active project",
  value8: "In platform purchases",
  value9: "Private",
  value10: "$799",
  value11: "$799 X 12 = $11988",
  ticks: "text-green-200 w-5",
  labelTick: "text-base text-gray-300 pl-2",
  plusLabel: "text-base text-gray-300 pl-1",
  labelPrivate:
    "text-3xl tracking-widest text-center uppercase font-sans text-gray-200",
  lastBtnClass: "rounded-b-2xl",
  listContainer:
    "bg-white grid grid-cols-2 gap-x-4 gap-y-1 xl:pl-8 mx-6 rounded",
  addContainer: "px-5",
};
export default Pricing;
