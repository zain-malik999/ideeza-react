import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";

function ImgCard(props) {
  const {
    carouselHeight,
    img,
    value,
    numbering,
    iconComponent1,
    iconComponent2,
    iconComponent3,
    iconsClass,
    iconValue1,
    iconValue2,
    iconValue3,
    noClass,
    mainIconClass,
    iconContanerClass,
    lableClass,
    imageSettingIcon,
    imagesIdeezaIcon,
    imgClasses,
    onClick,
    text,
  } = props;
  return (
    <>
      <div
        onClick={onClick}
        className={`${carouselHeight} p-0 relative w-full`}
      >
        <img
          src={img}
          alt="car"
          className={`${imgClasses} absolute top-0 w-full h-full`}
        />
        <div className="h-full flex flex-col justify-between absolute w-full">
          <div className={`flex justify-start ${numbering}`}>
            <Label
              value={value}
              classes={{ root: `text-white ${noClass} ml-3` }}
            />
          </div>
          <div className="absolute bottom-0 left-0">{text}</div>
          <div className={`absolute bottom-0 pl-1 mb-2 w-full ${iconsClass}`}>
            <Icon_Label
              mainClass={mainIconClass}
              iconContanerClass={iconContanerClass}
              lableClass={lableClass}
              labelValue={iconValue1}
              tooltipProps={{
                title: "Conects",
                placement: "top-end",
                arrow: true,
                classes: {
                  tooltip:
                    "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
                  arrow: "text-white w-2 text-md ",
                },
              }}
              iconComponent={iconComponent1}
            />
            <Icon_Label
              tooltipProps={{
                title: "Views",
                placement: "top-end",
                arrow: true,
                classes: {
                  tooltip:
                    "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
                  arrow: "text-white w-2 text-md ",
                },
              }}
              mainClass={mainIconClass}
              iconContanerClass={iconContanerClass}
              lableClass={lableClass}
              labelValue={iconValue2}
              iconComponent={iconComponent2}
            />
            <Icon_Label
              tooltipProps={{
                title: "Like",
                placement: "top-end",
                arrow: true,
                classes: {
                  tooltip:
                    "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
                  arrow: "text-white w-2 text-md ",
                },
              }}
              mainClass={mainIconClass}
              iconContanerClass={iconContanerClass}
              lableClass={lableClass}
              labelValue={iconValue3}
              iconComponent={iconComponent3}
            />
          </div>
        </div>
      </div>
    </>
  );
}
ImgCard.defaultProps = {
  iconsClass: "flex justify-between space-x-2",
  img: "/assets/images/feeds/feeds-car.png",
};

export default ImgCard;
