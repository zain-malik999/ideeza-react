import React from "react";
import { Label } from "atoms";
import { AiFillStar } from "react-icons/ai";
import { Icon_Label } from "..";
function NewsCard(props) {
  const {
    secClass,
    spnsrValue,
    spnsrValueClasses,
    desc,
    uprValue,
    datevalue,
    uprlabelClasses,
    lowerlabelClasses,
    bottomClass,
    innerClass,
    img,
    imgClass,
  } = props;
  return (
    <>
      <div className={secClass}>
        <img src={img} className={`w-full ${imgClass}`} />
        <div class={innerClass}>
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={spnsrValue}
            iconContanerClass="text-lg"
            lableClass={{
              root: `text-gray-200 uppercase tracking-tight text-base ml-1 font-sans ${spnsrValueClasses}`,
            }}
            iconComponent={<AiFillStar className="text-gray-200 text-xl" />}
          />
          <Label value={uprValue} classes={{ root: `${uprlabelClasses}` }} />
          <Label value={desc} classes={{ root: `${lowerlabelClasses}` }} />
        </div>
        <Label value={datevalue} classes={{ root: `${bottomClass}` }} />
      </div>
    </>
  );
}
NewsCard.defaultProps = {
  secClass: "rounded-t-lg rounded-b-md overflow-hidden bg-white shadow-md",
  img: "/assets/images/feeds/1.png",
  imgClass: "h-46",
  innerClass: "px-5 pt-3",
  uprlabelClasses: "pt-1 text-sm",
  lowerlabelClasses: "pt-4 tracking-tight text-sm pb-1",
  bottomClass: "border-t border-gray-750 px-5 pt-1 pb-3 text-gray-200",
};
export default NewsCard;
