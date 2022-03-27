import React from "react";
import { Label } from "atoms";

function TabReviewsDataLower(props) {
  const {
    mainClass,
    boxTopText,
    value1,
    value1Class,
    value2,
    value2Class,
    value3,
    value3Class,
    value4,
    value4Class,
  } = props;
  return (
    <>
      <div className={mainClass}>
        <div className={boxTopText}>
          <Label value={value1} classes={{ root: `${value1Class}` }} />
          <Label value={value2} classes={{ root: `${value2Class}` }} />
        </div>
        <Label value={value3} classes={{ root: `${value3Class}` }} />
        <Label value={value4} classes={{ root: `${value4Class}` }} />
      </div>
    </>
  );
}

TabReviewsDataLower.defaultProps = {
  mainClass: "p-5 shadow-lg rounded-lg mt-3",
  boxTopText: "flex justify-between",
  value1Class: "text-base tracking-tight",
  value2Class: "font-bold text-base text-current",
  value3Class: "text-gray-850 font-sans pt-2 font-xs leading-4",
  value4Class: "text-sm font-sans pt-2 text-current",
};

export default TabReviewsDataLower;
