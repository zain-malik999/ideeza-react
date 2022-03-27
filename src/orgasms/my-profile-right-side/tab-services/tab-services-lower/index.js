import React from "react";
import { Label } from "atoms";

function TabServicesLower(props) {
  const {
    mainClass,
    lowerTitleP,
    lowerTitle,
    rightSide,
    leftSide,
    value1,
    value1Class,
    value2,
    additionalInfo,
    serviceDetail,
  } = props;
  const data = [
    { value: "ADM-Engineering" },
    { value: "ADM-workshops" },
    { value: "ADM-Spare Parts" },
  ];
  const data2 = [
    { value: "ADM Customized Volume Manufacturing" },
    { value: "ADM-Quality" },
    { value: "ADM-Frame Contact" },
  ];
  return (
    <>
      <div className={mainClass}>
        <div className={lowerTitleP}>
          <Label value="Additional info" classes={{ root: `${lowerTitle}` }} />
        </div>
        <div className={leftSide}>
          <Label value={value1} classes={{ root: `${value1Class}` }} />
          <div>
            {data.map((i, k) => {
              return (
                <Label
                  value={i.value}
                  classes={{
                    root: `${serviceDetail}`,
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className={rightSide}>
          <Label value={value2} classes={{ root: `${value1Class}` }} />
          <div>
            {data2.map((i, k) => {
              return (
                <>
                  <Label
                    value={i.value}
                    classes={{
                      root: `${serviceDetail}`,
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
TabServicesLower.defaultProps = {
  mainClass: "grid md:grid-cols-6 p-5 bg-gray-1000 mt-5 rounded-xl",
  lowerTitleP: "md:col-start-1 md:col-end-7 w-full lg:pl-10 md:pl-5 pb-5",
  lowerTitle: "text-current font-semibold",
  leftSide: "w-full md:border-r md:col-span-3 flex lg:pl-10 md:pl-5",
  rightSide: "w-full md:col-span-3 md:pl-5 pt-5 md:pt-0 flex",
  value1Class: "text-current font-semibold text-sm -mt-1 w-20 md:w-auto",
  serviceDetail:
    "tracking-tight pl-2 text-xs w-full font-sans text-gray-430 font-thin",
};
export default TabServicesLower;
