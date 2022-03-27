import React from "react";
import { Label, Avatar, Select } from "atoms";
function CartAvatarLabels(props) {
  const {
    mainClasses,
    src,
    avaterClasses,
    title,
    subtitle,
    titleClasses,
    subtitleClasses,
    avatarText,
    options,
    img,
    img1,
    imgClass,
    imgClass1,
    slectClass,
    selectImgClass,
    home,
  } = props;
  return (
    <>
      <div className={mainClasses}>
        <div className="flex items-start">
          <div className="flex flex-col md:items-center items-start w-14 md:w-16">
            <Avatar
              src={src}
              classes={{ root: `h-11 w-11 ${avaterClasses}` }}
            />
            <Label
              value={avatarText}
              classes={{
                root: `text-xs text-gray-960 text-center font-light tracking-tight font-sans pt-1`,
              }}
            />
          </div>
          <div className="pt-1">
            <Label
              value={title}
              classes={{
                root: `text-lg text-gray-300 font-light tracking-tight font-sans leading-5 ${titleClasses}`,
              }}
            />
            <Label
              value={subtitle}
              classes={{
                root: `text-xs text-current font-light tracking-tight font-sans leading-5 ${subtitleClasses}`,
              }}
            />
          </div>
        </div>
        <div className={`pt-1 md:pl-1 md:space-y-1 relative ${selectImgClass}`}>
          <Select
            placeholder="Fedex"
            containerClass={`md:bg-gray-1000 bg-white border-gray-160 h-10 px-0 w-20 rounded ${slectClass}`}
            options={options}
          />
          <img src={img} alt="" className={imgClass} />
          <img src={img1} alt="" className={imgClass1} />
          {home}
        </div>
      </div>
    </>
  );
}
CartAvatarLabels.defaultProps = {
  mainClasses:
    "flex md:flex-row flex-col items-start md:space-x-1 bg-gray-150 h-full md:bg-white rounded-lg md:rounded-none w-full md:w-auto p-2 md:p-0",
  title: "John Doe",
  subtitle: "Frizty Studio LTD",
  avatarText: "Fabrication",
  img: "/assets/images/cart_arrow_1.png",
  img1: "/assets/images/cart_arrow_down.png",
  imgClass: "w-22 hidden md:inline",
  imgClass1: "md:hidden ml-auto h-16",
  selectImgClass: "md:-mt-6 grid grid-cols-2 md:grid-cols-1 items-end",
};
export default CartAvatarLabels;
