import React, { useState } from "react";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import { IconButton } from "@material-ui/core";
import { AiFillEye } from "react-icons/ai";
import { Icon_Label } from "molecules";
import { Label } from "atoms";
import "@brainhubeu/react-carousel/lib/style.css";
function ProjectCarousel({
  projects,
  carouselHeight,
  noClass,
  iconContanerClass,
  mainIconClass,
  lableIconClass,
  imageSettingIcon,
  imagesIdeezaIcon,
  numbering,
  numberingValue,
  top = "65%",
}) {
  const [value, setValue] = useState(0);
  const handleChange = (e) => setValue(e);
  return (
    <div className="relative w-full">
      <Carousel
        value={value}
        onChange={handleChange}
        slides={projects?.map((v, k) => {
          return (
            <div className={`${carouselHeight} pb-3 w-full relative`}>
              <img
                src={"/assets/images/car.png"}
                alt="soem"
                className="absolute top-0 w-full h-full"
              />
              <div className="h-full flex flex-col justify-between absolute w-full">
                <div className={`flex justify-start ${numbering}`}>
                  <Label
                    value={numberingValue}
                    classes={{ root: `text-white ${noClass} ml-1` }}
                  />
                </div>
                <div className="flex justify-between absolute bottom-0 pl-1 mb-2 w-full">
                  <Icon_Label
                    mainClass={mainIconClass}
                    iconContanerClass={iconContanerClass}
                    lableClass={lableIconClass}
                    labelValue={v?.like}
                    tooltipProps={{
                      title: "Actions",
                      placement: "top-end",
                      arrow: true,
                      classes: {
                        tooltip:
                          "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
                        arrow: "text-white w-2 text-md ",
                      },
                    }}
                    iconComponent={
                      <img
                        src="/assets/images/settings.png"
                        className={imageSettingIcon}
                        alt="i"
                      />
                    }
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
                    lableClass={lableIconClass}
                    labelValue={v?.view}
                    iconComponent={<AiFillEye className="text-black-350" />}
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
                    lableClass={lableIconClass}
                    labelValue={v?.notification_count}
                    iconComponent={
                      <img
                        src="/assets/images/ideeza.png"
                        className={imagesIdeezaIcon}
                        alt="i"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      />
      <div
        style={{ top }}
        className="dot absolute w-full flex items-center justify-center"
      >
        {projects?.length > 1
          ? projects?.map((v, k) => (
              <IconButton
                key={k}
                onClick={handleChange.bind(this, k)}
                className={` mx-1 transition-all p-0 outline-none rounded-full bg-current shadow-lg ${
                  value === k
                    ? "border-2 border-solid border-white w-4 h-4"
                    : "opacity-75 w-3 h-3"
                }`}
              ></IconButton>
            ))
          : null}
      </div>
    </div>
  );
}
ProjectCarousel.defaultProps = {
  project: [],
};
export default ProjectCarousel;
