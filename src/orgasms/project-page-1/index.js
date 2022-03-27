import React from "react";
import { ProjectHeader, ImgCard } from "..";
import { AiFillEye } from "react-icons/ai";
import { ProjectCarousel } from "molecules";
import Loader from "skeltons/user/MyProjects/UserProject";
function ProjectPage(props) {
  const { value, loader, projects, changeid, handleProduct } = props;

  return (
    <div className="border-b mb-8 pb-10">
      <ProjectHeader value={value} />
      <div className="grid md:grid-cols-3 gap-3 md:pt-6 pt-3">
        {loader
          ? new Array(6).fill("").map((v, k) => <Loader key={k} />)
          : projects?.map((v, k) => {
              return !(v?.user_products?.length <= 1) ? (
                <ProjectCarousel
                  onClick={(val) => {
                    handleProduct(val?.id);
                  }}
                  projects={v?.user_products}
                />
              ) : (
                <div onClick={() => changeid(v?.id, v)}>
                  <ImgCard
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
                    iconComponent1={
                      <AiFillEye className="text-white text-2xl" />
                    }
                    iconsClass="flex sm:justify-end justify-center space-x-5 pr-2"
                    img="/assets/images/car.png"
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ProjectPage;
