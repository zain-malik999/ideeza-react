import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";

function TabArticalUpper(props) {
  const {
    articalValue1,
    articalValue1Class,
    articalDate,
    articalDateClass,
    articalText,
    articalTextClass,
    valueLabel,
    iconLines,
    valueIcon,
    labelInnerClass,
    valueLabel2,
    valueIcon2,
    valueLabel3,
    valueIcon3,
    imgClass,
  } = props;
  return (
    <>
      <Label
        value={articalValue1}
        classes={{ root: `${articalValue1Class}` }}
      />
      <Label value={articalDate} classes={{ root: `${articalDateClass}` }} />
      <Label value={articalText} classes={{ root: `${articalTextClass}` }} />
      <div className={iconLines}>
        <Icon_Label
          tooltipProps={{ open: false }}
          labelValue={valueLabel}
          iconContanerClass="text-xl"
          lableClass={{
            root: `${labelInnerClass}`,
          }}
          iconComponent={valueIcon}
        />
        <Icon_Label
          tooltipProps={{ open: false }}
          labelValue={valueLabel2}
          iconContanerClass="text-lg"
          lableClass={{
            root: `${labelInnerClass}`,
          }}
          iconComponent={valueIcon2}
        />
        <Icon_Label
          tooltipProps={{ open: false }}
          labelValue={valueLabel3}
          iconContanerClass="text-lg"
          lableClass={{
            root: `${labelInnerClass}`,
          }}
          iconComponent={valueIcon3}
        />
      </div>
      <hr />
      <div className="h-56 md:w-1/2 w-full rounded-lg overflow-hidden my-2">
        <img src="/assets/images/bg.png" className={imgClass} alt="Banner" />
      </div>
    </>
  );
}
TabArticalUpper.defaultProps = {
  articalValue1Class: "text-md text-gray-300",
  articalDateClass:
    "text-gray-700 text-sm font-thin pt-2 underline text-gray-325",
  articalTextClass: "text-sm text-gray-925 font-thin pt-2",
  iconLines: "flex py-2",
  labelInnerClass: "text-md text-gray-300 font-sans px-2",
  imgClass: "w-full h-full",
  valueIcon: "text-gray-850",
  valueIcon3: "text-gray-850",
};
export default TabArticalUpper;
