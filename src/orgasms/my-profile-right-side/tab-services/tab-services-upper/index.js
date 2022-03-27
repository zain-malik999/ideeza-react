import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";
import { AiOutlineCheckCircle } from "react-icons/ai";

function TabServicesUpper(props) {
  const {
    value1,
    value1Class,
    value2,
    mainClass,
    leftSide,
    labelTitle,
    rightSide,
    labelIcon,
  } = props;
  const data = [
    { value: "Pick-up" },
    { value: "Ship" },
    { value: "3D modeling" },
    { value: "Geometry optimization" },
  ];
  const data2 = [
    { value: "ISO 9001:2008" },
    { value: "ISO 13485:2003" },
    { value: "AS/EN/JISQ 91002:2009 (RevC)" },
    { value: "ISO 9001:2015" },
  ];
  return (
    <>
      <div className={mainClass}>
        <div className={leftSide}>
          <Label value={value1} classes={{ root: `${value1Class}` }} />
          {data.map((i, k) => {
            return (
              <>
                <Icon_Label
                  tooltipProps={{ open: false }}
                  labelValue={i.value}
                  iconContanerClass="text-lg"
                  lableClass={{
                    root: `${labelTitle}`,
                  }}
                  iconComponent={<AiOutlineCheckCircle className={labelIcon} />}
                />
              </>
            );
          })}
        </div>
        <div className={rightSide}>
          <Label value={value2} classes={{ root: `${value1Class}` }} />
          {data2.map((i, k) => {
            return (
              <>
                <Icon_Label
                  tooltipProps={{ open: false }}
                  labelValue={i.value}
                  iconContanerClass="text-lg"
                  lableClass={{
                    root: `${labelTitle}`,
                  }}
                  iconComponent={<AiOutlineCheckCircle className={labelIcon} />}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
TabServicesUpper.defaultProps = {
  mainClass: "grid md:grid-cols-6",
  leftSide: "w-full md:border-r md:col-span-3 pl-5 lg:pl-14 md:pl-8",
  labelTitle:
    "tracking-tight text-sm font-sans pl-2 py-1 text-gray-430 font-thin",
  value1Class: "text-current font-semibold text-md pb-2 pl-1",
  labelIcon: "text-current text-xl",
  rightSide: "w-full md:col-span-3 pl-5 xl:pl-24 md:pl-10",
};
export default TabServicesUpper;
