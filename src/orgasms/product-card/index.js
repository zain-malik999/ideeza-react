import React from "react";
import { AvatarLabels } from "molecules";
import { ImgCard } from "..";
import { AiFillEye } from "react-icons/ai";
function ProductCard({ data }) {
  return (
    <>
      <ImgCard
        carouselHeight="md:h-42 h-64"
        imgClasses="rounded-md"
        iconComponent1={<AiFillEye className="text-white text-2xl" />}
        iconComponent2={
          <img src="/assets/images/ideeza_icon_white.png" alt="" />
        }
        iconComponent3={<img src="/assets/images/like_white_icon.png" alt="" />}
        iconContanerClass="bg-transparent mr-2"
        iconValue1={data?.view}
        iconValue2={data?.likes}
        iconValue3={data?.likes}
        lableClass={{ root: "text-sm text-white" }}
        iconsClass="flex sm:justify-end justify-center"
        img="/assets/images/car.png"
      />
      <AvatarLabels
        avaterClasses="hidden"
        mainClasses="pt-1"
        mainClassesLabel="pl-0"
        title={data?.title}
        subtitle={data?.line_of_business}
        titleClasses="text-gray-300 pt-2 leading-4 font-medium tracking-tight text-base"
        subtitleClasses="text-gray-810 font-medium tracking-tight text-base"
      />
    </>
  );
}

export default ProductCard;
