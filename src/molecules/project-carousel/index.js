import React, { useState } from "react";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import { IconButton } from "@material-ui/core";
import { ImgCard } from "orgasms";
import { AiFillEye } from "react-icons/ai";
import "@brainhubeu/react-carousel/lib/style.css";
function ProjectCarousel({ projects, onClick }) {
  const [value, setValue] = useState(0);
  const handleChange = (e) => setValue(e);
  return (
    <div className="relative w-full">
      <Carousel
        value={value}
        onChange={handleChange}
        slides={projects?.map((v, k) => {
          return (
            <ImgCard
              onClick={onClick.bind(this, v)}
              key={k}
              carouselHeight="h-72"
              imgClasses="rounded-xl"
              iconComponent3={
                <img src="/assets/images/like_white_icon.png" alt="" />
              }
              iconComponent2={
                <img src="/assets/images/ideeza_icon_white.png" alt="" />
              }
              iconContanerClass="bg-transparent mr-2"
              iconValue1={v.view}
              iconValue2={v.activities}
              iconValue3={v.likes}
              mainIconClass="flex items-center"
              lableClass={{ root: "sm:text-md  text-xl text-white" }}
              iconComponent1={<AiFillEye className="text-white text-2xl" />}
              iconsClass="flex sm:justify-end justify-center space-x-5 pr-2"
              img="/assets/images/car.png"
            />
          );
        })}
      />
      <div className="dot absolute w-full flex items-center justify-center">
        {projects?.map((v, k) => (
          <IconButton
            key={k}
            onClick={handleChange.bind(this, k)}
            className={` mx-1 transition-all p-0 outline-none rounded-full bg-current shadow-lg ${
              value === k
                ? "border-2 border-solid border-white w-4 h-4"
                : "opacity-50 w-3 h-3"
            }`}
          ></IconButton>
        ))}
      </div>
    </div>
  );
}
ProjectCarousel.defaultProps = {
  project: [],
};
export default ProjectCarousel;
