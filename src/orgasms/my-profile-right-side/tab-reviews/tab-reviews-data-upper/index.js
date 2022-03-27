import React from "react";
import { Avatar, Label } from "atoms";
import { Icon_Label } from "molecules";
import { BsFlag } from "react-icons/bs";

function TabReviewsDataUpper(props) {
  const {
    mainClass,
    leftSide,
    tabAvatar,
    innerSpanClass1,
    labelInnerClass1,
    innerSpanClass2,
    rightSideIcon,
    labelClass2,
    labelInner1,
    IconClass,
    labelInner2,
    valueInner1,
    rightLabelClass,
    valueInner2,
    rightValue,
  } = props;
  return (
    <>
      <div className={mainClass}>
        <div className={leftSide}>
          <Avatar className={tabAvatar} />
          <Label
            value={
              <>
                <span>{labelInner1}</span>
                <span className={innerSpanClass1}>{labelInner2}</span>
              </>
            }
            classes={{
              root: `${labelInnerClass1}`,
            }}
          />
          <Label
            value={
              <>
                <span>{valueInner1}</span>
                <span className={innerSpanClass2}>{valueInner2}</span>
              </>
            }
            classes={{
              root: `${labelClass2}`,
            }}
          />
        </div>
        <div>
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={rightValue}
            iconContanerClass="text-lg"
            mainClass={rightSideIcon}
            lableClass={{
              root: `${rightLabelClass}`,
            }}
            iconComponent={<BsFlag className={IconClass} />}
          />
        </div>
      </div>
    </>
  );
}
TabReviewsDataUpper.defaultProps = {
  mainClass: "flex items-center justify-between",
  leftSide: "flex items-center",
  tabAvatar: "h-12 w-12",
  innerSpanClass1: "text-gray-900 font-light text-xs",
  labelInnerClass1:
    "font-sm font-semibold text-black-100 leading-4 flex flex-col pl-1 pr-2",
  innerSpanClass2: "text-gray-900 text-xs",
  labelClass2:
    "text-xs text-current font-normal flex flex-col pl-2 border-l border-current",
  rightSideIcon: "flex items-center",
  IconClass: "text-gray-900 text-lg",
  rightLabelClass: "text-gray-900 tracking-tight font-sans",
};
export default TabReviewsDataUpper;
