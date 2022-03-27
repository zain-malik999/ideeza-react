import React, { useState } from "react";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import { IconButton } from "@material-ui/core";
import { Project_Small_Carousel } from "orgasms";
import "@brainhubeu/react-carousel/lib/style.css";
function ProjectCarousel({ projects, top = "65%" }) {
  const [value, setValue] = useState(0);
  const handleChange = (e) => setValue(e);
  return (
    <div className="relative w-full">
      <Carousel
        value={value}
        onChange={handleChange}
        slides={projects?.map((v, k) => {
          return (
            <Project_Small_Carousel
              iconContanerClass="bg-white border border-ideeza-100 flex items-center justify-center text-lg rounded-full w-7 h-7"
              imageSettingIcon="w-4 h-4"
              notification={v?.notification_count}
              view={v?.view}
              numberingValue={k + 1}
              like={v?.likes}
              iconMainClass="flex items-center justify-center space-x-2 w-full"
              imagesIdeezaIcon="w-4 h-3"
              mainIconClass="flex items-center"
              lableIconClass={{
                root: "font-extrabold mr-1 text-sm pl-1 text-white",
              }}
              image={`/assets/images/car.png`}
              carouselHeight="h-80"
              titleClass="text-lg"
              nameClass="text-md text-current tracking-tight"
              noClass="text-2xl pt-1 pl-1"
              avatarClass="w-8 h-8 border border-gray-225"
              authorName={`${v?.user?.first_name} ${v?.user?.last_name}`}
              projectName={v?.title}
            />
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
